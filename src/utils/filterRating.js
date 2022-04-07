const filterRating = (productList, rating) => {
    if (rating.four === false &&
        rating.three === false &&
        rating.two === false &&
        rating.one === false
    ) {
        return productList;
    }
    if (rating.four) {
        return productList.filter(item => item.rating >= 4)
    }
    if (rating.three) {
        return productList.filter(item => item.rating >= 3)
    }
    if (rating.two) {
        return productList.filter(item => item.rating >= 2)
    }
    if (rating.one) {
        return productList.filter(item => item.rating >= 1)
    }
}

export { filterRating }