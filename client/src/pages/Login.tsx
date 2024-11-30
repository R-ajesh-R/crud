import { FormEvent, useState } from 'react';
import '../styles/Login.css';
import ToggleSwitch from '../components/ToggleSwitch';
import axios from 'axios';
import { serverURL } from '../config';
import { useNavigate } from 'react-router-dom';
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Login = (props:any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOn, setIsOn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  function validateForm(){
    setError('');
    if(!regex.test(email)||password.length===0)
      setError('Password is missing or Email is not valid...');
  }
  const handleLogin = async(e:FormEvent) => {
    e.preventDefault();
    validateForm();
    const request={name,mail:email,password};
    const response = await axios.post(`${serverURL}login/signin`,request,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    console.log('Login:', { email, password ,response});
  };

  const handleSignUp = async (e:FormEvent) => {
    e.preventDefault();
    validateForm();
    const request={name,mail:email,password};
    const response = await axios.post(`${serverURL}login/signup`,request,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    // Handle sign up logic here
    console.log('Sign Up:', { email, password },response,props);
    if(response.status===201){
      localStorage.setItem('token',response.data.token);
      navigate('/dashboard');
    }
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
        {error && <p className='error'>{error}</p>}
        <div className="button-group">
          {isOn && <button onClick={handleLogin}>Sign In</button>}
          {!isOn && <button onClick={handleSignUp}>Sign Up</button>}
        </div>
      </form>
    </div>
  );
};

export default Login;