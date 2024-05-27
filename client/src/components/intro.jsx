import { useState } from "react";
import { greeting, netSpend, toMoney } from "../utils/utils";
import PropType from 'prop-types';
import Button from '@mui/material/Button';
import Card from './Card';


const Intro = (props) => {
  const [activeButton, setActiveButton] = useState("today")


  const handleClick = (ButtonName)=> {
    setActiveButton(ButtonName)
  }


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
          <Button variant="contained">Add New</Button>
        </div>


        <div>
          <Button >Show Summary</Button>
        </div>
      </div>
      <div className="mt-10">
        <b>NetSpend:</b> {toMoney(netSpend(props.exp))}
      </div>
      {props.exp && props.exp.length > 0 ?
        (
          props.exp.map((expense => {
            return <Card  
            key={expense._id}
            category={expense.category}
            amount={toMoney(expense.amount)}
            date={expense.date}
            />
          }))
        )
        :
        (
          <>
            <p>No Expenses </p>
          </>
        )
      }
    </div>
  )
}


Intro.propTypes = {
  firstName: PropType.string,
  exp: PropType.array,
}


export default Intro



