export function getGreetingAndYear() {
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

    return { greeting, year };
}