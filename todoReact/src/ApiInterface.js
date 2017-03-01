const api = {
  readTasks: function () {
    return fetch(`http://localhost:3427/read`, {method: 'get'})
  },
  writeTasks: function (message) {
    return fetch(`http://localhost:3427/write/${message}`, {method: 'post'})
  },
  deleteTasks: function (id) {
    return fetch(`http://localhost:3427/destroy/${id}`, {method: 'delete'})
  }
}
export default api
