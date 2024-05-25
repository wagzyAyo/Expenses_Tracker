import { greeting } from "../utils.js/utilities"

const Intro = () => {
  return (
    <div className="text-center">
      <h1>{greeting} John</h1>
      <p className="text-slate-300 my-7">Monitor your spending habit and make right financial decisions.</p>
    </div>
  )
}

export default Intro
