import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
// import store from './store/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReduxProvider store={store}>
        <ChakraProvider toastOptions={{ defaultOptions: { position: 'top' } }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </ReduxProvider>

);