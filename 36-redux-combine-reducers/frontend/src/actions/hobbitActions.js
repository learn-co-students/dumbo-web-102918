export const selectHobbit = (hobbit) => ({ type: 'SELECT_HOBBIT', payload: hobbit })

export const editHobbit = (hobbit) => ({ type: 'EDIT_HOBBIT', payload: hobbit })

export const loadHobbits = (hobbits) => ({ type: 'LOAD_HOBBITS', payload: hobbits })
