export const getWeekDates = () => {
    const dates = [];
    const today = new Date();

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed

    dates.push(`${dd}/${mm}`);

    for (let i = 1; i <= 7; i++) {
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + i); 

        const newDd = String(newDate.getDate()).padStart(2, '0');
        const newMm = String(newDate.getMonth() + 1).padStart(2, '0');

        dates.push(`${newDd}/${newMm}`);
    }

    return dates;
}

