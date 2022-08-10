import './Grid.css';

export default function Grid({users, removeUser}) {
  return <div className="Container">
    <h3>Registered Users</h3>
    <div className="Grid-container">
      <div className="Grid-row Header">
        <span>Full Name</span>
        <span>NPI Number</span>
        <span>Address</span>
        <span>Phone Number</span>
        <span>Email</span>
        <span>Delete User</span>
      </div>
      {users.map(user => {
        const {first, last, npi, address, phone, email} = user;

        return <div className="Grid-row" key={Math.random()}>
          <span>{first} {last}</span>
          <span>{npi}</span>
          <span>{address}</span>
          <span>{phone}</span>
          <span>{email}</span>
          <button className="Delete-user" onClick={(e) => {
            e.preventDefault();
            removeUser(user);
          }}>&times;</button>
        </div>
      })}
    </div>
    
  </div>
}