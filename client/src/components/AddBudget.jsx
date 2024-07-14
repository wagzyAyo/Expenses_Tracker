import { useState } from "react";
import expenseList from "../utils/expenseList";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";

const AddBudget = () => {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        try {
            toast.success("New Budget added");
            navigate("/profile")
        } catch (err) {
            console.log(`Error adding budget ${err}`)
            toast.error(err?.message)
        }
    }

  return (
    <div className={css(styleSheet.formStyle)}>
        <h1 className='text-2xl font-bold text-center'>Add New Budget</h1>
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
      Add budget
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

export default AddBudget
