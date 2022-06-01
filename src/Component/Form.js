import React from "react";

const Form = ({title,frmData,frmfn}) => {
  
let fieldName,fieldValue;
const handleInputs = (e) => {
  fieldName= e.target.name;
  fieldValue= e.target.value;
  frmfn({...frmData,[fieldName]:fieldValue})
}

  return (
    <div className="App">
      
      <form method="post" id={title} className="AddressForm">
        <section><h3>{title} Address</h3>
          <label>Town</label>
          <br />
          <input type="text" name="town" value={frmData.town} onChange={handleInputs}></input>
          <br />
          <label>District</label>
          <br />
          <input type="text" name="district"value={frmData.district} onChange={handleInputs}></input>
          <br />
          <label>State</label>
          <br />
          <input type="text" name="state"value={frmData.state} onChange={handleInputs}></input>
          <br />
          <label>Pincode</label>
          <br />
          <input type="text" name="pincode" value={frmData.pincode} onChange={handleInputs}></input>
          <br />
        </section>
      </form>
    </div>
  );
};

export default Form;
