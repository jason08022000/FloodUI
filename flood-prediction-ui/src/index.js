import React from 'react';
import ReactDOM from 'react-dom/client'; // 修改此行
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 新增此行

root.render( // 修改此行
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
