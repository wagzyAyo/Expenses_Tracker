import { useState } from 'react';
import PropType from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import { StyleSheet, css } from 'aphrodite';




const ExpenseForm = (props) => {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(dayjs());


      const handleSubmit = (e)=> {
        e.preventDefault();
        props.onSubmit({category, amount, description, date})
      }
      



  return (
    <div className={css(styleSheet.formStyle)}>




        <h1 className='text-2xl font-bold text-center'>{props.heading}</h1>
        <p className='text-slate-300 my-7 text-center'>{props.subHeading}</p>
        
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
          <MenuItem value="Transport">Transport</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Cable bill">Cable bill</MenuItem>
          <MenuItem value="Electricity bill">Electricity bill</MenuItem>
          
        </Select>
      
            <label htmlFor="description" className='my-3'><b>Description</b></label>
            <TextField 
            id='description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="amount" className='my-3'><b>Enter Amount</b></label>
            <TextField 
            id='amount'
            name='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
             <label htmlFor="date" className='my-3'><b>Date</b></label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                name='date'
                value={date}
                id='date'
                onChange={(newValue) => setDate(newValue)}
              />
            </DemoContainer>
            </LocalizationProvider>
    
    <Button 
    variant='contained'
    type='submit' className={css(styleSheet.btn)}>
      Add Expense
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

ExpenseForm.propTypes = {
    heading: PropType.string,
    subHeading: PropType.string,
    onSubmit: PropType.func
}

export default ExpenseForm
