import { useContext } from "react";
import { appContext } from "../../App";

export default function Total(){
    const ctx = useContext(appContext);
    return(<div><p>Total works</p>
    
    <p>{'0'}</p></div>)
}