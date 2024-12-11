export const checkAuth = async (navigate, route = 'login')=>{
    try {
        const response = await fetch('https://expense-tracker-server-p92x.onrender.com/api/checkauth',{
            method: 'POST',
            credentials: 'include'
          });
          if(response.ok){
            console.log('User is authenticated')
            navigate(`/dashboard`)
          }else{
              console.log('User is not authenticated', route)
              navigate(`/${route}`)
          }
    } catch (err) {
        console.log('Error during authentication check', err);
        navigate(`/${route}`)
    }
  }