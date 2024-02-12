const initialState = {
    favList: {
      content: [],
    },
  };
  
  const mainReducer = (state = initialState, action) => {
    // Handle different actions with switch-case
    switch (action.type) {
      // Example case
      // case 'ADD_TO_FAVLIST':
      //   return { ...state, favList: { content: [...state.favList.content, action.payload] } };
      default:
        return state;
    }
  }

  export default mainReducer