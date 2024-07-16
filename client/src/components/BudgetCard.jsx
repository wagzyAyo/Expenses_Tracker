import PropType from "prop-types"
import { StyleSheet, css } from "aphrodite";
import CategoryIcon from "./CategoryIcon";
import { toMoney } from "../utils/utils";

const BudgetCard = (props) => {
    const {category, amount} = props
  return (
    <div className={css(styleSheet.card)}>
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
    }
})

BudgetCard.propTypes = {
    category: PropType.string,
    amount: PropType.string
}
export default BudgetCard
