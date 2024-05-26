import icon from '/icon.svg'
import Button from '@mui/material/Button';
import {StyleSheet, css} from "aphrodite"


const Nav = () => {
  return (
    <div className={css(styles.nav)}>
      <div>
      <img src={icon} alt="logo" />
      </div>
      <div>
      <Button variant="outlined">Logout</Button>
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



