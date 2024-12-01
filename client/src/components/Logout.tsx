import React from 'react'
import LogoutIcon from '../assets/logout.png';
import { useNavigate } from 'react-router-dom';
function Logout() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <button onClick={handleLogout} className='fixed-left'>
      <img src={LogoutIcon} alt='logout_image' />
    </button>
  )
}

export default Logout
