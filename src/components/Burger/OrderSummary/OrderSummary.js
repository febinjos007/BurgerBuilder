import React from 'react';
import Hoc from '../../../hoc/Hoc';
import Button from '.././../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
        })
    return (
        <Hoc>
            <h3>Your Order</h3>
            <p>A delicious burge with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType={"Success"} clicked={props.purchaseContinue}>CONTINUE</Button>
        </Hoc>
    )
}

export default orderSummary;