const filterRating = (productList, rating) => {
    // console.log(productList)
    let finalList = [];
    if (rating.four === false &&
        rating.three === false &&
        rating.two === false &&
        rating.one === false
    ) {
        return productList;
    }
    if (rating.four) {
        const filteredList = productList.filter(item => {
            // checking rating
            if (item.rating >= 4) {
                // checking if item already exists in final array
                if (!finalList.some((finalItem) => item.id === finalItem.id)) {
                    return item;
                }
            }
        }
        )
        finalList = [...finalList, ...filteredList];
    }
    if (rating.three) {
        const filteredList = productList.filter(item => {
            // checking rating
            if (item.rating >= 3) {
                // checking if item already exists in final array
                if (!finalList.some((finalItem) => item.id === finalItem.id)) {
                    return item;
                }
            }
        }
        )
        finalList = [...finalList, ...filteredList];
    }
    if (rating.two) {
        const filteredList = productList.filter(item => {
            // checking rating
            if (item.rating >= 2) {
                // checking if item already exists in final array
                if (!finalList.some((finalItem) => item.id === finalItem.id)) {
                    return item;
                }
            }
        }
        )
        finalList = [...finalList, ...filteredList];
    }
    if (rating.one) {
        const filteredList = productList.filter(item => {
            // checking rating
            if (item.rating >= 1) {
                // checking if item already exists in final array
                if (!finalList.some((finalItem) => item.id === finalItem.id)) {
                    return item;
                }
            }
        }
        )
        finalList = [...finalList, ...filteredList];
    }
    return finalList;
}

export { filterRating }