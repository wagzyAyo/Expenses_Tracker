import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { Button } from "@mui/material";
import design from '../assets/HomeMonex.png'


const Index = () => {
  return (
    <div className={css(styleSheet.container)}>
      <div className={css(styleSheet.heroText)}>
        <h1 className="text-4xl my-3 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Simplify Your Budgeting with Easy Expense Tracking</h1>
        <p className="my-6">Manage your finances effortlessly with our intuitive
        expenses tracker app. Monitor your spending and make informed financial decisions with ease.
        Achieve financial clarity and peace of mind today!</p>
        <div className={css(styleSheet.btnLog)}>
        <Link to='/login'>
          <Button variant="contained" size="large">Login</Button>
        </Link>
        <Link to='/signup'>
          <Button variant="outlined" size="large">Sign up</Button>
        </Link>
      </div>
      </div>


      <div>
        <img src={design} alt="hero-image" className={css(styleSheet.img)}/>
      </div>
    </div>
  )
}


const styleSheet = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        overflow: 'hidden'
    },
    heroText: {
        maxWidth: '700px',
        margin: 'auto',
        padding: '1em',
        textAlign: 'center'
    },
    btnLog: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '2em',
        marginBottom: '2em'
    },
    img: {
        maxWidth: '600px',
        height: 'auto',
        margin: 'auto',
        '@media (max-width: 700px)': {
          width: '300px'
        }
    }
})


export default Index



