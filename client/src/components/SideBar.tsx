import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../axios';
import '../styles/sidebar.css';
function SideBar() {
  const [menu,setMenu] = useState<string[]>([]);
  useEffect(()=>{
    let {token,cancel} = axios.CancelToken.source();
    (async function(){
        const response=await AxiosInstance.get('privilege',{
            cancelToken: token
        });
        setMenu(response.data.privilege);
    })();
    return () => cancel();
  },[])
  return (
    <>
    {
        menu.length > 0 ? 
        <div className='sidebar'>
            {menu.map((privilege,idx)=>(<div key={idx}>{privilege}</div>))}
        </div>
        : <p>Loading data...</p>
    }
    </>
  )
}

export default SideBar
