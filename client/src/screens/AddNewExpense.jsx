import Nav from "../components/nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import { useAddExpenseMutation } from "../slice/userApiSlice";
import { toast } from "react-toastify";

const AddNewExpense = () => {

  const [addExpense] = useAddExpenseMutation()
  const navigate = useNavigate()

  const handleAddNewExpense = async (formData) => {

    try {
         await addExpense(formData).unwrap()
         toast.success('New expense added')
         navigate('/home')
    } catch (err) {
      toast.error(err?.message)
    }
  }

  return (
    <div >
        <main>
            <Nav />
            <ExpenseForm 
            heading={'Add New Expense'}
            subHeading={'Enter detail of your expenses.'}
            onSubmit={handleAddNewExpense}
        />
        </main>
        <Footer />
    </div>
  )
}

export default AddNewExpense
