const initialState = {
    favList: {
      content: [],
    },
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'ADD_TO_FAVLIST':
        console.log(state.favList.content)
        let newFavList = [...state.favList.content]
        newFavList.push(action.payload)
      return {favList: {content: newFavList}}
    
      default:
        return state;
    }
  }

  export default mainReducer