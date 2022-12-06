import Expenseitem from './ExpenseItem'
import Card from "../UI/Card";
import './Expenses.css';
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList"

const Expenses = ({items}) => {
    const [filteredYear, setFilterYear] = useState('2022');
    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;