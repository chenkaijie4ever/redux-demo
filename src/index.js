document.getElementById('addBtn').onclick = addTask
document.getElementById('removeBtn').onclick = removeTask
document.getElementById('clearBtn').onclick = clearTask


const appState = {
    taskCount: 0
}

function actionHandler(state, action) {
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

function createStore(state, actionHandler) {

    let listeners = []
    const subscribe = function (listener) {
        listeners.push(listener)
    }

    const getState = function () {
        return state
    }

    const dispatch = function (action) {
        state = actionHandler(state, action)
        listeners.forEach(function (listener) {
            listener()
        })
    }

    return { getState, dispatch, subscribe }
}

const store = createStore(appState, actionHandler)
store.subscribe(function () {
    render()
})
store.subscribe(function () {
    console.log('Leader发了一封邮件，产品、开发 知道需求状态更新了')
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
