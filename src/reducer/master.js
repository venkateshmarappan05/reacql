 import { USER_LIST} from 'action/master';

const initialState = {
 userList:[]
}

export default function master(state = initialState, action = {}) {
  switch (action.type) {
      case USER_LIST:
        return {...state, userList: action.data }
    default:
      return state;
  }
}