import { Registration } from "./../interface/User";

export default function registration(state = {}, action: any) {
  switch (action.type) {
    case Registration.REQUEST:
      return { ...state, registration: Registration.REQUEST };
    case Registration.SUCCESS:
      return { ...state, registration: Registration.SUCCESS };
    case Registration.FAILURE:
      return { ...state, registration: Registration.FAILURE };
    default:
      return state;
  }
}
