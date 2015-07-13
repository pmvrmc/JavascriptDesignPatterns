var clicksCat1 = 0;
var clicksCat2 = 0;
function catClicker(catName){
  if(catName ==="cat1"){
    clicksCat1++;
    document.getElementById('nClicksCat1').innerHTML = clicksCat1;
  } else if(catName ==="cat2"){
    clicksCat2++;
    document.getElementById('nClicksCat2').innerHTML = clicksCat2;
  }
}
