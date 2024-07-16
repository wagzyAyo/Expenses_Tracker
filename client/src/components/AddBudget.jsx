import { useState } from "react";
import expenseList from "../utils/expenseList";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { StyleSheet, css } from "aphrodite";
import PropType from "prop-types"

const AddBudget = (props) => {
    const [category, setCategory] = useState(props.initialValues.category || "");
    const [amount, setAmount] = useState(props.initialValues.amount || "");

    const handleSubmit = (e)=>{
      e.preventDefault();
      const data = {
        category,
        amount
      }
      console.log("form data", data)
       props.onSubmit(data)     
    }

  return (
    <div className={css(styleSheet.formStyle)}>
        <h1 className='text-2xl font-bold text-center'>{props.title}</h1>
        <p className='text-slate-300 my-7 text-center'>Gets you to keep your finance in Check</p>

        <form onSubmit={handleSubmit}>
        <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, width: 240 }}>

      <label htmlFor="category" className='my-3'><b>Category</b></label>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="category"
          name='category'
          value={category}
          label="category"
          onChange={(e)=> setCategory(e.target.value)}
        >
          {expenseList.map(expense =>{
            return <MenuItem key={expense} value={expense}>{expense}</MenuItem>
          })}
          </Select>

          <label htmlFor="amount" className="my-3">Amount</label>
          <TextField 
          id="amount" 
          name="amount" 
          value={amount} 
          onChange={(e)=>setAmount(e.target.value)}>

          </TextField>
          
    
    <Button 
    variant='contained'
    type='submit'
    className={css(styleSheet.btn)}
    >
      {props.text}
    </Button>
    </FormControl>
    </Box>
        </form>
    </div>
  )
}

const styleSheet = StyleSheet.create({
    formStyle: {
        display: 'grid',
        placeContent: 'center',
        marginTop: '5em'
    },
    btn: {
      margin: '3em 0'
    }
})

AddBudget.propTypes = {
  onSubmit: PropType.func.isRequired,
  initialValues: PropType.string,
  text: PropType.string,
  title: PropType.string
}

export default AddBudget
