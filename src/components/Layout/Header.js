import React from 'react';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="A table of delicious meal!" />
            </div>
        </React.Fragment>
    )
}

export default Header
