import { useState } from "react";
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
import { StyleSheet, css } from "aphrodite";
import PropType from "prop-types"

const UpdatePassword = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const {onSubmit} = props;

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            email,
            oldPassword,
            newPassword
        };
        console.log(data)
        onSubmit(data)
    }
  return (
    <div className={css(styleSheet.container)}>
        <h1 className="text-2xl font-semibold mt-3 text-center">Update your Password</h1>
        <form action="" onSubmit={handleSubmit}>
            <Box
            component="div"
            sx={{
                '& > :not(style)': { m: 2, width: '350px', display: 'grid'},
            }}
            noValidate
            autoComplete="off"
            >
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
                        id="outlined-adornment"
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
                        label="Password" name='oldPassword' value={oldPassword} onChange={e => setOldPassword(e.target.value)}
                    />
                    </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
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
                        label="newPassword" name='newPassword' value={newPassword} onChange={e => setNewPassword(e.target.value)}
                    />
                    </FormControl>
                    <Button variant='contained' type='submit'>Update password</Button>
                    </Box>
                    </form>
    </div>
  )
}
const styleSheet = StyleSheet.create({
    container: {
      margin: '10px auto',
      maxWidth: '600px',
      padding: '20px 10%'
    }
  });

  UpdatePassword.propTypes = {
    onSubmit: PropType.func
  }
export default UpdatePassword
