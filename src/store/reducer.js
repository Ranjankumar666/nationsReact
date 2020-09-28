const initialState = {
  codeToName: null
}

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case 'SEND':
      return({...state, codeToName: action.data})

    default:
      return state;
  }
}

export default reducer;
