import { createStore } from 'redux'

document.getElementById('addBtn').onclick = addTask
document.getElementById('removeBtn').onclick = removeTask
document.getElementById('clearBtn').onclick = clearTask


const initialState = {
    taskCount: 0
}

function reducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case 'ADD_TASK':
            // state.taskCount = state.taskCount + 1;
            newState = {...state, taskCount: state.taskCount + 1}
            return newState;
        case 'REMOVE_TASK':
            // state.taskCount = state.taskCount - 1;
            newState = {...state, taskCount: state.taskCount - 1}
            return newState;
        default:
            console.log('有人要做骚操作')
            return state;
    }
}

const store = createStore(reducer)
store.subscribe(function () {
    render()
})

function render() {
    const content = document.getElementById('content')
    let taskCount = store.getState().taskCount
    content.innerHTML = '当前有需求：' + taskCount + '个'
}

function addTask() {
    let action = {type: 'ADD_TASK'}
    store.dispatch(action)
}

function removeTask() {
    let action = {type: 'REMOVE_TASK'}
    store.dispatch(action)
}

function clearTask() {
    let action = {type: 'CLEAR_TASK'}
    store.dispatch(action)
}
