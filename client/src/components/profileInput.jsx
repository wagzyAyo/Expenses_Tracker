import { useState } from "react"
import { StyleSheet, css } from "aphrodite";
import PropType from "prop-types"

const ProfileInput = ({value: initialValue}) => {
    const [value, /*setValue*/] = useState(initialValue);
    
  return (
    <div>
      <input type="text" className={css(styleSheet.read)} readOnly value={value}/>
    </div>
  )
}

const styleSheet = StyleSheet.create({
    read : {
        maxWidth: "200px",
        padding: "10px 20px",
        height: "35px",
        border: "1px solid gray",
        borderRadius: "4px",
        fontWeight: "500",
    }
})

ProfileInput.propTypes = {
    value: PropType.string
}

export default ProfileInput
