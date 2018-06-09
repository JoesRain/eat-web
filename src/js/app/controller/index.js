define(['./Base', '../model/index', 'text!template/index.html', '../lib'], function (Base, model, component, lib) {
  var c2 = new Base('Controller 2');
  c2.setModel(model);
  c2.setComponent(component);    
  c2.render("#index-template");
});