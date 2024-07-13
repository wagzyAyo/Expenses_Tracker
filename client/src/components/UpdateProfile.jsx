import { useState, useEffect } from "react";
import Form from "./Form";
import { Button } from "@mui/material";
import { StyleSheet, css } from "aphrodite";
import PropType from 'prop-types'

const UpdateProfile = (props) => {
    const [firstName, setFirstname] = useState(props.initialValues?.firstName || "" );
    const [lastName, setLastname] = useState(props.initialValues?.lastName || "");
    const [email, setEmail] = useState(props.initialValues.email || "")
    const [password, setPassword] = useState("")

  useEffect(()=>{
    if (props.initialValues){
      setFirstname(props.initialValues.firstName);
      setLastname(props.initialValues.lastName);
      setEmail(props.initialValues.email);
    }
  }, [props.initialValues])
    const handleSubmit = (e) =>{
        e.preventDefault();

    }
  return (
    <div className={css(styleSheet.formStyle)}>
      <h1 className="text-2xl font-bold text-center">Update Your Profile</h1>
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

UpdateProfile.propTypes = {
  initialValues: PropType.string.isRequired
}

export default UpdateProfile
