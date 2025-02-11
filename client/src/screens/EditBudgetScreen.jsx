import { useState, useEffect } from "react";
import { useUserDataMutation } from "../slice/userApiSlice";
import AddBudget from "../components/AddBudget";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";
import Nav from "../components/nav";
import Footer from "../components/footer";

const EditBudgetScreen = () => {
    const [editBudgetText, setEditBudgetText] = useState("Update Budget")
    const [budget, setBudget] = useState(null)

    const [userData] = useUserDataMutation();
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        const fetch = async ()=>{
            try {
                const response = await userData().unwrap();
                //console.log(response)
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
            setEditBudgetText("Updating Budget")
            const response = await axios.put(`https://expense-tracker-server-p92x.onrender.com/api/budget/${id}/update`, 
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


    if(!budget){
        return <Loader />
    }
  return (
    <div>
        <Nav />
        <AddBudget 
        initialValues={budget} 
        onSubmit={handleSubmit} 
        text={editBudgetText}
        title={"Update Budget"}
        />
        <Footer />
    </div>
  )
}

export default EditBudgetScreen
