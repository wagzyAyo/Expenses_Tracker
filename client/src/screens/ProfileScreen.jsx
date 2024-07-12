import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Loader from "../components/loader";
import { useUserDataMutation } from "../slice/userApiSlice"; 


const ProfileScreen = () => {
  const [data, setData] = useState("");
 
  const [userData, {isLoading}] = useUserDataMutation();


 useEffect(()=>{
  const fecthData = async ()=>{
    try {
      const response = await userData().unwrap()
      setData(response.user)
    } catch (err) {
      console.log(err)
    }
  }
 fecthData();
},[userData])

  return (
    <div>
      {isLoading ? (
      <>
        <Loader />
      </>)
      :
      (<Profile 
        firstName={data?.firstName} 
        lastName={data?.lastName}
        email={data?.email}
        />
      )}
      
    </div>
  )
}

export default ProfileScreen
