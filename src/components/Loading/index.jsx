import React from 'react';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';

import { Container } from './styled';
import './style.css';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <div>
        <BarLoader text={'Loading...'} />
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
