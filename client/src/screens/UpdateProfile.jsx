import { useState } from "react";
import Form from "../components/Form";
import { Button } from "@mui/material";
import { StyleSheet, css } from "aphrodite";

const UpdateProfile = () => {
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();

    }
  return (
    <div className={css(styleSheet.formStyle)}>
      <form  onSubmit={handleSubmit}>
        <Form name={"firstName"} type={"text"} value={firstName} onChange={(e)=>{setFirstname(e.target.value)}} />
        <Form name={"lastName"}  type={"text"} value={lastName} onChange={(e)=>{setLastname(e.target.value)}}/>
        <Form name={"email"} type={"email"} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <Form name={"password"} type={"password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <Button 
        variant='contained'
        type='submit' className={css(styleSheet.btn)}>
            Update profile
    </Button>
      
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

export default UpdateProfile
