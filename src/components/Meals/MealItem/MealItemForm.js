import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enetereAmount = amountInputRef.current.value;
        const enetereAmountNumber = +enetereAmount; //string to int conversion

        if (enetereAmount.trim().length === 0 ||
            enetereAmountNumber < 1 ||
            enetereAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enetereAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter valid Amount(1-5).</p>}
        </form>
    )
}

export default MealItemForm
