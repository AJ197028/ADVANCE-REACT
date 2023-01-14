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

  
  

  return (
    <div>
      <Card className="expenses">
    <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
    />
    {filteredExpenses.length === 0 &&  
      <p>No expenses found.</p>
    }
    {filteredExpenses.length === 1 && 
      filteredExpenses.map((expense)=>(
        <ExpenseItem
          key={expense.id}
          Title={expense.title}
          Amount={expense.amount}
          Date={expense.date}
        />
      )) 
    }
    {filteredExpenses.length === 1 && <p>Only single Expense here. Please add more...</p>}
    { filteredExpenses.length > 1 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          Title={expense.title}
          Amount={expense.amount}
          Date={expense.date}
        />
    ))
  }
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