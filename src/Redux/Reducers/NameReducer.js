const addedToCart = (which = {} ,action) => {
    switch(action.type) {
        case "GETNAME" : 
            return which = action.product
        default:
            return {}
    }
}
export default addedToCart