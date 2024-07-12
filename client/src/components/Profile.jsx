import ProfileInput from "./profileInput"
import PropType from 'prop-types'

const Profile = (props) => {
  return (
    <div>
      <h1>USer Profile</h1>
      <label htmlFor="">firstName</label>
      <ProfileInput value={props.firstName}/>
      <label htmlFor="">lastName</label>
      <ProfileInput value={props.lastName}/>
      <label htmlFor="">Email</label>
      <ProfileInput value={props.email}/>
    </div>
  )
}

Profile.propTypes = {
  firstName : PropType.string,
  lastName: PropType.string,
  email: PropType.string
}
export default Profile
