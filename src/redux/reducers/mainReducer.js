const initialState = {
    favList: {
      content: [],
    },
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'ADD_TO_FAVLIST':
        let newFavList = [...state.favList.content]
        const alreadyExists = newFavList.find(item => item._id === action.payload._id)
                if (!alreadyExists) {
            newFavList.push(action.payload)
        }
      return {favList: {content: newFavList}}
      case 'REMOVE_FROM_FAVLIST':
        let newFavList2 = [...state.favList.content]
        for (let index = 0; index < newFavList2.length; index++) {
          if(newFavList2[index]._id === action.payload){
            newFavList2.splice(index, 1)
          }
        }
      return {favList: {content: newFavList2}}
      default:
        return state;
    }
  }

  export default mainReducer