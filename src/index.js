import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import HookApp from './HookApp';
//import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
//import SimpleForm from './components/02-useEffect/SimpleForm';
//import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
//import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
//import FocusScreen from './components/04-useRef/FocusScreen';
//import RealExampleRef from './components/04-useRef/RealExampleRef';
//import LayoutEffect from './components/05-useLayoutEffect/LayoutEffect';
//import Memorize from './components/06-memos/Memorize';
//import MemoHook from './components/06-memos/MemoHook.js';
import CallbackHook from './components/06-memos/CallbackHook.js';
import { Padre } from './components/07-tareaMemo/Padre.js';
import TodoApp from './components/08-useReducer/TodoApp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <TodoApp />

);

/*If you want to start measuring performance in your app, pass a function
to log results (for example: reportWebVitals(console.log))
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


