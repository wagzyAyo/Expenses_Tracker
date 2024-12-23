import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from "../components/nav";
import Intro from "../components/intro";
import Footer from "../components/footer";
import { useUserDataMutation } from '../slice/userApiSlice';
import Loader from '../components/loader';
import { toTitleCase} from '../utils/utils';
import { checkAuth } from '../utils/authUtils';



const UserDashboard = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true)
 
  const [userData] = useUserDataMutation();
  const navigate = useNavigate()


 useEffect(()=>{
  const initialize = async ()=>{
    await checkAuth(navigate, 'login')
    try {
      const response = await userData().unwrap()
      setData(response.user);
      setIsLoading(false);
    } catch (err) {
      console.log(err)
    }
  }
 
 initialize();
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


