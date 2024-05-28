import {useState, useEffect} from 'react';
import { useUserDataMutation } from '../slice/userApiSlice';
import ExpenseForm from "../components/ExpenseForm";
import { useParams } from "react-router-dom";


const UpdateExpense = () => {
  const [expense, setExpense] = useState(null);
 
  const [userData] = useUserDataMutation();

  const {id} = useParams()

  useEffect(()=>{
    const fecthData = async ()=>{
      try {
        const response = await userData().unwrap();
        const expenseData = response.user.Expenses.find(exp => exp._id === id);
        setExpense(expenseData);
      } catch (err) {
        console.log(err)
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
      />
    </div>
  )
}

export default UpdateExpense
