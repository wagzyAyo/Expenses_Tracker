import ProfileInput from "./profileInput"
import PropType from 'prop-types';
import { useDeleteAccountMutation } from "../slice/userApiSlice";
import CustomButton from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { StyleSheet, css } from "aphrodite";
import SummaryCard from "./SummaryCard";

const Profile = (props) => {
  const [deleteAccount] = useDeleteAccountMutation();
  const navigate = useNavigate()

  const handleDeleteAccount = async ()=>{
    try {
      await deleteAccount().unwrap();
      toast.success("Account deleted")
      navigate('/')
    } catch (err) {
      console.log(`Error deleting account {err}`)
      toast.error(`${err?.message}`)
    }
  }
  return (
    <div>
      <h1>User Profile</h1>
      <label htmlFor="">firstName</label>
      <ProfileInput value={props.firstName}/>
      <label htmlFor="">lastName</label>
      <ProfileInput value={props.lastName}/>
      <label htmlFor="">Email</label>
      <ProfileInput value={props.email}/>

      {props.Budget?.map(budget =>{
        return <SummaryCard key={budget._id}  category={budget.category} amount={budget.amount}/>
      })}

      <Link to={"/updateprofile"}>
      <CustomButton name={"Update Profile"} colorType="#143BA0"/>
      </Link >
      <Link to={"/updatepassword"}>
      <CustomButton name={"Change Password"} colorType="border"/>
      </Link>
      <Link to={"/addbudget"}>
      <CustomButton name={"Add Budget"} colorType="border"/>
      </Link>
      <Button className={css(styleSheet.btn)} onClick={handleDeleteAccount}>
        DeleteAccount
        </Button>
    </div>
  )
}

const styleSheet = StyleSheet.create({
  btn: {
    background: "red",
    border: "none",
    color: "white",
    marginTop: "10px",
  }
})

Profile.propTypes = {
  firstName : PropType.string,
  lastName: PropType.string,
  email: PropType.string,
  Budget: PropType.object
}
export default Profile
