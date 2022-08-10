import { useEffect, useState } from "react";

export default function Form() {
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
  }}>
    <label htmlFor="first">
      First Name
      <input
        type="text"
        id="first"
        name="first"
        placeholder="First Name"
        value={inputs.first}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="last">
      Last Name
      <input
        type="text"
        id="last"
        name="last"
        placeholder="Last Name"
        value={inputs.last}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="npi">
      NPI Number
      <input
        type="text"
        id="npi"
        name="npi"
        placeholder="NPI Number"
        value={inputs.npi}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="address">
      Street Address
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Street Address"
        value={inputs.address}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="phone">
      Phone Number
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        value={inputs.phone}
        onChange={handleChange}
      />
    </label>
    <label htmlFor="email">
      Email Address
      <input
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