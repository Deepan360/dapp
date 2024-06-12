// src/App.js

import { Fragment } from 'react';
import { Header } from './components/Header';

import "./css/App.css";
import { FunctionalSample } from './components/FunctionalSample';
import { MultiTypeComponent } from './components/MultiTypeComponent';
import { OneOfSample } from './components/OneOfSample';
import { ArraySample } from './components/ArraySample';
import { Student } from './components/Student';
import { ChildrenComponent } from './components/ChildrenComponent';
function App() {
  const items=[
    {id:1,name: 'Student'},
    {id:2,name: 'teacher'},
    {id:3,name: 'mike'}
  ]

  const handleClick =() => {
    alert("button Clicked!");
  };

  return( 
    <Fragment>
   <Header/>
  <Student name="deepan" age={23} gender={true} />
   <Student name="deepan" age={23} gender={true} />
   <Student name="deepan" age={23} gender={true} />
   <Student  />
    <ChildrenComponent>
        <h1>Hello</h1>
      <h2>bye</h2>
    </ChildrenComponent>
   <ArraySample items={items}/>
<OneOfSample color="castelblue"/>
 <MultiTypeComponent value="Hello"/>
<MultiTypeComponent value={42} />
<MultiTypeComponent value={true} /> 
<div>
  <h2>Parental Component</h2>
  <FunctionalSample handleClick={handleClick} />
</div>



    </Fragment>
  );
}

export default App;
