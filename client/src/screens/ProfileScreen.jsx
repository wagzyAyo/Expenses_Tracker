import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Nav from "../components/nav";
import Loader from "../components/loader";
import { useUserDataMutation } from "../slice/userApiSlice"; 
import { StyleSheet, css } from "aphrodite";


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
        <div >
          <Nav firstName={data?.firstName} lastName={data?.lastName} />
          <div  className={css(styleSheet.container)}>
          <Profile 
            firstName={data?.firstName} 
            lastName={data?.lastName}
            email={data?.email}
            />
            
            </div>
        </ div>
      )}
      
    </div>
  )
}

const styleSheet = StyleSheet.create({
  container: {
    margin: '10px auto',
    maxWidth: '600px',
    padding: '20px 15%'
  }
})

export default ProfileScreen
