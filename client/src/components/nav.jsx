import icon from '/icon.svg'
import Button from '@mui/material/Button';
import {StyleSheet, css} from "aphrodite"
import { useLogoutMutation } from '../slice/userApiSlice';
import {clearCredentials} from '../slice/auth';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Nav = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [logoutApi] = useLogoutMutation()


  const handleLogout = async ()=>{
    try {
      await logoutApi().unwrap()
      dispatch(clearCredentials());
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={css(styles.nav)}>
      <div>
      <img src={icon} alt="logo" />
      </div>
      <div>
      <Button variant="outlined" onClick={handleLogout}>Logout</Button>
      </div>
     
    </div>
  )
}


const styles = StyleSheet.create({
  nav: {
    position: 'relative',
    top: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '3px 10%'
  }
})


export default Nav



