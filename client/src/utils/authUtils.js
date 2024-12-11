export const checkAuth = async (navigate, route)=>{
    try {
        const response = await fetch('https://expense-tracker-server-p92x.onrender.com/api/checkauth', {
            credentials: 'include'
          });
          if(response.ok){
            navigate(`/dashboard`)
          }else{
              navigate(`/${route}`)
          }
    } catch (err) {
        console.log('Error during authentication check', err);
        navigate(`/${route}`)
    }
  }