import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import {StyleSheet, css} from 'aphrodite';
import logo from '../assets/Logo.png';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, /*useSelector*/ } from 'react-redux';
import { setCredentials } from '../slice/auth';
import {toast} from 'react-toastify';
import { useSignupMutation } from '../slice/userApiSlice';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { currencySymbols } from '../utils/currencySymbols';
import { checkAuth } from '../utils/authUtils';
import Loader from '../components/loader';




const SignupScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currency, setCurrency] = useState("");
    const [isloading, setIsloading] = useState(true);


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [signup, /*{isLoading}*/] = useSignupMutation();
    //const { userInfo } = useSelector((state) => state.auth);


    useEffect(() => {
        const intialize = async ()=>{
            await checkAuth(navigate, 'signup');
            setIsloading(false)
        }
        intialize();
    }, [navigate]);


  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleSubmit = async(e) =>{
    e.preventDefault();


    if (password !== confirmPassword){
        toast.error('Password and confirm password do not match')
    } else{
        try {
            const res = await signup({firstName, lastName, email, currency, password}).unwrap()
        dispatch(setCredentials(res))
        navigate('/dashboard')
        } catch (err) {
            toast.error("User with the email already exist")
        }
    }
  }

if(isloading){
    return (
        <Loader />
    )
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
            <img src={logo} alt="logo" className={css(styles.logo)}/>
                <TextField
                id="firstName"
                label="firstName"
                variant="outlined"
                name='firstName'
                value={firstName} onChange={e => setFirstName(e.target.value)}
                autoComplete='given-name'
                />


                <TextField
                id="lastName"
                label="lastName"
                variant="outlined"
                name='lastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                autoComplete='family-name'
                />


                <TextField
                id="email"
                label="email"
                variant="outlined"
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete='email'
                />

        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="currency"
          name='currency'
          value={currency}
          label="currency"
          onChange={(e)=> setCurrency(e.target.value)}
        >
            <MenuItem value="" disabled>
              Currency Symbol
            </MenuItem>
          {currencySymbols.map(symbol =>{
            return <MenuItem key={symbol} value={symbol}>{symbol}</MenuItem>
          })}
          
        </Select>

                <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                        label="Password"
                    />
                    </FormControl>
                    <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="confirmPassword">confirm Password</InputLabel>
                    <OutlinedInput
                        id="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
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
                        label="confirmPassword"
                    />
                    </FormControl>
                    <Button variant='contained' type='submit'>Sign up</Button>
                    <div>
                        <Link to='/login' className='text-center text-blue-300'>Already have an account? Login
                        </Link>
                    </div>
                   
            </Box>
    </form>
    </div>
  )
}


const styles = StyleSheet.create(
    {
        flexDisplay: {
        maxWidth: '600px',
        height: 'auto',
        padding: '2em',
        border: '2px solid grey',
        borderRadius: '20px',
        display: 'grid',
        alignItems: 'center',
        justifyContent: "center",
        margin: '10% auto',
        overflowX: 'hidden',
        '@media (max-width: 700px)': {
            border: 'none',
        }
    },
    logo: {
        width: '100px',
        margin: '20px auto'
    }
}
)


export default SignupScreen



