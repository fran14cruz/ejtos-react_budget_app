import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    
    // total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const onChangeBudgetHandler = (event) => {
        const budgetValue = Number(event.target.value);

        if (budgetValue > 20000) {
            alert("The value cannot exceed 20000");
            return
        }
        if (budgetValue < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending " + totalExpenses);
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budgetValue,
          });

    }

    return (
        <div className='alert alert-secondary'
            style={{ display: 'flex', alignItems: 'center',
            justifyContent: 'space-between' }}
        >
            <div>
                <label htmlFor="budget">Budget: £</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    required="required"
                    type="number"
                    id="budget"
                    value={budget}
                    step="10"
                    onChange={onChangeBudgetHandler}
                ></input>
            </div>
        </div>
    );
};
export default Budget;