import { greeting, toTitleCase } from "../utils/utils";
import PropType from 'prop-types'


const Intro = (props) => {
  

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-gray-900">{greeting} {toTitleCase(props.firstName)}</h1>
      <p className="text-slate-300 my-7">Monitor your spending habit and make right financial decisions.</p>
    </div>
  )
}


Intro.propTypes = {
  firstName: PropType.string.isRequired
}

export default Intro


