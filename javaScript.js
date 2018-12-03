function triangle(){
  var sideA = document.getElementById('a').value;
  var sideB = document.getElementById('b').value;
  var sideC = document.getElementById('c').value;
  var return = document.getElementById('return')



   if (sideA === sideB && sideB === sideC) {
    return.innerHTML = 'Equilateral Triangle'
  }
  else if(sideA === sideB || sideB === sideC || sideA === sideC) {
    return.innerHTML = 'Isosceles'
  }
  else if((sideA + sideB) > sideC || (sideB + sideC) > sideA || (sideB + sideC) > sideA && sideA !== sideB && sideA !== sideC && sideB !== sideC){
    return.innerHTML = 'Scalene'
  }else if ( (sideA => sideB+sideC) || (sideB => sideA+sideC) || (sideC =>sideA+sideB )){
    return.innerHTML = 'Not a triangle'
    // result.innerHTML = "Not a triangle <img src='images/see-no-evil.png'>"

}

};
