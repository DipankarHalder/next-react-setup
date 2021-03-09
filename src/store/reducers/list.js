// state for lists
const initState = {
  isLoading: false,
  isError: false,
  heading: "User List page",
  lists: [],
};

// action type
const LIST_ISLOADING = 'listIsLoading';
const LIST_LOADEDDATA = 'listLoadedData';
const LIST_LOADFAILED = 'listLoadFailed';

// action creator
export const getListLoading = () => {
  return {
    type: LIST_ISLOADING
  };
}
export const getListLoadedData = (description) => {
  return {
    type: LIST_LOADEDDATA,
    payload: description
  };
}
export const getListFailed = (errorMessage) => {
  return {
    type: LIST_LOADFAILED,
    payload: errorMessage
  };
}

// list reducer
export default function listReducer(state = initState, {type, payload}) {
  if(type === LIST_ISLOADING)
    return {
      ...state,
      isLoading: true,
    }
  else if(type === LIST_LOADEDDATA)
    return {
      ...state,
      isLoading: false,
      lists: payload
    }
  else if(type === LIST_LOADFAILED)
    return {
      ...state,
      isError: true,
    }
  return state;
};