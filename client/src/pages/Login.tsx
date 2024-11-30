import { FormEvent, useState } from 'react';
import '../styles/Login.css';
import ToggleSwitch from '../components/ToggleSwitch';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOn, setIsOn] = useState(false);

  const handleLogin = (e:FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  const handleSignUp = (e:FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign Up:', { email, password });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
      <form>
        {!isOn ? 
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div> 
        :
        null
        }
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          {isOn && <button onClick={handleLogin}>Sign In</button>}
          {!isOn && <button onClick={handleSignUp}>Sign Up</button>}
        </div>
      </form>
    </div>
  );
};

export default Login;