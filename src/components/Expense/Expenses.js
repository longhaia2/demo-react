import Expenseitem from './ExpenseItem'
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = ({items}) => {
    return (
        <Card className="props">
            <h2>Hello HaiHL</h2>
            <Expenseitem title={items[1].title} amount={items[1].amount} date={items[1].date} />
            <Expenseitem title={items[2].title} amount={items[2].amount} date={items[2].date} />
            <Expenseitem title={items[3].title} amount={items[3].amount} date={items[3].date} />
            <Expenseitem title={items[0].title} amount={items[0].amount} date={items[0].date} />
            <Expenseitem title={items[4].title} amount={items[4].amount} date={items[4].date} />
        </Card>
    );
}

export default Expenses;