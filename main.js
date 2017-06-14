//Note: jQuery is allowed but not required.

window.onload = app.common.init();

var app = app || {};
app.common = {
  setImageAttributes: function() {
    alert('set attributes now working');
  },
  bindUIelements() {
    alert('now working');
  },
  init: function() {
    this.bindUIelements();
  }
}
