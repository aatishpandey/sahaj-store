import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard"
import { useCart } from "../../contexts/cartContext"
import { useEffect, useReducer } from "react";
import "./cartpage.css"

const CartPage = () => {
    const { cartState } = useCart();
    const { myCart } = cartState;

    const initialObject = {
        currPrice: 0,
        totalDiscount: 0,
        cartPrice: 0,
        finalPrice: 0,
        deliveryCharge: 50,
    }


    const priceArr = cartState.myCart.reduce((acc, curr) =>
    (
        {
            ...acc,
            currPrice: acc.currPrice + curr.price * curr.quantity,
        }
    ), initialObject)

    const myCartLength = myCart.length > 0 ? true : false
    return (
        <div class="cart-main">
            <div class="cart-info">
                {myCart.length > 0 ?
                    myCart?.map((product) =>
                        <HorizontalCard
                            product={product}
                        />)
                    : <div className="card-head">Your Cart is empty😢</div>
                }
            </div>

            {myCartLength && <div class="cart-details">
                <div class="card-head">
                    PRICE DETAILS
                </div>
                <hr />
                <div class="card-elements">
                    <p class="cart-text">Price</p>
                    <p class="cart-text">Rs.{priceArr.currPrice}</p>
                </div>

                <div class="card-elements">
                    <p class="cart-text">
                        {myCart.map(item => (
                            <div>{item.name} X {item.quantity}</div>
                        ))}
                    </p>
                </div>

                <div class="card-elements">
                    <p class="cart-text">Discount</p>
                    <p class="cart-text">Rs.{priceArr.totalDiscount}</p>
                </div>

                <div class="card-elements">
                    <p class="cart-text">Delivery Charges</p>
                    <p class="cart-text">Rs.{priceArr.deliveryCharge}</p>
                </div>
                <hr />

                <div class="card-elements">
                    <p class="card-head">TOTAL AMOUNT</p>
                    <p class="card-head">
                        Rs.{priceArr.currPrice + priceArr.deliveryCharge}
                    </p>
                </div>
                <hr />
                <p class="cart-text ">You saved Rs.0</p>

                <button class="card-btn">

                    PLACE ORDER
                </button>
            </div>}
        </div>
    )
}

export { CartPage }