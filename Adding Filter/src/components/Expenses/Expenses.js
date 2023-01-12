import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear , setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
      Title={props.items[0].title}
      Amount={props.items[0].amount}
      Date={props.items[0].date}
      />
      <ExpenseItem
      Title={props.items[1].title}
      Amount={props.items[1].amount}
      Date={props.items[1].date}
      />
      <ExpenseItem
      Title={props.items[2].title}
      Amount={props.items[2].amount}
      Date={props.items[2].date}
      />
      <ExpenseItem
      Title={props.items[3].title}
      Amount={props.items[3].amount}
      Date={props.items[3].date}
      />
  </Card>
  );
}
  
  export default Expenses;