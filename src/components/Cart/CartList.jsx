import { useContext } from "react"
import { appContext } from "../../App"
import CartItem from "./CartItem.jsx"

export default function CartList(){
    let ctx = useContext(appContext)
    console.log(ctx.cart)
    return(<>
    <ul>
        {
            ctx.cart.map((item, index)=>(<CartItem key={index} item={item}/>))
        }
        </ul></>
    )
}