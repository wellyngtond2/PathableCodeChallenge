import styled from 'styled-components';

export const Card = styled.div`
  list-style-type: none;
  width: 200px;
  text-decoration: none;
  margin: 10px;
  background: #fff;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 2px;

  h4 {
    margin-bottom: 4px;
    color: #e63946;
  }
  p {
    align-items: center;
    font-size: 12px;
    margin: 1px;
    svg {
      margin-right: 10px;
    }
  }

  button {
    align-items: flex-end;
  }
`;

export const PeopleButton = styled.button`
  background: ${props => (!props.checked ? '#34A853' : '#EA4335')};
  color: #fff;
  border: 0;
  overflow: hidden;
  margin-left: auto;
  padding: 4px;
  cursor: pointer;
  width: 100%;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;
