import icon from '/icon.svg'
import Button from '@mui/material/Button';

const Nav = () => {
  return (
    <div className='basis-0 justify-between align-center'>
      <img src={icon} alt="logo" />
      <Button variant="outlined">Logout</Button>
    </div>
  )
}

export default Nav
