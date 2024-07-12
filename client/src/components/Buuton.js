import { StyleSheet, css } from "aphrodite";
import PropType from "prop-types"

const CustomButton = (props) => {
const {name, colorType} = props;

const styleSheet = StyleSheet.create({
    color: {
        backgroundColor: colorType === 'border' ? 'transparent': colorType,
        border: colorType === 'border' ? '2px solid black' : 'none',
        color: colorType === 'border' ? 'black' : 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
})

  return (
    <div>
      <button className={css(styleSheet.color)}>{name}</button>
    </div>
  )
}



CustomButton.propTypes = {
    name: PropType.string,
    colorType: PropType.oneOf(['blue', 'red', 'border']).isRequired,
}

export default CustomButton
