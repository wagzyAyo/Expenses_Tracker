import { useState ,useEffect } from 'react';
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
import expenseList from '../utils/expenseList';




const ExpenseForm = (props) => {
    const [category, setCategory] = useState(props.initialValues?.category || '');
    const [description, setDescription] = useState(props.initialValues?.description || '');
    const [amount, setAmount] = useState(props.initialValues?.amount || '');
    const [date, setDate] = useState(props.initialValues ? dayjs(props.initialValues.date) : dayjs());

    useEffect(() => {
      if (props.initialValues) {
        setCategory(props.initialValues.category);
        setDescription(props.initialValues.description);
        setAmount(props.initialValues.amount);
        setDate(dayjs(props.initialValues.date));
      }
    }, [props.initialValues]);


      const handleSubmit = (e)=> {
        e.preventDefault();
        const formData = {
          category,
          amount,
          description,
          date: date.format('DD-MM-YYYY')
        }
        props.onSubmit(formData)
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
          {expenseList.map(expense =>{
            return <MenuItem key={expense} value={expense}>{expense}</MenuItem>
          })}
          {/* <MenuItem value="Transport">Transport</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Cable bill">Cable bill</MenuItem>
          <MenuItem value="Electricity bill">Electricity bill</MenuItem>
          <MenuItem value="Rent">Rent</MenuItem>
          <MenuItem value="Shopping">Shopping</MenuItem>
          <MenuItem value="Travel">Travel</MenuItem>
          <MenuItem value="Gadget">Gadget</MenuItem>
          <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
          <MenuItem value="Others">Others</MenuItem> */}
          
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
            <DemoContainer components={['DatePicker']} >
              <DatePicker
                name='date'
                value={date}
                id='date'
                onChange={(newValue) => setDate(dayjs(newValue))}
                format='DD-MM-YY'
              />
            </DemoContainer>
            </LocalizationProvider>
    
    <Button 
    variant='contained'
    type='submit' className={css(styleSheet.btn)}>
      {props.btnText}
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
    onSubmit: PropType.func,
    btnText: PropType.string,
    initialValues: PropType.object
}

export default ExpenseForm
