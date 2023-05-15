import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return <React.Fragment>
        <header className={`${classes.header}`}>
            <h1> ReactMeals</h1> 
            {/* <button>Cart</button> */}
            <HeaderCartButton />
        </header>
        <div className={`${classes['main-image']}`}>
            <img src={mealsImage} alt='table foods' />
        </div>
    </React.Fragment>
}
export default Header;