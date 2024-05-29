import { StyleSheet, css } from "aphrodite";
import CategoryIcon from "./CategoryIcon";
import PropType from 'prop-types';


const SummaryCard = (props) => {
  return (
    <div className={css(styleSheet.card)}>
      <div>
      <CategoryIcon category={props.category}/>
      </div>
      <div>
        {props.amount}
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


SummaryCard.propTypes = {
    category: PropType.string,
    amount: PropType.string,
}


export default SummaryCard
