
export const changeHandle=(payload)=>{
    return{
type: 'change' , payload 
}}

// action add input

export const addHandle=()=>{
    return{
type: 'add' 
}}

// Action on click to complete  : line-through the text

export const handleCompleted=(payload) => {
    return{
        type : 'complete' , payload
    }
}

// Action to delete items  

export const deleteText=(payload) => {
    return{
        type : 'delete' , payload
    }
}

// Update
export const updatetask=(payload) => {
    return{
        type : 'UPDATE' , payload
    }
}

// 
export const edit = (payload) => {
    return {
        type: "EDIT", payload
    }
}



