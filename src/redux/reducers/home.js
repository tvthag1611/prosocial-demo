import * as Actions from '../action-types'

const STATE_INIT = {
  user: null,
  isLogged: false,
  users: [],
}

export default (state = STATE_INIT, { type, payload }) => {
  switch (type) {
    case Actions.IS_LOGGED:
      return { ...state, isLogged: payload }
    case Actions.USER_INFO:
      return { ...state, user: payload }
    case Actions.GET_ALL_USERS_SUCCESS:
      return { ...state, users: payload }
    case Actions.GET_ALL_USERS_FAIL:
      return { ...state, users: [] }
    default:
      return state
  }
}
