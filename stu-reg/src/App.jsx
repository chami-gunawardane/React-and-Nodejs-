import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Student />
    </>
  );
}

function Student({}) {

  const [name, setName] = useState();
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDOBChange = (event) => {
    setDob(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <p className="text">WELCOME TO DAY 3 ACTIVITY</p>
        <div>
          <div className="name">
            <label className="student-name" htmlFor="nameId">
              Name
            </label>
          </div>
          <div className="namepl">
            <input
              id="nameId"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => handleNameChange(e)}
            />
          </div>
        </div>

        <div>
          <span className="dob">
            <label className="student-dob" htmlFor="nameId">
              DOB
            </label>
          </span>
          <span className="dobpl">
            <input
              id="dobId"
              type="text"
              placeholder="Enter your date of brith"
              onChange={(e) => handleDOBChange(e)}
            />
          </span>
        </div>

        <div>
          <span className="gender">
          <label className="student-gender">Gender</label>
          </span>

          <span className="genderpl">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(e) => handleGenderChange(e)}
          />
          
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(e) => handleGenderChange(e)}
          />
          <label htmlFor="female">Female</label>
          </span>
        </div>

      </div>
    </div>
  );
}
