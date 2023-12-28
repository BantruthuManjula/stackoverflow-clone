const usersReducer=(states=[],action)=>{
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;
             default:
            return states;
            case 'UPDATE_CURRENT_USER':
                return states.map((state)=>state._id===action.payload._id?action.payload:state)
    }
}
export default usersReducer;
