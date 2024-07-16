import { useState, useEffect } from "react";
import { useUserDataMutation } from "../slice/userApiSlice";
import AddBudget from "../components/AddBudget";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditBudgetScreen = () => {
    const [budget, setBudget] = useState(null)

    const [userData] = useUserDataMutation();
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        const fetch = async ()=>{
            try {
                const response = await userData().unwrap();
                const data = response.user.Budget.find(budget => budget._id === id);
                setBudget(data)
            } catch (err) {
                toast.error(err?.data.message || err?.message)
            }
        }
        fetch()
    },[userData, id]);

    const handleSubmit = async (formData)=>{
        try {
            const response = await axios.put(`http://localhost:3000/api/budget/${id}/update`, 
                formData,
                {
                    withCredentials: true
                }
            );
            if(/^2/.test(response.status)){
                toast.success("Budget updated");
                navigate("/profile")
            }else{
                toast.error("Error updating budget")
            }
        } catch (err) {
            toast.error(err?.data.message || err?.message)
        }
    }
  return (
    <div>
      <AddBudget initialValues={budget} onSubmit={handleSubmit}/>
    </div>
  )
}

export default EditBudgetScreen
