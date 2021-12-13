
//tener react en el Scope
//tener a reactdom en scope
import ReactDOM from 'react-dom';
import './index.css';
import './header/header.scss';
import reportWebVitals from './reportWebVitals';
//tener al menos un componente
import App from "./App.js";
//mostrar la app en el DOM
ReactDOM.render(
 <App/>,document.getElementById('root'))
;

reportWebVitals();
