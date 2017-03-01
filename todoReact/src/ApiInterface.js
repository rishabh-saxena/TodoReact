const api = {
  readTasks: function () {
    return fetch(`http://localhost:3427/read`, {method: 'get'})
  },
  writeTasks: function (message) {
    return fetch(`http://localhost:3427/write/${message}`, {method: 'post'})
  },
  deleteTasks: function (id) {
    return fetch(`http://localhost:3427/destroy/${id}`, {method: 'delete'})
  },
  updateTask: function (id, description, status) {
    const data = {
      status: status,
      task: description
    }
    return fetch(`http://localhost:3427/update/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export default api
