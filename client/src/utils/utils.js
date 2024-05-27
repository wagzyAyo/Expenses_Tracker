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

export { greeting, year };