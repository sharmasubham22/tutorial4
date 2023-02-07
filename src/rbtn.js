import React, {useState} from "react";
import { useForm } from "react-hook-form";
import './nav2.css';
  
function FirstFactor() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const { register, handleSubmit  } = useForm();

  return (
    <div className="pg">
    <h1 style={{fontWeight:"bold"}}>Payment</h1>
      <form  sx={{ display: 'flex', gap: 2 }}>
        
        <div className="roles">
        <input type="radio"
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        id="option-1"
      />
      <input type="radio"
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        id="option-2"
      />
      <input type="radio"
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-buttons"
        id="option-3"
      />
      <label htmlFor="option-1" className="option option-1">
      <div className="dot"></div>
      <span>Credit</span>
      </label>

   <label htmlFor="option-2" className="option option-2">
     <div className="dot"></div>
      <span>Debit</span>
   </label>

   <label htmlFor="option-3" className="option option-3">
     <div className="dot"></div>
      <span>Wallet</span>
   </label>
      </div>

        {selectedValue==='a' && <div className="form">
          
          <input type="text" style={{width: 500, padding: 12, margin:8}} id="formfield" placeholder="Enter name on card" required/><br></br>
          <input type="number"  style={{width: 500, padding: 12, margin:8}} placeholder="Enter credit card number" required /><br></br>
          <input type="number" style={{width: 500, padding: 12, margin:8}} id="formfield" placeholder="Expiry" required/><br></br>
          <input type="number"  style={{width: 500, padding: 12, margin:8}} placeholder="CVV" required /><br></br>
          <button type="submit">Pay</button>
          
          </div> }

          {selectedValue==='b' && <div className="form">
          
          <input type="text" style={{width: 500, padding: 12, margin:8}} id="formfield" placeholder="Enter name on card" required/><br></br>
          <input type="number"  style={{width: 500, padding: 12, margin:8}} placeholder="Enter debit card number" required /><br></br>
          <input type="number" style={{width: 500, padding: 12, margin:8}} id="formfield" placeholder="Expiry" required/><br></br>
          <input type="number"  style={{width: 500, padding: 12, margin:8}} placeholder="CVV" required /><br></br>
          <button type="submit">Pay</button>
          
          </div> }

          {selectedValue==='c' && <div className="form">
          
          <h3>Shobhit Arora</h3>
          <h3>Available Balance: $20</h3>
          <input type="number"  style={{width: 500, padding: 12, margin:8}} placeholder="Top Up Amount" required /><br></br>
          <button type="submit">Pay</button>
          
          </div> }

        {/* {selectedValue==='b' && <div className="form">
          <input type="text" style={{width: 500, padding: 12, margin:8}} placeholder="Enter Restaurant's Name" {...register("rest1")} 
          onChange={(event)=> SetRestName(event.target.value)} required/><br></br>
          
          <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} style={{width: 500, padding: 12, margin:8}} 
          placeholder="Enter Restaurant's Email Address" required/><br></br>
          
          <input type="tel" style={{width: 500, padding: 12, margin:8}} placeholder="Enter Restaurant's Contact Number" {...register("rest3")} 
          onChange={(event)=> SetRestPhone(event.target.value)} required/><br></br>
          
          <input type="text" style={{width: 500, padding: 12, margin:8}} placeholder="Enter Restaurant's Address" {...register("rest2")} 
          onChange={(event)=> SetRestAddress(event.target.value)} required/><br></br>
          
          <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} style={{width: 500, padding: 12, margin:8}} 
          placeholder="Create a Password" required/><br></br>
          
          <button type="submit">Next</button>
          </div>} */}
           
      </form>
      
    </div>
  );
}

export default FirstFactor;
