// HIGH-ORDER COMPONENTS (HOC) - E' un component (HOC) che renderizza un altro component
import React from 'react';
import ReactDOM from 'react-dom';

// creo un component
const Info = (props) => (
  <div>
    <h1>
      Info
    </h1>
    <p>
      Il valore di info è: {props.info}
    </p>
  </div>
);

// creo un HOC
const conWarningAdmin = (WrappedComponent) => {
  // questo è l'HOC che restituisco
  return (props) => (
    <div>
      { props.isAdmin && <p>
        Questa è una info privata. Per favore non condividere!
      </p> }
      
      <WrappedComponent {...props} />
    </div>
  );
};

// Creo un HOC richiediAutenticazione
const richiediAutenticazione = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>
            Per favore loggati per vedere le info
          </p>
        )
      }
    </div>
    
  );
};


// RECUPERO il Component che viene creato con HOC
const AdminInfo = conWarningAdmin(Info);
const AuthInfo = richiediAutenticazione(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Ecco i dettagli" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Ecco i dettagli" />, document.getElementById('app'));