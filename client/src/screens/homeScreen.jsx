import {useEffect, useState} from 'react'
import Nav from "../components/nav";
import Intro from "../components/intro";
import Footer from "../components/footer";
import { useUserDataMutation } from '../slice/userApiSlice';
import Loader from '../components/loader';
import { toTitleCase } from '../utils/utils';




const HomeScreen = () => {
  const [data, setData] = useState("");
 
  const [userData, {isLoading}] = useUserDataMutation();


 useEffect(()=>{
  const fecthData = async ()=>{
    try {
      const response = await userData().unwrap()
      setData(response.user)
    } catch (err) {
      console.log(err)
    }
  }
 fecthData();
 },[userData])
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Nav />
        { isLoading ? (<>
        <Loader />
        </>)
        :
        (<>
        <Intro firstName={toTitleCase(data?.firstName)} exp={data?.Expenses}/>
        </>)
       
      }
       
       </main>
       <Footer />
    </div>
  )
}




export default HomeScreen

