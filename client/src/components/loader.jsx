import {Spinner} from 
'@material-tailwind/react'

const Loader = () => {
return (
 <div className='flex justify-center items-center h-full w-full'>
 <Spinner
className = 'h-12 w-12 text-gray-900/50'
 />
</div>
)
}
export default Loader