const buttonVisibility = (state = false, action) => {
    switch (action.type) {
        case 'BUTTON_VISIBLE':
            return !state
        default:
            return state
    } 
}

export default buttonVisibility