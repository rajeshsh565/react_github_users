import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <section className="container">
      <h1>Github Users</h1>
      {users.map((user) => {
        const { login, avatar_url, html_url, id } = user;
        return (
          <div className="users" key={id}>
            <img src={avatar_url} alt={login} className="img" />
            <h3 className="name" onClick={() => window.open(html_url)}>
              {login}
            </h3>
          </div>
        );
      })}
    </section>
  );
};
export default App;
