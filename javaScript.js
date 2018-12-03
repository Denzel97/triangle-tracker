var triangle = function(){
  var sideA = document.getElementById('a').value;
  var sideB = document.getElementById('b').value;
  var sideC = document.getElementById('c').value;
  var response = document.getElementById('response');




   if (sideA === sideB && sideB === sideC) {
    response.textContent = 'Equilateral Triangle'
  }
  else if(sideA === sideB || sideB === sideC || sideA === sideC) {
    response.textContent = 'Isosceles'
  }
  else if((sideA + sideB) > sideC || (sideB + sideC) > sideA || (sideB + sideC) > sideA && sideA !== sideB && sideA !== sideC && sideB !== sideC){
    response.textContent = 'Scalene'
  }else if ( (sideA => sideB+sideC) || (sideB => sideA+sideC) || (sideC =>sideA+sideB )){
    response.textContent = 'Not a triangle'
}

};
