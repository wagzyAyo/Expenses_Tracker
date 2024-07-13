import { useState, useEffect } from "react";
import UpdateProfile from "../components/UpdateProfile"
import Nav from "../components/nav";
import { useUserDataMutation, useUpdateprofileMutation } from "../slice/userApiSlice";
import Footer from "../components/footer";
import { toast } from "react-toastify";

const UpdateProfileScreen = () => {

    const [data, setData] = useState("");
 
  const [userData, ] = useUserDataMutation();
  const [updateProfile] = useUpdateprofileMutation();


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
 },[userData]);
 
 const handleSubmit = async (profileData)=>{
    try {
        await updateProfile(profileData).unwrap();
        toast.success("Profile Updated")
    } catch (err) {
        toast.error(err?.message)
        console.log(`Error sending request ${err}`)
    }
    
 }

  return (
    <div>
        <Nav />
        <UpdateProfile initialValues={data} onSubmit={handleSubmit} />
        <Footer />
    </div>
  )
}

export default UpdateProfileScreen
