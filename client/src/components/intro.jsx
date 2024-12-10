import { useState } from "react";
import {Link} from "react-router-dom"
import { greeting, netSpend, toMoney } from "../utils/utils";
import PropType from 'prop-types';
import Button from '@mui/material/Button';
import Card from './Card';
import SummaryCard from "./SummaryCard";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { calculateSummary, filteredExpenses } from "../utils/componentsUtils";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';





const Intro = (props) => {
  const [activeButton, setActiveButton] = useState("today");
  const [summary, setSummary] = useState(false)
  const [date, setDate] = useState(dayjs())




  const handleClick = (ButtonName, date = null)=> {
    if (date){
      setActiveButton("custom")
      setDate(date)
    }
    setActiveButton(ButtonName)
  }


 


  const handleChangeSummary = () =>{
    setSummary(!summary)
    //console.log(summary)
  }




  const filteredExp = filteredExpenses(props.exp, activeButton, date);
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
      <div className="mt-10 flex justify-between flex-wrap ">
        <div className="p-3">
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

          <div className="mt-[20px] mb-[20px]">
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DatePicker']} >
                <DatePicker
                  name='date'
                  value={date}
                  id='date'
                  onChange={(newValue) => {
                    const selectedDate = dayjs(newValue)
                    handleClick('custom', selectedDate)
                  }
                  }
                  format='DD-MM-YYYY'
                />
              </DemoContainer>
              </LocalizationProvider>
            </div>
            
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
        <b>NetSpend:</b> <b>{props.currency}</b>{toMoney(netSpend(filteredExp))}
      </div>
      {summary ? (
        filteredExp.length > 0 ? (
          <div className="mt-5">
            {Object.entries(summaryData).map(([category, total]) => (
              <SummaryCard key={category} category={category} amount={total} budget={props.budget}/>
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
  currency: PropType.string,
  budget: PropType.object,
}




export default Intro