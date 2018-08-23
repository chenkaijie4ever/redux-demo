document.getElementById('addBtn').onclick = addTask
document.getElementById('removeBtn').onclick = removeTask
document.getElementById('clearBtn').onclick = clearTask


const initialState = {
    taskCount: 0
}

function actionHandler(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            state.taskCount = state.taskCount + 1;
            return state;
        case 'REMOVE_TASK':
            state.taskCount = state.taskCount - 1;
            return state;
        default:
            console.log('有人要做骚操作')
            return state;
    }
}

function createStore(actionHandler) {

    let listeners = []
    const subscribe = function (listener) {
        listeners.push(listener)
    }

    let state = undefined
    const getState = function () {
        return state
    }

    const dispatch = function (action) {
        state = actionHandler(state, action)
        listeners.forEach(function (listener) {
            listener()
        })
    }

    // 默认执行一次做初始化
    dispatch({})

    return { getState, dispatch, subscribe }
}

const store = createStore(actionHandler)
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
