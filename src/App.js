import React, { Component } from 'react';

import api from './lib/api';
import Cache from './lib/Cache';

import Spinner from './components/Spinner';
import ErrorPage from './components/ErrorPage';
import Logo from './components/Logo';
import StatusPage from './components/StatusPage';

import spinnerSrc from './spinner.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      errors: [],
      isPwned: false,
      updatedAt: null
    };

    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
    this.cache = new Cache('pwned_chrome');
  }

  componentDidMount() {
    const cache = this.cache.fetch();
    if (!cache) return;

    this.setState(() => {
      return cache;
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, isPwned } = this.state;

    if (!email) return;
    if (this.hasErrors()) return;
    if (isPwned != null) return;

    if(!this.isExpired()) {
      this.setState(() => {
        return {...this.state,
          isPwned: false,
          errors: ['API rate limit'],
          isLoading: false,
          email: null
        }
      })
    } else {
      api.fetchBreaches(email)
        .then((breaches) => {
          this.setState(() => {
            return {...this.state,
              isPwned: breaches.length > 0,
              errors: [],
              isLoading: false,
              updatedAt: new Date()
            };
          });
        })
        .then(() => {
          return this.cache.store(this.state);
        })
        .catch((error) => {
          this.setState(() => {
            return {...this.state,
              isPwned: false,
              errors: ['server error'],
              isLoading: false,
              updatedAt: new Date()
            };
          });
        });
    }
  }

  handleStartOver(e) {
    e.preventDefault();

    this.setState(() => {
      return {...this.state,
        isLoading: false,
        errors: [],
        isPwned: null,
        email: null
      }
    });
  }

  handleEmailUpdate(email) {
    this.setState(() => {
      return {...this.state,
        email: email,
        isLoading: true,
        isPwned: null
      }
    });
  }

  // Where does this go?
  isExpired() {
    const { updatedAt } = this.state;
    return new Date() - new Date(updatedAt) > 3000; // 3s
  }

  hasErrors() {
    const { errors } = this.state;
    return !this.isExpired() && errors && errors.length > 0;
  }
  // Where does this go?

  render() {
    const { isLoading, email, isPwned, errors } = this.state;

    return(
      <div className='App pure-g'>
        <div className="pure-u-1-1 content-wrapper">
          <Logo onStartOver={this.handleStartOver} />

          {this.hasErrors() &&
            <ErrorPage errors={errors} onStartOver={this.handleStartOver} />}

          {!this.hasErrors() && !isLoading && <StatusPage
            isPwned={isPwned}
            email={email}
            onStartOver={this.handleStartOver}
            onSubmit={this.handleEmailUpdate} />}

          {isLoading && <Spinner src={spinnerSrc} />}
        </div>
      </div>
    )
  }
}

export default App;
