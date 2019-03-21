import { ADD, DIS } from "../action/num-action";
const initialState = {
    count: 0
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD: {
            console.log('走到了之类');
            console.log(state,action.payLoad);
            return {
                count: state.count + action.payLoad
            }
        }
        case DIS: {
            return {
                count: state.count - action.payLoad
            }
        }
        default:
            return state;
    }
}