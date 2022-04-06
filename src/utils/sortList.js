const sortList = (productList, sortBy) => {
    if (sortBy === "LOW_TO_HIGH") {
        const sortedList = [...productList].sort((a, b) => a.price - b.price)
        return sortedList;
    }
    if (sortBy === "HIGH_TO_LOW") {
        const sortedList = [...productList].sort((a, b) => b.price - a.price)
        return sortedList;
    }
    return productList;

}

export { sortList }