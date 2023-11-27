mport React from 'react';

// User component that takes "user" as a prop
function User(props) {
  // Destructuring props to access user properties
  const { name, age, email } = props;

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Parent component that renders the User component
function App() {
  // User data passed as props to the User component
  const user1 = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  };

  const user2 = {
    name: 'Jane Smith',
    age: 25,
    email: 'jane@example.com',
  };

  return (
    <div>
      {/ Render the User component and pass user data as props /}
      <User name={user1.name} age={user1.age} email={user1.email} /> {/ User 1 data /}
      <User name={user2.name} age={user2.age} email={user2.email} /> {/ User 2 data /}
    </div>
  );
}

export default App;