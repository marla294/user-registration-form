export default function Grid({users}) {
  return <div>
    {users.map(user => <div>{user?.first}</div>)}
  </div>
}