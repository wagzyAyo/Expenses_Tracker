export const calculateSummary = (expenses) => {
    return expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});
  };

export  const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};


export const filteredExpenses = (exp, activeButton) => {
  const today = formatDate(new Date());


  const current = new Date();
  const weekStart = new Date(current.setDate(current.getDate() - current.getDay()));
  const weekEnd = new Date(current.setDate(current.getDate() - current.getDay() + 6));


  const monthStart = new Date();
  monthStart.setDate(1);
  const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);





  if (exp) {
    if (activeButton === 'today') {
      return exp.filter(expense => expense.date === today);
    } else if (activeButton === 'week') {
      return exp.filter(expense => {
        const [day, month, year] = expense.date.split('-');
        const expenseDate = new Date(`${year}-${month}-${day}`);
        return expenseDate >= weekStart && expenseDate <= weekEnd;
      });
    } else if (activeButton === 'month') {
      return exp.filter(expense => {
        const [day, month, year] = expense.date.split('-');
        const expenseDate = new Date(`${year}-${month}-${day}`);
        return expenseDate >= monthStart && expenseDate <= monthEnd;
      });
    }
  }
  return [];
};