import PropType from "prop-types"
import { StyleSheet, css } from "aphrodite";
import CategoryIcon from "./CategoryIcon";
import { toMoney } from "../utils/utils";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";


const BudgetCard = (props) => {
    const {category, amount, id} = props
  return (
    <div className={css(styleSheet.card)}>
        <div className={css(styleSheet.icons)}>
            <Link to={`/updatebudget/${id}`}>
                <IconButton aria-label="edit" size="small" className={css(styleSheet.editIcon)}>
                            <EditIcon fontSize="inherit" />
                        </IconButton>
            </Link>
        <IconButton aria-label="delete" size="small" className={css(styleSheet.deleteIcon)}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
        </div>
        <div className={css(styleSheet.category)}>
            <CategoryIcon category={category}/>
      </div>
      <div className="text-2xl font-bold text-center">
           {toMoney(amount)}
      </div>
    </div>
  )
}

const styleSheet = StyleSheet.create({
    card: {
        width: "200px",
        height: "200px",
        backgroundColor: "#000",
        border: "none",
        boxShadow: "3px 7px 27px -4px rgba(62,181,150,0.7)",
        marginTop: "2em",
        color: "white",
        padding: "2em 2%"
    },
    category: {
        marginTop: "2em",
    },
    icons: {
        position: "relative",
        left: "65%"
    },
    editIcon:{
        color: "green"
    },
    deleteIcon:{
        color: "red"
    }
})

BudgetCard.propTypes = {
    category: PropType.string,
    amount: PropType.string,
    id: PropType.string
}
export default BudgetCard
