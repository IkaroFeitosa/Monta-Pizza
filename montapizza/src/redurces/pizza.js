const inital_state = {
    pg: 'Home'
}

export default function pizza(state = inital_state,action){

    
    if(!action.data)
         return state;

         switch(action.type){
            case 'ALTER_PAGE':
                return {...state,pg:action.data}
            default:
                return state;
         }
   
}