import React from 'react';

const EditExpensePage = (props) => {
  return (
    <div>
      Modifica la spesa con id {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;