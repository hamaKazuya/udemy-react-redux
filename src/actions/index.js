import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// 基本的にobjectを返さないといけないが
// redux-thunkがfuncを返せるようにしてくれる
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response }) // reducerにわたす
}

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events/${QUERYSTRING}`, values)
  dispatch({ type: CREATE_EVENT, response }) // reducerにわたす
}

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: DELETE_EVENT, id }) // reducerにわたす
}
