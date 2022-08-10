import { useEffect, useState } from "react";
import './Form.css';

export default function Form({users, setUsers}) {
  const initial = {
    first: '',
    last: '',
    npi: '',
    address: '',
    phone: '',
    email: ''
  };
  const [inputs, setInputs] = useState(initial);

  useEffect(() => {
    setInputs(initial);
  }, []);

  function handleChange(e) {
    let { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  return <form onSubmit={(e) => {
    e.preventDefault();
    console.log('clicked submit');
    let newUsers = [...users, inputs];
    setUsers(newUsers);
  }}>
    <h3>User Registration Form</h3>
    <label htmlFor="first" className="Label">
      First Name
      <input
        className="Field"
        type="text"
        id="first"
        name="first"
        placeholder="First Name"
        value={inputs.first}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="last" className="Label">
      Last Name
      <input
        className="Field"
        type="text"
        id="last"
        name="last"
        placeholder="Last Name"
        value={inputs.last}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="npi" className="Label">
      NPI Number
      <input
        className="Field"
        type="text"
        id="npi"
        name="npi"
        placeholder="NPI Number"
        value={inputs.npi}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="address" className="Label">
      Street Address
      <input
        className="Field"
        type="text"
        id="address"
        name="address"
        placeholder="Street Address"
        value={inputs.address}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="phone" className="Label">
      Phone Number
      <input
        className="Field"
        type="text"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        value={inputs.phone}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="email" className="Label">
      Email Address
      <input
        className="Field"
        type="text"
        id="email"
        name="email"
        placeholder="Email Address"
        value={inputs.email}
        onChange={handleChange}
      />
    </label>
    <button type="submit">Submit</button>
  </form>
}