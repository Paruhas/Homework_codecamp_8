import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './app/store'
import { Provider } from "react-redux";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./styles/theme"
import Fonts from './styles/Font';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* เรียกใช้ provide เป็น component รับ props เป็น store */}
      <ChakraProvider theme={theme}>
        <Fonts />
          <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
