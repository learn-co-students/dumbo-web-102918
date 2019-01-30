import { editHobbit, loadHobbits } from '../actions/hobbitActions'

export const patchHobbit = (hobbit) => {
  return function (dispatch) {
   return fetch(`http://localhost:3000/hobbits/${hobbit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hobbit)
    })
      .then(r => r.json())
      .then(editedHobbit => {

        dispatch(editHobbit(editedHobbit))
      })
  }
}

export const getHobbits = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/hobbits/')
      .then(r => r.json())
      .then(hobbitList => dispatch(loadHobbits(hobbitList)))
      .catch(console.error)
  }
}
