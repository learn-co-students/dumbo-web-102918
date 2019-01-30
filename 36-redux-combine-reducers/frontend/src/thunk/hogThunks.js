import { loadHogs } from '../actions/hogActions'

export const getHogs = () => dispatch => {
  return fetch('http://localhost:3000/hogs')
    .then(r => r.json())
    .then(hogData => dispatch(loadHogs(hogData)))
}
