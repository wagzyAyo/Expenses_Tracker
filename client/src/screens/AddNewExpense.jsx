import Nav from "../components/nav";
import Footer from "../components/footer";
import ExpenseForm from "../components/ExpenseForm"

const AddNewExpense = () => {


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
