import ProfileInput from "./profileInput"
import PropType from 'prop-types';
import CustomButton from "./Button";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <div>
      <h1>User Profile</h1>
      <label htmlFor="">firstName</label>
      <ProfileInput value={props.firstName}/>
      <label htmlFor="">lastName</label>
      <ProfileInput value={props.lastName}/>
      <label htmlFor="">Email</label>
      <ProfileInput value={props.email}/>
      <Link to={"/updateprofile"}>
      <CustomButton name={"Update Profile"} colorType="#143BA0"/>
      </Link >
      <Link to={"/updatepassword"}>
      <CustomButton name={"Change Password"} colorType="border"/>
      </Link>
      <CustomButton name={"Add Budget"} colorType="border"/>
      <CustomButton name={"Delete Account"} colorType="#E61313"/>
    </div>
  )
}

Profile.propTypes = {
  firstName : PropType.string,
  lastName: PropType.string,
  email: PropType.string
}
export default Profile
