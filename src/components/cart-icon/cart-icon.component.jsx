import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss';



import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartHidden}) => (

    <div className='cart-icon' onClick={ toggleCartHidden } >
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">
        0
        </span>
    </div>


)
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) =>  ({
    currentUser,
    hidden
})


const mapDispatchToProps = dispath => ({
    toggleCartHidden: ()  => dispath(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);