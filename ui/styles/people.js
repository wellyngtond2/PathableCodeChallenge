import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: top;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #457b9d;
      text-decoration: none;
    }
  }
`;
