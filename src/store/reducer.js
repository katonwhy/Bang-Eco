const initialState = {
    location: 'jakarta'
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SAVE_LOCATION':
            return {
              ...state,
              location: actions.payload
            }
    
        default:
            return state
    }
  }
  
  export default reducer