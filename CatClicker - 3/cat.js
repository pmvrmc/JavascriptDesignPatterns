var Cat = function(name, image){
  this.name = name;
  this.image = image;
  this.nClicks = 0;
}

Cat.prototype.click = function () {
  this.nClicks++;
};
