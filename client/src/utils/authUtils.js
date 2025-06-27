export const checkAuth = async (navigate, route = 'login')=>{
    try {
        const response = await fetch('https://expense-tracker-server-p92x.onrender.com/api/checkauth',{
            method: 'POST',
            credentials: 'include'
          });
          console.log(response.status)
          if(response.status === 200){
            console.log(`Token is present: ${response.status}`);
            const userData = await fetch('https://expense-tracker-server-p92x.onrender.com/api/data',{
              method: 'GET',
              credentials: 'include'
            })
            const data = userData.json();
            if(data.user){
              // console.log(userData.status);
              console.log(`userData: ${data}`)
              navigate(`/dashboard`)
            }else{
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