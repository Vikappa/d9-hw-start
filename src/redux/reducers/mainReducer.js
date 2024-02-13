import { ADD_TO_FAVLIST } from '../action';

const initialState = {

      content: [],

  };
  
  const favCompanyReducer = (state = initialState, action) => {
    switch (action.type) {

      case ADD_TO_FAVLIST:
        console.log(state)
        let newFavList = [...state.content]
        const alreadyExists = newFavList.find(item => item.company_name === action.payload.company_name)
                if (!alreadyExists) {
            newFavList.push(action.payload)
        }
      return {content: newFavList}
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

  export default favCompanyReducer