// import hogs from '../data/porkers_data'

const initialState = []

export default function hogReducer (hogsState = initialState, action) {
  console.log('IN HOG REDUCER', hogsState, action);
  switch(action.type) {
    case 'LOAD_HOGS' : {
      return action.payload
    }
    default:
      return hogsState
  }
}
