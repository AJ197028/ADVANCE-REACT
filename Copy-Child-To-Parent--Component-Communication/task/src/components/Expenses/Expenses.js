import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    return (
      
        <Card className="expenses">
          {props.items.map((expense) => {
             return <ExpenseItem
              Title={expense.title}
              Amount={expense.amount}
              Date={expense.date}
              />
          })};  
        </Card>
      
    );
  }
  
  export default Expenses;