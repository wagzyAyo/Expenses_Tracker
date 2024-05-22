import { greeting } from "../utils.js/utilities"

const homeScreen = () => {
  return (
    <div>
       <h1 className="text-center text-yellow-500">{greeting} John</h1>
    </div>
  )
}

export default homeScreen
