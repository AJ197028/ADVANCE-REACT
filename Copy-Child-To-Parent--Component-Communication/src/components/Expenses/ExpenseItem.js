import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.Title)  
    const clickHandler = () =>{
        setTitle('Update');
        console.log(title);
    };
    
    return(

        <Card className="expense-item">
            <ExpenseDate Date={props.Date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.Amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div> 
            
        </Card>
    );
}
export default ExpenseItem;


