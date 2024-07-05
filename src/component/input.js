import './display.css'
import { useState } from 'react';
function Input({setRounds}){
  const handleInputChange = (event) => {
    
    setRounds(event.target.value);
  };
    return <h3>
    Number of Rounds: 
    <input className="round" id="remaining" type="number" onChange={handleInputChange}/>
  </h3>
}
function InputText({setUserName}){
  const[errorObj,setErrorObj]=useState('')
  const handleInputChange = (event) => {
    
    setUserName(event.target.value);
  
  };
  function validationMethod(name){
    if(/[0-9]/.test(name)){
      setErrorObj=`Your Phone Number Can't have Charector ! Please Correct input`
    }
  }

    return <h3>
    Name : 
    <input className="round" id="remaining" type="text" onChange={handleInputChange}
    onBlur={validationMethod(setUserName)}
    />
    {errorObj && <div className="error">{errorObj}</div>}
  </h3>

}
export { Input,
          InputText}
