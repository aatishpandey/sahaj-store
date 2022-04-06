const filterCategory = (productList, category) => {
    let finalList = [];
    if (category.monitor === false && category.headphone === false && category.keyboard === false) {
        return productList;
    }
    if (category.monitor) {
        const filteredList = productList.filter(item => {
            // checking rating
            if (item.category === "monitor") {
                // checking if item already exists in final array
                if (!finalList.some((finalItem) => item.id === finalItem.id)) {
                    return item;
                }
            }
        }
        )
        finalList = [...finalList, ...filteredList];
    }
    if (category.keyboard) {
        const filteredList = productList.filter(item => {
            // checking rating
            if (item.category === "keyboard") {
                // checking if item already exists in final array
                if (!finalList.some((finalItem) => item.id === finalItem.id)) {
                    return item;
                }
            }
        }
        )
        finalList = [...finalList, ...filteredList];
    }

    if (category.headphone) {
        const filteredList = productList.filter(item => {
            // checking rating
            if (item.category === "headphone") {
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

export { filterCategory };