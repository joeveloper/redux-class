import {createStore, combineReducers} from 'redux'

//create a student state
const studentState = {
 students:[
 {'id':1, 'name':'Opeyemi', 'score':10, 'nationality':'Nigeria'},
 {'id':2, 'name':'Oyetunde', 'score':15, 'nationality':'Ghana'},
 {'id':3, 'name':'Oyekunle', 'score':12, 'nationality':'Namibia'}
 ],
}
//create a teacher state
const teacherState = {
 teachers:[
 {'id':1, 'name':'Odunola', 'age':14, 'nationality':'England'},
 {'id':2, 'name':'Damilola', 'age':35, 'nationality':'Germany'},
 {'id':3, 'name':'Arike', 'age':22, 'nationality':'Egypt'}
 ]
}

//student reducer
const studentReducer = (state=studentState, action)=>{
 return state;
}

//teacher reducer
const teacherReducer = (state=teacherState, action)=>{
 return state;
}

//combine reducers
const collegeReducers = {studentReducer, teacherReducer}
const reducers = combineReducers(collegeReducers)

//store
const store = createStore(reducers)

export default store
