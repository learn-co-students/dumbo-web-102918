export const addWizard = (wizardObj) => {
  return {type: "ADD_WIZARD", payload: wizardObj}
}

export const removeWizard = (wizardName) => {
  return {type: "REMOVE_WIZARD", payload: wizardName}
}
