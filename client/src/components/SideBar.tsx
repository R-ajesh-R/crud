import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../axios';
import '../styles/sidebar.css';
import { useNavigate } from 'react-router-dom';
function SideBar() {
  const [menu,setMenu] = useState<string[]>([]);
  const [privilegeResponse,setPrivilegeResponse]=useState<Record<string,any>>({})
  const navigate = useNavigate();
  useEffect(()=>{
    let {token,cancel} = axios.CancelToken.source();
    (async function(){
        const response=await AxiosInstance.get('privilege',{
            cancelToken: token
        });
        if(response.data.userInfo)
          setPrivilegeResponse(response.data.userInfo);
        setMenu(response.data.privilege);
    })();
    return () => cancel();
  },[]);
  function handleOptionClick(e:React.MouseEvent,privilege:string){
    e.preventDefault();
    navigate(`/dashboard/${privilege}`)
  }
  return (
    <>
    {
        menu.length > 0 ? 
        <div className='sidebar'>
            {menu.map((privilege,idx)=>{
              if(!(privilegeResponse && privilegeResponse[`${privilege.toLowerCase()}_access`] && privilegeResponse[`${privilege.toLowerCase()}_access`].includes('View'))){
                return <></>
              }
              return <a onClick={(e)=>handleOptionClick(e,privilege)} key={idx}>{privilege}</a>
            })}
        </div>
        : <p>Loading data...</p>
    }
    </>
  )
}

export default SideBar
