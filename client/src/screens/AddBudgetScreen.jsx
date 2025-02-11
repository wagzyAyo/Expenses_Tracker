import { useState } from "react";
import AddBudget from "../components/AddBudget";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../components/nav";
import Footer from "../components/footer";
import axios from 'axios'

const AddBudgetScreen = () => {
  const [addBudgetText, setAddBudgetText] = useState("Add Budget")
  const navigate = useNavigate()

  const handleSubmit = async (data)=>{
    try {
      // console.log("Submitting data to API:", data);
      setAddBudgetText("Adding Budget")
      const response = await axios.post("https://expense-tracker-server-p92x.onrender.com/api/budget", data, {
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
      <AddBudget 
      onSubmit={handleSubmit} 
      text={addBudgetText} 
      initialValues={""}
      title={"Add new Budget"}
      />
      <Footer />
    </div>
  )
}

export default AddBudgetScreen
