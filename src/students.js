import {createStore} from 'redux'

//initial state
 const studentState = {
  students:[
    {'id':1, 'name':'Opeyemi', 'score':10, 'nationality':'Nigeria'},
    {'id':2, 'name':'Oyetunde', 'score':15, 'nationality':'Ghana'},
    {'id':3, 'name':'Oyekunle', 'score':12, 'nationality':'Namibia'}
  ]
 }

 //create action
 const addStudent = (id, name, score, nationality)=>{
  return {
    type: 'ADD_STUDENT',
    record:{id, name, score, nationality}
  }
 }

 //create a delete action
const deleteStudent = (id)=>{
   return{
     type: 'DELETE_STUDENT',
     record:{id}
   }
  }
  //create an update action
  const updateStudent = (id, name, score, nationality)=>{
   return {
   type: 'UPDATE_STUDENT',
   record:{id, name, score, nationality}
   }
  }

//reducer
 const studentReducer = (state=studentState, action)=>{
   if (action.type === 'ADD_STUDENT') {
     return{
       ...state,
       students:[...state.students, action.record]
     }
   }
   if (action.type === 'DELETE_STUDENT') {
     return{
         ...state,
         students:state.students.filter(student=>student.id !== action.record.id)
       }
     }
     if (action.type === 'UPDATE_STUDENT') {
       return{
           ...state,
           students:state.students.map(student=>{
             if (student.id === action.record.id) {
               return action.record;
             }else {
               return student;
             }
           })
         }
       }

   return state;
}

//store
const store = createStore(studentReducer);

store.dispatch(addStudent(4, 'Wale', 19, 'Cameroon'));
store.dispatch(addStudent(5, 'Tanko', 17, 'Niger'));
store.dispatch(deleteStudent(4));
store.dispatch(updateStudent(5, 'Lola', 20, 'Turkey'));

export default store
