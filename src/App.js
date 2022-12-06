import './App.css';
import React, {useState} from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Car Insurance0', amount: 194.67, date: new Date(2021, 1, 12)},
    {id: 'e2', title: 'Car Insurance1', amount: 294.67, date: new Date(2020, 2, 12)},
    {id: 'e3', title: 'Car Insurance2', amount: 394.67, date: new Date(2022, 3, 12)},
    {id: 'e4', title: 'Car Insurance3', amount: 494.67, date: new Date(2022, 4, 12)},
    {id: 'e5', title: 'Car Insurance4', amount: 594.67, date: new Date(2022, 5, 12)},
];
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]});
    }

  return (
      <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses items ={expenses}/>
      </div>
  );
}

export default App;
