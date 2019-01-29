import { editHobbit } from '../actions/hobbitActions'

export const patchHobbit = (hobbit) => {
    return function (dispatch) {
       // dispatch({ type: 'LOADING_HOBBIT' })
     fetch(`http://localhost:3000/hobbits/${hobbit.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hobbit)
      })
      .then(r => r.json())
      .then(editedHobbit => {
        // dispatch({ type: 'HOBBIT_LOAD_COMPLETE'})
        dispatch(editHobbit(editedHobbit))
      })
  }
}
