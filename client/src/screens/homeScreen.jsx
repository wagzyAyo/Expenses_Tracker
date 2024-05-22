import { greeting } from "../utils.js/utilities"

const homeScreen = () => {
  return (
    <div>
      <p><h1 className="text-center text-yellow-500">{greeting} John</h1> </p>
    </div>
  )
}

export default homeScreen
