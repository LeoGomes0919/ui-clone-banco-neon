import { createGlobalStyle } from 'styled-components';

const CreateGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none;
    text-decoration: none;

    font-family: 'Roboto',Helvetica,sans-serif;
    -webkit-font-smoothing: antialiased;
  }

 body {
    font-size: 1.125rem;
    line-height: 1.875rem;
 }
`;

export default CreateGlobalStyle;
