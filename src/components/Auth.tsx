import { useState } from "react";
import Login from "./Login";

const handleAuthMode = (e) =>{
    console.log("received : ",e);    
    // setLogin((prev: boolean )=>!prev);
  }

  console.log("auth init");
  
  // const mouseOver = ()=>{
  //   console.log("mouse over");
  //   setCount((prev)=>(prev+1));    
  // }

const Auth = () => {

  // const [login, setLogin] = useState(true);
  const [count, setCount] = useState(1);

  const mouseOver = (e)=>{
    console.log("mouse over");
    setCount((prev)=>(prev+1));
  }

  return (
    <>
    <div className="m-4">
      <Login/>
    </div>
    <div className="m-4">
      <button type='button' onClick={(e)=>{handleAuthMode(e)}} >auth</button>
    </div>
    <div className="m-4">
      <button type='button' onMouseOver={mouseOver} >mouse</button>
    </div>
    <div className="m-4">
      {count}
    </div>
    </>
  )
}

export default Auth;
