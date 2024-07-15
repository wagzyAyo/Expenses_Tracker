import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { StyleSheet, css } from "aphrodite";
import PropType from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { currencySymbols } from "../utils/currencySymbols";




const UpdateProfile = (props) => {
    const [firstName, setFirstname] = useState(props.initialValues?.firstName || "" );
    const [lastName, setLastname] = useState(props.initialValues?.lastName || "");
    const [email, setEmail] = useState(props.initialValues.email || "");
    const [currency, setCurrency] = useState(props.initialValues.currency || "")
    const [password, setPassword] = useState("")

  useEffect(()=>{
    if (props.initialValues){
      setFirstname(props.initialValues.firstName);
      setLastname(props.initialValues.lastName);
      setEmail(props.initialValues.email);
    }
  }, [props.initialValues]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
          firstName,
          lastName,
          email,
          password
        };
        props.onSubmit(formData)
    }
  return (
    <div className={css(styleSheet.formStyle)}>
      <h1 className="text-2xl font-bold text-center">Update Your Profile</h1>
      <form  onSubmit={handleSubmit}>
        <div className={css(styleSheet.style)}>
        <label htmlFor="firstName" className="mt-3"><b>firstName</b></label>
        <TextField 
        name="firstName" 
        type="text" value={firstName} onChange={(e)=>{setFirstname(e.target.value)}} 
        id="firstName" />
       
        <label htmlFor="lastName" className="mt-3"><b>lastName</b></label>
        <TextField 
        name="lastName" 
        type="text" value={lastName} 
        onChange={(e)=>{setLastname(e.target.value)}} 
        id="lastName"/>
        <label 
        htmlFor="email" 
        className="mt-3">
          <b>email</b>
        </label>
        <TextField 
        name="email" 
        type="email" 
        value={email} onChange={(e)=>{setEmail(e.target.value)}} 
        id="email"
          inputProps={{readOnly: true}}/>
        
        <InputLabel id="demo-simple-select-label" className="mt-3"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="currency"
          name='currency'
          value={currency}
          label="currency"
          onChange={(e)=> setCurrency(e.target.value)}
        >
            <MenuItem value="" disabled>
              Currency Symbol
            </MenuItem>
          {currencySymbols.map(symbol =>{
            return <MenuItem key={symbol} value={symbol}>{symbol}</MenuItem>
          })}
          
        </Select>

        <label htmlFor="password" className="mt-3"><b>password</b></label>
        <TextField name="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password"/>
        <Button 
        variant='contained'
        type='submit' className={css(styleSheet.btn)}
        >
            Update profile
    </Button>
        </div>
        
      
      </form>
    </div>
  )
}

const styleSheet = StyleSheet.create({
    formStyle: {
        display: "grid",
        placeContent: 'center',
        marginTop: '5em'
    },
    style: {
      display: "grid",
    },
    btn: {
      margin: '3em 0'
    }
})

UpdateProfile.propTypes = {
  initialValues: PropType.shape({
    firstName: PropType.string,
    lastName: PropType.string,
    email: PropType.string,
    password: PropType.string,
    currency: PropType.string
  }).isRequired,
  onSubmit: PropType.func.isRequired
}

export default UpdateProfile
