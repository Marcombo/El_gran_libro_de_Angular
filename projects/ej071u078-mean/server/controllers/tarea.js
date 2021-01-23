
var mongoose = require('mongoose');
var Tarea = require('../models/tarea');

exports.list_all_tareas = function(req, res) {
  Tarea.find({}, function(err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
  });
};

exports.create_tarea = function(req, res) {
  var new_tarea = new Tarea(req.body);
  new_tarea.save(function(err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
  });
};

exports.read_tarea = function(req, res) {
  Tarea.findById(req.params.tareaId, function(err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
  });
};

exports.update_tarea = function(req, res) {
  Tarea.findOneAndUpdate({_id: req.params.tareaId}, req.body, {new: true}, function(err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
  });
};

exports.delete_tarea = function(req, res) {
  Tarea.remove({_id: req.params.tareaId}, function(err, tarea) {
    if (err) res.send(err);
    res.json({ message: 'Tarea eliminada correctamente' });
  });
};
