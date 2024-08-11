import {useReducer} from 'react'
import { remove_user, reset_users } from './reducers/user-reducer';


function AppReducer() {
    const initialeAppState = {
        users : ['users'],
        map: null, 
    };
    
    const reducer = (state, action)=>{
        if(action.type === 'add_user'){
            return {...state , users:[...state.users, action.payload] }
        }
        if(action.type === 'remove_user'){
            return remove_user(state, action)
        }
        if(action.type=== 'reset_users'){
            return reset_users(state);
        }
        if(action.type === 'init_map'){
            return { ...state , map: action.payload }
        }
        
        return state;
    }
    const [state, dispatch] = useReducer(reducer, initialeAppState);
    return [state, dispatch];
}
  
export default AppReducer
  