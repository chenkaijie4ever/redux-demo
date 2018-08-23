document.getElementById('addBtn').onclick = addTask
document.getElementById('removeBtn').onclick = removeTask
document.getElementById('clearBtn').onclick = clearTask


const appState = {
    taskCount: 0
}

function render(appState) {
    const content = document.getElementById('content')
    let taskCount = appState.taskCount
    content.innerHTML = '当前有需求：' + taskCount + '个'
}

function addTask() {
    appState.taskCount = appState.taskCount + 1
    render(appState)
}

function removeTask() {
    appState.taskCount = appState.taskCount - 1
    render(appState)
}

function clearTask() {
    appState.taskCount = 0
    render(appState)
}
