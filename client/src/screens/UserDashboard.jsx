import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from "../components/nav";
import Intro from "../components/intro";
import Footer from "../components/footer";
import { useUserDataMutation } from '../slice/userApiSlice';
import Loader from '../components/loader';
import { toTitleCase} from '../utils/utils';




const UserDashboard = () => {
  const [data, setData] = useState("");
 
  const [userData, {isLoading}] = useUserDataMutation();
  const navigate = useNavigate()


 useEffect(()=>{
  const checkAuth = async ()=>{
    const response = await fetch('https://expense-tracker-server-p92x.onrender.com/api/checkauth', {
      credentials: true
    });
    if(response.status !== 200){
      navigate('/login')
    }
  }
  const fecthData = async ()=>{
    try {
      const response = await userData().unwrap()
      setData(response.user)
    } catch (err) {
      console.log(err)
    }
  }
 checkAuth()
 fecthData();
 },[userData, navigate])
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Nav firstName={data?.firstName} lastName={data?.lastName}/>
        { isLoading ? (<>
        <Loader />
        </>)
        :
        (<>
        <Intro 
        firstName={toTitleCase(data?.firstName)} 
        exp={data?.Expenses} 
        currency={data?.Currency}
        budget= {data?.Budget}
        />
        </>)
       
      }
       
       </main>
       <Footer />
    </div>
  )
}




export default UserDashboard


