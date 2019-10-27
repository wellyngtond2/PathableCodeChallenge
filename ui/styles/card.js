import styled from 'styled-components';

export const Card = styled.div`
  list-style-type: none;
  width: 270px;
  height: 110px;
  text-decoration: none;
  margin: 10px;
  background: #fff;
  transition: all 0.25s ease-in;
  border-bottom: 5px solid transparent;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border: none;
    border-bottom: 5px solid #e63946;
  }

  header {
    position: relative;
    background: #f3f3f3;
    padding: 5px 7px;
    flex-direction: row;
    svg {
      margin-right: 10px;
    }
  }
`;

export const Label = styled.span`
  position: relative;
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  font-weight: bolder;
  text-align: ;
`;

export const Content = styled.div`
  position: relative;
  align-self: flex-end;
  padding: 10px;
`;
