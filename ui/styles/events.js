import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: -20px auto 0px auto;
  align-items: center;
  align-self: center;
  background: #f1faee;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const EventResume = styled.div`
  div {
    margin: 10px;
    background: #fff;
    border-bottom: 5px solid transparent;
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      color: rgba(0, 0, 0, 0.5);
      margin: 10px;
    }
  }

  h1 {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8);
    margin: 10px;
  }
`;
