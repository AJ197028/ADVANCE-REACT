import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{
    //const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount] = useState('');
    //const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''

    })
    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value); 
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })        
    };
    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value);   
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }) 
    };      
    const dateChangeHandler = (event) => {
        //setEnteredDate(event.target.value);     
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })     
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
    This is object way to handle multiple state---the problem is because when you update your state   
react will not merge this with old state.it will simply replace with old state. the old state with new one.
so the data will b lost of other state. so we need to copy the data so that it will remain same .
this can be done by spread operator. Here by using spread operator we are just copying everything initial state 
and by using  enterTitle: event.target .value we are just overriding the previous enterTitle value with new value.
This ensure that the other values arent thrown away and also make sure it is also the part of the new state and 
meanwhile we are updating our value the we wanted to that will apply to all the events which we would like to update the value

*/