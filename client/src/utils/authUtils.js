export const checkAuth = async (navigate, route = 'login')=>{
    try {
        const response = await fetch('https://expense-tracker-server-p92x.onrender.com/api/checkauth',{
            method: 'POST',
            credentials: 'include'
          });
          if(response.status === 200){
            console.log('User is authenticated')
            navigate(`/dashboard`)
          }else if (response.status === 401){
              console.log('User is not authenticated', route)
              navigate(`/${route}`)
          }
    } catch (err) {
        console.log('Error during authentication check', err);
        navigate(`/${route}`)
    }
  }