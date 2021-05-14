import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('')


  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday)
  }

  return (
  <Form>
      <Form.Group controlId="registerUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="registerPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="registerEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="registerBirthday">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="text" onChange={e => setBirthday(e.target.value)} />
      </Form.Group>

      <Button variant="dark" type="submit" onClick={handleRegister}>Register</Button>
    </Form>
  );
}

RegistrationView.PropTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.date
  }),
  onRegister: PropTypes.func,
};