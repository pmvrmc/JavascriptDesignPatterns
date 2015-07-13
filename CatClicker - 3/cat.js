var Cat = function(name, image){
  this.name = name;
  this.image = image;
  this.nclicks = 0;
}

Car.prototype.click = function () {
  this.nclicks++;
};

var clicksCat1 = 0;
var clicksCat2 = 0;
function catClicker(catName){
  cats.
  if(catName ==="cat1"){
    clicksCat1++;
    document.getElementById('nClicksCat1').innerHTML = clicksCat1;
  } else if(catName ==="cat2"){
    clicksCat2++;
    document.getElementById('nClicksCat2').innerHTML = clicksCat2;
  }
}
