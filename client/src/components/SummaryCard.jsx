import { StyleSheet, css } from "aphrodite";
import CategoryIcon from "./CategoryIcon";
import PropType from 'prop-types';
import { toMoney } from "../utils/utils";
import Loader from "./loader";


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
  },
  budget: {
    display: "inline-flex",
    fontSize: ".8em"
  },
  budgetAmount: {
    color: "green",
    fontWeight: "bold"
  }
})


const SummaryCard = (props) => {
const index = props.budget.findIndex((budget) => props.category === budget.category);


const budgetAmount = Number(props.budget[index]?.amount || 0);
const amount = Number(props.amount);
const color = amount > budgetAmount ? "red" : "green";


if(!props.amount){
  return <div><Loader /></div>
}

  return (
    <div className={css(styleSheet.card)}>
      <div>
       <CategoryIcon category={props.category}/>
        <div className={css(styleSheet.budget)}>
        <p>Budget:</p><p className={css(styleSheet.budgetAmount)}>{toMoney(props.budget[index]?.amount) || 0}</p>
      </div>
      </div>
      <div className="font-bold" style={{color}}>
        {toMoney(props.amount)}
      </div>
    </div>
  )
}




SummaryCard.propTypes = {
    category: PropType.string,
    amount: PropType.string,
    budget: PropType.arrayOf(
      PropType.shape({
        category: PropType.string,
        amount: PropType.number
      })
    )
}


export default SummaryCard
