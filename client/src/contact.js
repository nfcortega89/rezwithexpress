import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  width: 500px;
  height: 500px;
  padding: 2em 18em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 0.5em 0;
  width: 100%;
  height: 10%;
  padding: 10px;
`;

const SendButton = styled.button`
  width: 100%;
`;
const TextArea = styled.textarea`
  margin: 0.5em 0;
  width: 100%;
  height: 300px;
  padding: 10px;
`;

const sendEmail = (name, email, message) => {
  fetch('/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
      message: `${message}`
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log('here is the response: ', res);
    })
    .catch(err => {
      console.error('here is the error: ', err);
    });
};
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name',
      email: 'email',
      message: 'message'
    };
  }
  render() {
    return (
      <Wrapper
        onSubmit={e => {
          e.preventDefault();
          sendEmail(this.state.name, this.state.email, this.state.message);
        }}
        id="form"
        method="POST"
        action="mailto:nfcortega89@gmail.com">
        <Input
          type="name"
          placeholder={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
          id="name"
        />
        <Input
          type="email"
          placeholder={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          id="email"
        />
        <TextArea
          onChange={e => this.setState({ message: e.target.value })}
          id="message"
        />
        <SendButton onSubmit={this.onSubmit} type="submit">
          Send
        </SendButton>
      </Wrapper>
    );
  }
}

export default ContactForm;
