import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
`;

export const NewStudent = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;
