import { useState, useEffect} from 'react';
import icon from '/icon.svg'
import Button from '@mui/material/Button';
import {StyleSheet, css} from "aphrodite"
import { useLogoutMutation } from '../slice/userApiSlice';
import {clearCredentials} from '../slice/auth';
import {useNavigate, Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//import PropType from 'prop-types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useUserDataMutation } from '../slice/userApiSlice';



const Nav = () => {

  const [data, setData] = useState("");
 
  const [userData] = useUserDataMutation();


 useEffect(()=>{
  const fecthData = async ()=>{
    try {
      const response = await userData().unwrap()
      setData(response.user)
    } catch (err) {
      console.log(err)
    }
  }
 fecthData();
 },[userData])

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [logoutApi] = useLogoutMutation()


  const handleLogout = async ()=>{
    try {
      await logoutApi().unwrap();
      dispatch(clearCredentials());
      document.cookie = "jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      navigate('/')
      
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={css(styles.nav)}>
      <div>
        <Link to='/'>
          <img src={icon} alt="logo" />
        </Link>
      </div>
      <div>
      <Button
        variant="outlined"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {data.firstName} {data.lastName}<ArrowDropDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={'/dashboard'}>
        <MenuItem>Dashboard</MenuItem>
        </Link>
        <Link to={'/profile'}>
        <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
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

// Nav.propTypes = {
//   firstName : PropType.string,
//   lastName: PropType.string
// }

export default Nav



