const reset_users = (state) =>{
    return {...state, users: []};
}

const remove_user = (state, action) => {
    const remaining_users = state.users.filter(user=>user!=action.payload.user)
    return {...state , users:[...remaining_users] }
}


export {reset_users, remove_user}