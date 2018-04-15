import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    if (email.length === 0) return;
    this.props.onSubmit(email)
  }

  render() {
    const {email} = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="pure-form">
        <input type="email" className="pure-input-rounded" placeholder="Email" value={email} onChange={this.handleChange}/>
        {' '}
        <button type="submit" className="pure-button pure-button-primary">Pwned?</button>
      </form>
    );
  }
}

EmailForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default EmailForm;
