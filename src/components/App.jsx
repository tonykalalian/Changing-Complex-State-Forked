import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleFirstName}
          value={firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleLastName}
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
