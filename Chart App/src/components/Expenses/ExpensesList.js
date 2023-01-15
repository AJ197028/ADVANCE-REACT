import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
    }

    return (
    <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              Title={expense.title}
              Amount={expense.amount}
              Date={expense.date}
            />
        ))}
    </ul>
    );
};

export default ExpensesList;