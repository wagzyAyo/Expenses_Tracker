import AddBudget from "../components/AddBudget";
import { useAddBudgetMutation } from "../slice/userApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../components/nav";
import Footer from "../components/footer";

const AddBudgetScreen = () => {

  const [addBudget] = useAddBudgetMutation();
  const navigate = useNavigate()

  const handleSubmit = async (data)=>{
    try {
      console.log("Submitting data to API:", data); 
      await addBudget(data).unwrap();
      toast.success("Budget added");
      navigate("/profile")
    } catch (err) {
      console.log(err);
      toast.error(`Error adding new budget ${err?.data.message}`)
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
