import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Modak|Ubuntu:400,700&display=swap');
/* remove all spaces from initial components */
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;  
  font-family: 'Ubuntu', sans-serif;
}

/* fill the full page height */
html, body, #app{
  height:100%;
}

body{
  background: #A8DADC;
/* keep soft edges of fonts */
  -webkit-font-smoothing: antialiased !important;
}
`;
