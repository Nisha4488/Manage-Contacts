
import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT } from './actions'


let initialState = []


export default (state = initialState, action) => {
  console.log('state ', state)
  console.log('action ', action)
  switch (action.type) {
    case ADD_CONTACT:
      let newContact = action.payload
      if(!newContact.id) {
        newContact.id = Date.now();
        return [...state, newContact]
      } else {
        const index = state.findIndex(contact => contact.id === newContact.id);
        console.log(' index ', index)
        state[index] = { ...newContact};
        return [...state]
      }

  case REMOVE_CONTACT:
  let id = action.payload
  const index = state.findIndex(contact => contact.id === id);
  const removedContact = state.splice(index,1);
  console.log('removedContact ', removedContact)
  return [...state]

    default:
      return state
  }
}
