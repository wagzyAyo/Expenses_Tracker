import UpdatePassword from "../components/updatePassword";
import Nav from "../components/nav";
import Footer from "../components/footer";
import {toast} from 'react-toastify'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdatePasswordScreen = () => {
  const navigate = useNavigate()

  const updatePassword = async (data)=>{
    try {
      const response = await axios.put("http://localhost:3000/api/updateprofile/password", data, {
        withCredentials: true
      })
      if (/^2/.test(response.status)){
        toast.success(response?.message || "Passord updated");
        navigate("/profile")
      }
    } catch (err) {
      console.log(`error updating password ${err}`)
    }
  }
  return (
    <div>
      <Nav />
      <UpdatePassword onSubmit={updatePassword} />
      <Footer />
    </div>
  )
}

export default UpdatePasswordScreen
