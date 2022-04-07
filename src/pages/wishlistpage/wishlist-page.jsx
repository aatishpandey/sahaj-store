import { WishlistCard } from "../../components/WishlistCard/wishlist-card";
import { useCart } from "../../contexts/cartContext"
import "./wishlist-page.css"

const WishPage = () => {
    const { cartState } = useCart();
    const { myWishlist } = cartState;
    return (
        <div class="cart-main">
            <div class="cart-info">
                {myWishlist.length > 0 ?
                    myWishlist?.map((product) =>
                        <WishlistCard
                            key={product.id}
                            product={product}
                        />
                    )
                    : <div className="card-head">Your Wishlist is empty 😢</div>}
            </div>
        </div>
    )
}

export { WishPage }