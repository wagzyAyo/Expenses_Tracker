import {useState, useEffect} from 'react';
import { useUserDataMutation, useUpdateExpenseMutation } from '../slice/userApiSlice';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from "../components/ExpenseForm";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';


const UpdateExpense = () => {
  const [expense, setExpense] = useState(null);
 
  const [userData] = useUserDataMutation();
  const navigate = useNavigate()

  const {id} = useParams();
  const [update] = useUpdateExpenseMutation()

  const handleSubmit = async (formData)=> {
    try {
      await update({params:id, data:formData}).unwrap();
      toast.success('Expense updated');
      navigate('/dashboard')
    } catch (err) {
      toast.error(err?.data.message || err?.message)
    }
  }

  useEffect(()=>{
    const fecthData = async ()=>{
      try {
        const response = await userData().unwrap();
        const expenseData = response.user.Expenses.find(exp => exp._id === id);
        setExpense(expenseData);
      } catch (err) {
        toast.error(err?.data.message || err?.message)
      }
    }
   fecthData();
   },[userData, id])

  return (
    <div>
      <ExpenseForm 
        heading='Update Expense'
        subHeading='update expense details'
        btnText={'Update Expense'}
        initialValues={expense}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default UpdateExpense