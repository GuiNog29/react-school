import React, { useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Student({ match }) {
  const id = get(match, 'params.id', 0);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function handleSubmit(e) {
    e.prevetDefault();
  }

  return (
    <Container>
      <h1>{id ? 'Edit Student' : 'New Student'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Surname"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight"
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height"
        />

        <button type="submit">{id ? 'Save' : 'Create Student'}</button>
      </Form>
    </Container>
  );
}

Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
