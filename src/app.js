import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

// esempio children props
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            { props.children }
            <p>footer</p>
        </div>
    );
}; 


// renderizzare il Component
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
), document.getElementById('app'));
