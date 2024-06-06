export const calculateSummary = (expenses) => {
    return expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});
  };

 
// Helper function to format date in DD-MM-YYYY format
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Helper function to normalize date to the start of the day
const normalizeDate = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

// Main function to filter expenses based on the active button
export const filteredExpenses = (exp, activeButton) => {
  if (!exp) return [];

  const today = formatDate(new Date());

  if (activeButton === 'today') {
    return exp.filter(expense => expense.date === today);
  } else if (activeButton === 'week') {
    const current = new Date();
    const weekStart = normalizeDate(new Date(current.setDate(current.getDate() - current.getDay())));
    const weekEnd = normalizeDate(new Date(weekStart));
    weekEnd.setDate(weekStart.getDate() + 6);
    return exp.filter(expense => {
      const expenseDate = normalizeDate(new Date(expense.date.split('-').reverse().join('-')));
      return expenseDate >= weekStart && expenseDate <= weekEnd;
    });
  } else if (activeButton === 'month') {
    const current = new Date();
    const monthStart = normalizeDate(new Date(current.getFullYear(), current.getMonth(), 1));
    const monthEnd = normalizeDate(new Date(current.getFullYear(), current.getMonth() + 1, 0));
    return exp.filter(expense => {
      const expenseDate = normalizeDate(new Date(expense.date.split('-').reverse().join('-')));
      return expenseDate >= monthStart && expenseDate <= monthEnd;
    });
  }
  return [];
};