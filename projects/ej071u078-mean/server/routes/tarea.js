
module.exports = function(app){

    var tareaCtrl = require('../controllers/tarea');

    app.route('/api/tareas')
      .get(tareaCtrl.list_all_tareas)
      .post(tareaCtrl.create_tarea);

    app.route('/api/tareas/:tareaId')
      .get(tareaCtrl.read_tarea)
      .put(tareaCtrl.update_tarea)
      .delete(tareaCtrl.delete_tarea);
}
