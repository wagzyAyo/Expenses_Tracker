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
import {StyleSheet, css} from 'aphrodite'
import logo from '../assets/Logo.png'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const SignupScreen = () => {
    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={css(styles.flexDisplay)}>
        
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '350px', display: 'grid'},
      }}
      noValidate
      autoComplete="off"
    >
      <img src={logo} alt={logo} className={css(styles.logo)}/>
        <TextField id="outlined-basic" label="firstName" variant="outlined" name='firstName' />
        <TextField id="outlined-basic" label="lastName" variant="outlined" name='lastName' />
        <TextField id="outlined-basic" label="email" variant="outlined" name='email' />
        <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
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
                label="Password" name='password'
            />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">confirm Password</InputLabel>
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
                label="Password" name='confirmPassword'
            />
            </FormControl>
            <Button variant='contained'>Sign up</Button>
            <div>
                <Link to='/' className='text-center'>Already have an account? Login
                </Link>
            </div>
            
    </Box>
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

export default SignupScreen
