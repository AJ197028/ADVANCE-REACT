import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);         
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);    
    };      
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);         
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-03-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>    
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;



/*
    Those input values needed to be store somewhere so after the form is submitted, we can use that value.

Because we want to gather all the values

for all inputs and then combine them

into an object when the form overall is submitted. so State is used

    By default the values will always be in string form for on change event be it no. date as string

*/