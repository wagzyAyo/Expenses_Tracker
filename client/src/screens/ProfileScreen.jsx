import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Nav from "../components/nav";
import Loader from "../components/loader";
import { useUserDataMutation } from "../slice/userApiSlice"; 
import { Button } from "@material-tailwind/react";


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
      (
        <>
          <Nav firstName={data?.firstName} lastName={data?.lastName} />
          <Profile 
            firstName={data?.firstName} 
            lastName={data?.lastName}
            email={data?.email}
            />
            <Button variant="contained">Update Profile</Button>
        </>
      )}
      
    </div>
  )
}

export default ProfileScreen
