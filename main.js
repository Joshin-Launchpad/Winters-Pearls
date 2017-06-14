//Note: jQuery is allowed but not required.

var app = app || {};
app.common = {
  setImageAttributes: function() {
    alert('set attributes now working');
    let imgAttr = {
      
    }
  },
  bindUIelements() {
    // this.setImageAttributes();
  },
  init: function() {
    this.bindUIelements();
  }
}

window.onload = app.common.init();

// let img = document.getItemById('#imgbutton');
// img.addEventListener('click', function () {
//   this.setImageAttributes();
// })
