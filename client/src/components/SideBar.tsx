import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../axios';
import '../styles/sidebar.css';
import { useNavigate } from 'react-router-dom';
function SideBar() {
  const [menu,setMenu] = useState<string[]>([]);
  const navigate = useNavigate();
  useEffect(()=>{
    let {token,cancel} = axios.CancelToken.source();
    (async function(){
        const response=await AxiosInstance.get('privilege',{
            cancelToken: token
        });
        setMenu(response.data.privilege);
    })();
    return () => cancel();
  },[]);
  function handleOptionClick(e:React.MouseEvent,privilege:string){
    e.preventDefault();
    navigate(`/dashboard/${privilege}`)
  }
  console.log(menu)
  return (
    <>
    {
        menu.length > 0 ? 
        <div className='sidebar'>
            {menu.map((privilege,idx)=>(<a onClick={(e)=>handleOptionClick(e,privilege)} key={idx}>{privilege}</a>))}
        </div>
        : <p>Loading data...</p>
    }
    </>
  )
}

export default SideBar
