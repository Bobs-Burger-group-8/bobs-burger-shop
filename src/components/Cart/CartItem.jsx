
function CartItem({item:{name, price, category}}){
    console.log(name)
    if(name){
    return(
        <li>
            {(name !== undefined)? name:"noName"}
        </li>
    )}
}


export default CartItem