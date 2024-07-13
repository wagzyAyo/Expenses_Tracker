import PropType from 'prop-types';
import TextField from '@mui/material/TextField';
import { StyleSheet, css } from 'aphrodite';

const Form = (props) => {
    const {name, type, value, onChange} = props


  return (
    <div className={css(styleSheet.style)}>
        <label htmlFor={name} className='m-3'><b>{name}</b></label>
        <TextField 
        type={type} 
        name={name}
        value={value} 
        onChange={onChange} 
        id={name}/>
    </div>
  )
}

const styleSheet = StyleSheet.create({
    style: {
        display: "grid"
    }
})

Form.propTypes ={
    name: PropType.string.isRequired,
    type: PropType.string.isRequired,
    value: PropType.string.isRequired,
    onChange: PropType.func.isRequired
}

export default Form
