import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./../actions/User";

export default function registration(state = {}, action: any) {
  console.log(state);
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, user: action.user };
    case REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
