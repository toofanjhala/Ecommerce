import ReactDOM from 'react-dom/client';
import './../node_modules/react-bootstrap/dist/react-bootstrap'
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import StoreRedux from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={StoreRedux}>
<App />
</Provider>
);
