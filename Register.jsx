import React, { useState } from 'react'
// getting values from form fields like text,radio button,select box ....
function Register() {
  const [student,setStudent]=useState(
    {
      name:"",
      gender:"",
      course:""
    }
  )
  const getDetails=(e)=>{
    const {name,value}=e.target
    setStudent({...student,[name]:value})   //to set value of variable as key using []
  }
  console.log(student);
  const formSubmit=(e)=>{
    e.preventDefault()
    alert(`
    ------STUDENT DETAILS---------

    NAME:${student.name}
    GENDER:${student.gender},
    COURSE:${student.course}
    
    `)

  }
 
  return (
    <div>
      <h1>Student Register Form</h1>
      <form onSubmit={formSubmit} style={{border:'1px solid', padding:'10px',borderRadius:'10px'}} >
        <label htmlFor="name">Name</label>
        <input onChange={getDetails} type="text" name="name" id="name " value={student.name || ""} />   {/* controlled(controlled by react) element */}
<br />

        <label htmlFor="">Gender : </label>
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="male" value={"male"} onChange={getDetails } />
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="female" value={"female"} onChange={getDetails} />
<br />

<label htmlFor="">Course : </label>
<select   name="course" id="" onChange={getDetails}>
    <option value="" defaultChecked   >Select an option</option>
    <option value="computer Science">computer Science</option>
    <option value="Business Administration">Business Administration</option>
    <option value="Hotel Management">Hotel Management</option>
</select>
<br />

<input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Register
