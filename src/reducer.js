
const intialState = {
    input :'',
    putItems: [],
    
} 
export  const reducer = (state=intialState , action) =>{
    switch (action.type) {
        case 'change' :
                  return {...state, input :action.payload}
        case 'add' : 
                return  {...state,putItems :[...state.putItems, {Text:state.input}],input:''}
        case 'complete' : 
                return {...state,putItems: state.putItems.map((el,id)=> id===action.payload ? {...el, isX  : ! el.isX }:el) }   
        case 'delete' : 
                return  {...state,putItems: state.putItems.filter((id)=> id!==action.payload ) }   

        case 'UPDATE' :
             return {...state,putItems: state.putItems.map((el,id)=>
            id===action.payload.id ?
            {...el, Text:action.payload.task }: el)}
        
        
        default : return state }
}



    
