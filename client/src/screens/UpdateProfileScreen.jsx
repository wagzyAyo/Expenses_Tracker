import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "../components/UpdateProfile"
import Nav from "../components/nav";
import { useUserDataMutation} from "../slice/userApiSlice";
import Footer from "../components/footer";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateProfileScreen = () => {

    const [data, setData] = useState("");
 
  const [userData, ] = useUserDataMutation();
  const navigate = useNavigate()


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
        const response = await axios.put("https://expense-tracker-server-p92x.onrender.com/api/updateprofile",profileData, {
          withCredentials: true
        })
        if (/^2/.test(response.status)){
          toast.success("Profile Updated");
          navigate('/profile')
        }
        
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
