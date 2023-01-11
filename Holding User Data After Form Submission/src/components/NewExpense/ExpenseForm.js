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

    const submitHandler = (event)=> {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
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
If a button with type submit is pressed instead of a form, overall form element will emit an event to which we can listen
and that's the submit event. It keeps sending the request as we input that this is a default browser behavior.
A part of this default browser behavior is that if you do click this button, the page reloads because the browser
actually automatically sends a request whenever a form is submitted to the server. We can disable or prevent this default behavior
because we again get an event object here, automatically just as for the change events and on this object,
we can call a prevent default method. This default JavaScript behavior. We can prevent the default of this request being sent
and since that request is not sent the page will now also not reload because we stay on the currently loaded page
without sending any request anywhere and we can continue handling this with Java script.

For Date --a date property and actually set this to a new date, constructing a new date with the built in date constructor
to which then in turn we passed the entered date which will parse that date string and converted into a date object.

*/

