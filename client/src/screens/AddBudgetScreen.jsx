import AddBudget from "../components/AddBudget";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../components/nav";
import Footer from "../components/footer";
import axios from 'axios'

const AddBudgetScreen = () => {
  const navigate = useNavigate()

  const handleSubmit = async (data)=>{
    try {
      console.log("Submitting data to API:", data);
      const response = await axios.post("http://localhost:3000/api/budget", data, {
        withCredentials: true
      })
      //console.log(response)
      if (response.status === 200){
        toast.success("Budget added");
        navigate("/profile")
      }
      
    } catch (err) {
      console.error("Error adding new budget:", err);
      const errorMessage = err?.response?.data?.message || err.message || "An unknown error occurred";
      toast.error(`Error adding new budget: ${errorMessage}`);
    }
  }
  return (
    <div>
      <Nav />
      <AddBudget onSubmit={handleSubmit} />
      <Footer />
    </div>
  )
}

export default AddBudgetScreen
