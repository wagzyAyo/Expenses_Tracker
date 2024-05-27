const currentDate = new Date();
const time = currentDate.getHours();
const year = currentDate.getFullYear();


let greeting = "";


if (time < 12) {
    greeting = "Good morning";
} else if (time < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}




export const toTitleCase = (str) => {
    if (!str) return '';
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };


  export const netSpend = (data) => {
    let total = 0;


    if(Array.isArray(data)){
      data.forEach(element => {
        total += element.amount
      })
    } else{
      console.warn('Error data is not an array or equal to null')
    }
   
    return total
  }


  export const toMoney = (amount) =>{
    if (isNaN(amount)){
      console.log(`Amount is null`)
    }
    const formattedAmount = amount.toFixed(0)
    return formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


export { greeting, year };
