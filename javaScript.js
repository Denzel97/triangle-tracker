function triangle(){
  var sideA = document.getElementById('a').value;
  var sideB = document.getElementById('b').value;
  var sideC = document.getElementById('c').value;
  var response = document.getElementById('response');
}

  if(sideA>sideB + sideC || sideB>sideA + sideC || sideC>sideA +sideB){
    response.textContent = 'Not a triangle';
  }
  else{
    if(sideA==sideB && sideB==sideC){
      response.textContent = 'Equilateral triangle';
    }
  }

    else if(sideA==sideB || sideA==sideC || sideB==sideC){
      response.textContent = 'Isosceles';
    }

    else {
      response.textContent = 'Scalene';
    }
