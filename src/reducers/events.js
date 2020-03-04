import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // _.mapKeys(obj, 'targetKey')べんりや
      return _.mapKeys(action.response.data, 'id')

    default:
      return events;
  }
}
