import React, {Fragment} from 'react';

import './App.css';

//component
import ListTodo from "./components/ListTodo";
import InputTodo from "./components/InputTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo/>
        <div className="mt-3">
        <ListTodo/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
