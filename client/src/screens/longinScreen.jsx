import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {StyleSheet, css} from 'aphrodite'
import logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'

const LonginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleSubmit(e){
    e.preventDefault();
    console.log('submit')
  }

  return (
    <div className={css(styles.flexDisplay)}>
        <form action="" onSubmit={handleSubmit}>
            <Box
            component="div"
            sx={{
                '& > :not(style)': { m: 2, width: '350px', display: 'grid'},
            }}
            noValidate
            autoComplete="off"
            >
            <img src={logo} alt={logo} className={css(styles.logo)}/>

                <TextField 
                id="email" 
                label="email" 
                variant="outlined" 
                name='email' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                autoComplete='email'
                />
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password" name='password' value={password} onChange={e => setPassword(e.target.value)}
                    />
                    </FormControl>
                    <Button variant='contained' type='submit'>Login</Button>
                    <Link to='/signup' className='text-center text-blue-300'>Dont have Account? Signup</Link>
            </Box>
    </form>
    </div>
  )
}


const styles = StyleSheet.create(
    {
        flexDisplay: {
        width: '600px',
        height: 'auto',
        padding: '2em',
        border: '2px solid grey',
        borderRadius: '20px',
        display: 'grid',
        alignItems: 'center',
        justifyContent: "center",
        margin: '20px auto'
    },
    logo: {
        width: '100px',
        margin: '20px auto'
    }
}
)
export default LonginScreen
