import React,{useState} from 'react'
import Form  from './Component/Form'
const App = () => {
  const [prsntAdd,setPrsntAdd] = useState({
    town:"",
    district:"",
    state:"",
    pincode:"",
  });
  const [prmntAdd,setPrmntAdd] = useState({
    town:"",
    district:"",
    state:"",
    pincode:"",
  });
  const handleCheck = (e) => {
if(e.target.checked === true){
  setPrmntAdd({...prsntAdd})
}
  }
  return (
    <>
    <Form title={'Present'} frmData={prsntAdd} frmfn={setPrsntAdd} />
    <input type="checkbox" onClick={handleCheck}></input><label>same as present address</label>
    <Form title={'Permanent'} frmData={prmntAdd} frmfn={setPrmntAdd}  />
    </>
  )
}

export default App