function is_day(){
  var a = document.querySelector('input').value
  if(a=="day"){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    document.querySelector('input').value = "night";
  }
  else{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('input').value = "day";
  }
}
