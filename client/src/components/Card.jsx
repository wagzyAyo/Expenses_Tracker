import { StyleSheet, css } from "aphrodite";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PropType from 'prop-types';
import { Link } from "react-router-dom";
import CategoryIcon from "./CategoryIcon";
import { useDeleteExpenseMutation } from "../slice/userApiSlice";
import { toast } from "react-toastify";


const Card = (props) => {
    const [deleteExpense] = useDeleteExpenseMutation()

    const handleDelete = async (id)=>{
        
        id = props.id
        try {
            await deleteExpense(id).unwrap();
            toast.success('Expense deleted')
            window.location.reload()
        } catch (err) {
            toast.error(err?.data?.message)
        }
    }

  return (
    <div className={css(styleSheet.card)}>
        <div >
            <CategoryIcon category={props.category}/>
            <div className="text-slate-300">
                {props.date}
            </div>
        </div>
        <div>
            <div>
                <Link to={`/update/${props.id}`}>
                <IconButton aria-label="edit" size="small" >
                    <EditIcon fontSize="inherit" />
                </IconButton>
                </Link>
                <IconButton aria-label="delete" size="small" onClick={handleDelete}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
            <div >
               <b>{props.amount}</b>
            </div>
           
        </div>
     
    </div>
  )
}


const styleSheet = StyleSheet.create({
    card: {
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 2%',
        width: '400px',
        height: '80px',
        border: '1px solid black',
        margin: '25px auto'
    }
})


Card.propTypes = {
    category: PropType.string,
    date: PropType.string,
    amount: PropType.string,
    id: PropType.string
}


export default Card
