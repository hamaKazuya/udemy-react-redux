import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENT,
  READ_EVENTS,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case UPDATE_EVENT:
    case CREATE_EVENT:
    case READ_EVENT:
      const data = action.response.data
      // FIXME: [Warning]Cannot update a component from inside the function body of a different component.
      return { ...events, [data.id]: data}

    case READ_EVENTS:
        // _.mapKeys(obj, 'targetKey')べんりや
        return _.mapKeys(action.response.data, 'id')
  
      case DELETE_EVENT:
      console.log(action.id)
      delete events[action.id]
      return {...events}
    default:
      return false;
  }
}
