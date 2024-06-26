import dayjs from "dayjs";

export const calculateSummary = (expenses) => {
    return expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});
  };

 

// Helper function to normalize date to the start of the day
const normalizeDate = (date) => {
  return date.startOf('day');
};

// Main function to filter expenses based on the active button
export const filteredExpenses = (exp, activeButton, date) => {
  if (!exp) return [];

  const today = normalizeDate(dayjs());

  if (activeButton === "custom" && date) {
    const normalizedDate = normalizeDate(date);
    return exp.filter(expense => normalizeDate(dayjs(expense.date, 'DD-MM-YYYY')).isSame(normalizedDate, 'day'));
  } else if (activeButton === 'today') {
    return exp.filter(expense => normalizeDate(dayjs(expense.date, 'DD-MM-YYYY')).isSame(today, 'day'));
  } else if (activeButton === 'week') {
    const weekStart = today.startOf('week');
    const weekEnd = today.endOf('week');
    return exp.filter(expense => {
      const expenseDate = normalizeDate(dayjs(expense.date, 'DD-MM-YYYY'));
      return expenseDate.isAfter(weekStart) && expenseDate.isBefore(weekEnd);
    });
  } else if (activeButton === 'month') {
    const monthStart = today.startOf('month');
    const monthEnd = today.endOf('month');
    return exp.filter(expense => {
      const expenseDate = normalizeDate(dayjs(expense.date, 'DD-MM-YYYY'));
      return expenseDate.isAfter(monthStart) && expenseDate.isBefore(monthEnd);
    });
  }

  return [];
};