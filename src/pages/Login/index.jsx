import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispath = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid E-mail.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Invalid Password.');
    }

    if (formErrors) return;

    dispath(actions.LoginRequest({ email, password }));
  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail"
        />

        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />

        <button type="submit">Login</button>
      </Form>
    </Container>
  );
}
