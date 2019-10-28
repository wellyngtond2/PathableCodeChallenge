import styled from 'styled-components';

export const Card = styled.div`
  list-style-type: none;
  width: 200px;
  height: 80px;
  text-decoration: none;
  margin: 10px;
  background: #fff;
  border-bottom: 5px solid transparent;
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
  background: #00b400;
  color: #fff;
  border: 0;
  border-radius: 3px;
  overflow: hidden;
  margin-left: auto;
  padding: 2px;
  cursor: pointer;
`;
