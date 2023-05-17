import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const [buttonIsHighlighted, setBtnIsHighlighted] = useState(false);
    const { items } = cartCtx;


    // setting if something happens  like change
    useEffect(() => {
        // runs once for the first time  
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        //remove by setting timer

        const timer = setTimeout(()=>{
        setBtnIsHighlighted(false);

        },300);

        return ()=>{
            clearTimeout(timer);
        }
    }, [items]);


    const buttonClass = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`
    return <React.Fragment>
        <button className={buttonClass} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberofCartItems}
            </span>
        </button>
    </React.Fragment>
}
export default HeaderCartButton;