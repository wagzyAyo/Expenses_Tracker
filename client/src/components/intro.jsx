import { greeting } from "../utils/utils"


const Intro = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-gray-900">{greeting} John</h1>
      <p className="text-slate-300 my-7">Monitor your spending habit and make right financial decisions.</p>
    </div>
  )
}


export default Intro


