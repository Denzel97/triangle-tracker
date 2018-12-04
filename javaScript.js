function triangle(){
  var sideA =parseInt(document.getElementById('a').value);
  var sideB =parseInt(document.getElementById('b').value);
  var sideC =parseInt(document.getElementById('c').value);
  var response = document.getElementById('response');
  var triangles = ["Equilateral triangl","Isosceles triangle","Scalene triangle"];


if(sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC >sideB){
  if (sideA==sideB && sideB==sideC) {
    response.innerHTML = 'Equilateral Triangle <img src="images/ok.png">'
  }
  else if(sideA!=sideB && sideB!=sideC && sideA!=sideC) {
    response.innerHTML = 'Scalene <img src="images/wink.png">'
  }
  else {
    response.innerHTML = 'Isosceles <img src="images/thumbs-up.png">'
  }
}
else if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
    response.innerHTML = 'Not a number <img src="images/hear-no-evil.png">'
  }else{
    response.innerHTML = 'Not a triangle <img src="images/see-no-evil.png">'
}
function reload(){
  location.reload();
}
}
