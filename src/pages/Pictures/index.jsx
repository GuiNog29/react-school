import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Pictures({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');
  const [isLoading, setIsLoading] = useState(false);
  const [picture, setPicture] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        setPicture(get(data, 'Pictures[0].url', ''));
        setIsLoading(false);
      } catch {
        toast.error('Error getting image');
        setIsLoading(false);
        history.push('/');
      }
    };

    getData();
  }, [id]);

  async function handleChange(e) {
    const newPicture = e.target.files[0];
    const urlPicture = URL.createObjectURL(newPicture);

    setPicture(urlPicture);

    const formData = new FormData();
    formData.append('student_id', id);
    formData.append('picture', newPicture);

    try {
      setIsLoading(true);

      await axios.post('/pictures/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Picture sent successfully');

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      const { status } = get(err, 'response', '');
      toast.error('Error to sent picture');

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Pictures</Title>

      <Form>
        <label htmlFor="picture">
          {picture ? <img src={picture} alt="picture" /> : 'Select'}
          <input type="file" id="picture" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Pictures.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
