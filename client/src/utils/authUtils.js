export const checkAuth = async (navigate, route = 'login')=>{
    try {
        const response = await fetch('https://expense-tracker-server-p92x.onrender.com/api/checkauth',{
            method: 'POST',
            credentials: 'include'
          });
          console.log(response.status)
          if(response.status === 200){
            console.log(`Token is present: ${response.status}`);
            const userInfo = localStorage.getItem('userInfo')
            if(userInfo){
              console.log('UserInfo present')
              navigate('/dashboard')
            }else{
              console.log('User info not present')
              navigate(`/${route}`)
            }
          }else {
              console.log('User is not authenticated', route)
              navigate(`/${route}`)
          }
    } catch (err) {
        console.log('Error during authentication check', err);
        navigate(`/${route}`)
    }
  }