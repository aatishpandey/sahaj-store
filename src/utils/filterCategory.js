const filterCategory = (productList, category) => {
    if (category.monitor === false && category.headphone === false && category.keyboard === false) {
        return productList;
    }
    if (category.monitor) {
        return productList.filter(item => item.category === "monitor")
    }
    if (category.keyboard) {
        return productList.filter(item => item.category === "keyboard")
    }

    if (category.headphone) {

        return productList.filter(item => item.category === "headphone")
    }

}

export { filterCategory };