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
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setInputs(initial);
  }, []);

  useEffect(() => {
    const {first, last, npi, address, phone, email} = inputs;
    if (first.length > 0 && last.length > 0 && npi.length > 0 && address.length > 0 && phone.length > 0 && email.length > 0) {
      setIsEnabled(true);
    }
    else {
      setIsEnabled(false);
    }

  }, [inputs]);

  function handleChange(e) {
    let { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  return <form onSubmit={(e) => {
    e.preventDefault();
    const newUser = {...inputs, id: Math.random()}
    const newUsers = [...users, newUser];
    setUsers(newUsers);
    resetForm();
  }}>
    <h3>User Registration Form</h3>
    <p>All inputs required to submit form</p>
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
    <button type="submit" disabled={!isEnabled}>Submit</button>
  </form>
}