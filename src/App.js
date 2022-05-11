import React from 'react';
import AppNavigation from './navigation/index';
import { Provider } from 'react-redux';
import store from './store/index';

import {initCategoria,getCategorias} from './db';
import {initProducto} from './db';

import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

initCategoria()
  .then(() => {
    console.log('DB initialized');
    //getCategorias().then(data=> console.log(data))
    initProducto()
  })
  .catch(err => {
    console.log('DB initialization failed', err);
  });


const App = () => {
  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  );
};


export default App;
