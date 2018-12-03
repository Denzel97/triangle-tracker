var triangle = function(){
  var sideA = document.getElementById('a').value;
  var sideB = document.getElementById('b').value;
  var sideC = document.getElementById('c').value;
  var response = document.getElementById('response');


  if(sideA < sideB + sideC || sideB < sideA + sideC || sideC < sideA +sideB){

  if (sideA === sideB && sideB === sideC) {
    response.textContent = 'Equilateral Triangle'
  }
  else if(sideA === sideB || sideB === sideC || sideA === sideC) {
    response.textContent = 'Isosceles'
  }
  else{
    response.textContent = 'Scalene'
  }
}else{
  response.textContent = 'Not a triangle'
}
}
