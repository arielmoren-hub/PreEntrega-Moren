import "./CartWiget.css";
import { FaOpencart } from "react-icons/fa"

function CartWiget() {
  return (
    <div className="cart-widget">
       <FaOpencart/>
       <div className="cant">
        <span>1</span>
       </div>
    </div>
  );
}

export default CartWiget;
