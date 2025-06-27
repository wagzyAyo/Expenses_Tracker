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
            if(userData.status === 200){
              console.log(userData.status)
              const data = userData.json();
              console.log(data)
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