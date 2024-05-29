import { useState } from "react";
import {Link} from "react-router-dom"
import { greeting, netSpend, toMoney } from "../utils/utils";
import PropType from 'prop-types';
import Button from '@mui/material/Button';
import Card from './Card';
import SummaryCard from "./SummaryCard";
import { calculateSummary } from "../utils/componentUtils";




const Intro = (props) => {
  const [activeButton, setActiveButton] = useState("today");
  const [summary, setSummary] = useState(false)




  const handleClick = (ButtonName)=> {
    setActiveButton(ButtonName)
  }


  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };


  const filteredExpenses = () => {
    const today = formatDate(new Date());


    const current = new Date();
    const weekStart = new Date(current.setDate(current.getDate() - current.getDay()));
    const weekEnd = new Date(current.setDate(current.getDate() - current.getDay() + 6));


    const monthStart = new Date();
    monthStart.setDate(1);
    const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);


 


    if (props.exp) {
      if (activeButton === 'today') {
        return props.exp.filter(expense => expense.date === today);
      } else if (activeButton === 'week') {
        return props.exp.filter(expense => {
          const [day, month, year] = expense.date.split('-');
          const expenseDate = new Date(`${year}-${month}-${day}`);
          return expenseDate >= weekStart && expenseDate <= weekEnd;
        });
      } else if (activeButton === 'month') {
        return props.exp.filter(expense => {
          const [day, month, year] = expense.date.split('-');
          const expenseDate = new Date(`${year}-${month}-${day}`);
          return expenseDate >= monthStart && expenseDate <= monthEnd;
        });
      }
    }
    return [];
  };


  const handleChangeSummary = () =>{
    setSummary(!summary)
    console.log(summary)
  }




  const filteredExp = filteredExpenses();
  const summaryData = calculateSummary(filteredExp);
 




  const customButtonStyle = {
    contained: {
      backgroundColor: 'black',
      color: 'white',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      }
    },
    outlined: {
      border: "none",
      color: 'black',
      '&:hover': {
        border: "1px solid black"
      }
    }
   
  };




  return (
    <div className="text-center mt-10"
     style={{padding: '3px 10%'}}
    >
      <h1 className="text-4xl font-bold text-gray-900">{greeting} {props.firstName}</h1>
      <p className="text-slate-300 my-7">Monitor your spending habit and make right financial decisions.</p>
      <div className="mt-10 flex justify-between">
        <div className="px-3">
          <Button
          variant={activeButton === "today" ? "contained" : "outlined"}
          sx={activeButton === 'today' ? customButtonStyle.contained : customButtonStyle.outlined}
          onClick={()=> handleClick("today")}>Today</Button>
          <Button
          variant={activeButton === "week" ? "contained" : "outlined"}
          sx={activeButton === 'week' ? customButtonStyle.contained : customButtonStyle.outlined}
          onClick={()=> handleClick("week")}>This Week</Button>
          <Button
          variant={activeButton === "month" ? "contained" : "outlined"}
          sx={activeButton === 'month' ? customButtonStyle.contained : customButtonStyle.outlined}
          onClick={()=> handleClick("month")}>This Month</Button>
        </div>
        <div>
          <Link to='/addnew'>
            <Button variant="contained" >Add New</Button>
          </Link>
        </div>




        <div>
          <Button onClick={handleChangeSummary}>{summary ? "Hide Summary" : "Show Summary"}</Button>
        </div>
      </div>
      <div className="mt-10">
        <b>NetSpend:</b> {toMoney(netSpend(filteredExp))}
      </div>
      {summary ? (
        filteredExp.length > 0 ? (
          <div className="mt-5">
            {Object.entries(summaryData).map(([category, total]) => (
              <SummaryCard key={category} category={category} amount={toMoney(total)} />
            ))}
          </div>
        ) : (
          <p>No Expenses</p>
        )
      ) : (
        filteredExp.length > 0 ? (
          filteredExp.map(expense => (
            <Card
              key={expense._id}
              id={expense._id}
              category={expense.category}
              amount={toMoney(expense.amount)}
              date={expense.date}
            />
          ))
        ) : (
          <p>No Expenses</p>
        )
      )}
     
    </div>
  )
}




Intro.propTypes = {
  firstName: PropType.string,
  exp: PropType.arrayOf(PropType.shape({
    _id: PropType.string.isRequired,
    category: PropType.string.isRequired,
    amount: PropType.number.isRequired,
    date: PropType.string.isRequired,
  })),
}




export default Intro
