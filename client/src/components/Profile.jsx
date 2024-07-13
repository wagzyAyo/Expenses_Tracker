import ProfileInput from "./profileInput"
import PropType from 'prop-types';
import CustomButton from "./Button";

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
      <CustomButton name={"Update Profile"} colorType="#143BA0"/>
      <CustomButton name={"Change Password"} colorType="border"/>
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
