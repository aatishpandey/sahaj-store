const cartReducer = (cartState, action) => {
    const { myCart, myWishlist, WishlistFlag } = cartState;
    const { payload } = action;
    switch (action.type) {
        case "ADD_TO_CART":
            const flag = myCart.find(item => item.id === payload.id)
            // if item already added, increase quantity
            if (flag) {
                return {
                    ...cartState,
                    myCart: myCart.map(item => item.id === payload.id ?
                        {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item)
                }
            }

            // if item not added , then add item
            return {
                ...cartState,
                myCart: [...myCart, payload],
            }

        case "REMOVE_FROM_CART":
            return {
                ...cartState,
                myCart: myCart.filter((item) => item.id !== payload.id),
            }

        case "DECREMENT":
            return {
                ...cartState,
                myCart: myCart.map(item => item.id === payload.id ?
                    {
                        ...item,
                        quantity: item.quantity > 1 ?
                            item.quantity - 1 :
                            item.quantity
                    }
                    : item)
            }

        case "INCREMENT":
            return {
                ...cartState,
                myCart: myCart.map(item => item.id === payload.id ?
                    {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item)
            }

        case "ADD_TO_WISHLIST":
            const flagWishlist = myWishlist.find(item => item.id === payload.id)
            if (flagWishlist) {
                return cartState
            } else {
                return {
                    ...cartState,
                    myWishlist: [...myWishlist, payload],
                    WishlistFlag: !WishlistFlag
                }
            }

        case "REMOVE_FROM_WISHLIST":
            return ({
                ...cartState,
                myWishlist: myWishlist.filter(item => item.id !== payload.id),
                WishlistFlag: false,
            }
            )
        default: return cartState;
    }
}

export { cartReducer };