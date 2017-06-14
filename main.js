//Note: jQuery is allowed but not required.

var app = app || {};
app.common = {
  setImageAttributes: function() {
    alert('set attributes now working');
  },
  bindUIelements() {
    // alert('now working');
  },
  init: function() {
    this.bindUIelements();
  }
}

window.onload = app.common.init();
