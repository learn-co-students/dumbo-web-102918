import wizards from './wizards'

const initialState = {
  wizards: wizards,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WIZARD":
      let newWizardArray = [...state.wizards, action.payload]
      return {...state, wizards: newWizardArray}

    case "REMOVE_WIZARD":
      let filteredWizards = state.wizards.filter(wizard => wizard.name !== action.payload)
      return {...state, wizards: filteredWizards}

    default:
      return state
  }
}

export default reducer
