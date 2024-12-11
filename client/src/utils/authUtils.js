

export const checkAuth = async (navigate, route)=>{
    const response = await fetch('https://expense-tracker-server-p92x.onrender.com/api/checkauth', {
      credentials: true
    });
    if(response.status !== 200){
      navigate(`/${route}`)
    }
  }