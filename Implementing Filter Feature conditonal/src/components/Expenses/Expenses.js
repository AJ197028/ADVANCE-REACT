import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  
  const [filteredYear , setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expense found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        Title={expense.title}
        Amount={expense.amount}
        Date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};
  
  export default Expenses;


  /* By Ternary Operator (opitonal)

  condition ? statement_if_true : statement_when_false
  <Card className="expenses">
    <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
    />
    {filteredExpenses.length === 0 ?  (
      <p>No expenses found.</p>
    ) : (
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          Title={expense.title}
          Amount={expense.amount}
          Date={expense.date}
        />
    ))
  )}
  </Card>
  */