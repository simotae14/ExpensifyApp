import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard Component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add Expense Component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit Expense Component
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help Component
  </div>
);

const NotFoundPage = () => (
  <div>
    404
  </div>
);

// definisco le Routes
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);


// renderizzare il Component
ReactDOM.render(routes, document.getElementById('app'));