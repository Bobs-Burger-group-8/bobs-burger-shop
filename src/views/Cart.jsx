/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import {appContext } from '../App'
import CartList from '../components/Cart/CartList';
import Total from '../components/Cart/Total';

function Cart() {

  let ctx = useContext(appContext);
  return (<>
    <div>Cart</div>
    <CartList/>
    <Total/> 
    </>
  )
}

export default Cart