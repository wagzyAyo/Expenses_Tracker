import { useState, useEffect } from "react";
import UpdateProfile from "../components/UpdateProfile"
import Nav from "../components/nav";
import { useUserDataMutation } from "../slice/userApiSlice";
import Footer from "../components/footer";

const UpdateProfileScreen = () => {

    const [data, setData] = useState("");
 
  const [userData, ] = useUserDataMutation();


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
        <Nav />
        <UpdateProfile initialValues={data} />
        <Footer />
    </div>
  )
}

export default UpdateProfileScreen
