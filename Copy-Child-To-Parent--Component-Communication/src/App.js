import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }
  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;








/*
We can create our own event props, where we can expect functions as values and
that would allow us to pass a function from a parent component to a child component 
and then call that function inside of the child component. And when we then call a function,
we can of course pass data to that function as a parameter and that's how we can communicate 
up from child to parent.

Props can only be passed from parent to child,	

When we pass from child to parent we cant skip any components in between.
Suppose we are passing data from expense here we cant directly jump from expense form
to the app component rather we can go from expense from to the newExpense then to the App component


Passing data from child to parent:

In the parent component, create a handler function that will receive the data object as parameter.
Pass this handler function as a prop while calling the child component from the parent. (prop will point to the handler function)
In the child component function, you will now receive the handler function as prop.
Execute this function and pass in the data you wish to send to the parent as a parameter.
The parent component will receive the data object upon execution of prop function by the child component.


*/
