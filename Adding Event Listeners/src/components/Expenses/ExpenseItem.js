import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const  clickHandler = () =>{
        console.log('Clicked!!!');
    };
    
    return(

        <Card className="expense-item">
            <ExpenseDate Date={props.Date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.Title}</h2>
                <div className="expense-item__price">${props.Amount}</div>
                <button onClick={clickHandler}>Delete Expense</button>
            </div> 
            
        </Card>
    );
}
export default ExpenseItem;


