import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Nav from "../components/nav";
import Loader from "../components/loader";
import { useUserDataMutation } from "../slice/userApiSlice"; 
import CustomButton from "../components/Button";
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
            <CustomButton name={"Update Profile"} colorType="#143BA0"/>
            <CustomButton name={"Change Password"} colorType="border"/>
            <CustomButton name={"Add Budget"} colorType="border"/>
            <CustomButton name={"Delete Account"} colorType="#E61313"/>
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
