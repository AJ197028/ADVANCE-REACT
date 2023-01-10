import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    const [amount, setAmount] = useState(props.Amount)  
    const  clickHandler = () =>{
        setAmount(100);
        console.log(amount);
    };
    
    return(

        <Card className="expense-item">
            <ExpenseDate Date={props.Date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.Title}</h2>
                <div className="expense-item__price">${amount}</div>
                <button onClick={clickHandler}>Reset Amount</button>
            </div> 
            
        </Card>
    );
}
export default ExpenseItem;


