# {Triangle Tracker}
#### {By DENZEL OUMA}
## Description
This is a webpage that allows users to enter three sides of a triangle and checks whether the triangle is an equilateral triangle, isosceles triangle, scalene triangle or not a triangle at all. It does not allow users to input non-numerical value.}, {30/11/2018}
## Setup/Installation Requirements
* git must be installed in your computer, if not use the following command in your terminal ($ sudo apt install git-all)
* Then open another page on terminal
* Use this command ($ git clone https://denzel97.github.io/triangle-tracker/)
* This will clone the repository to your local folder

## BDD
| Behaviour     | Input           | Output |
| :------------ |:---------------:| -----:|
| Nothing typed on the filled      | _,_,_ | not a number |
| If only one field is filled      | 2,_,_      |   not a number |
| If two fields are filled | 2,4,_     |    not a number |
| If all fields are not equal   |  2,3,4  | Scalene triangle  |
| If two sides are equal  | 5,5,8 | Isosceles triangle  |
| If three sides are equal  | 3,3,3 | Equilateral triangles |
| If the sum of two sides is <= third | 4,4,8 | not a triangle  |
| If one enters a non-numerical value  |  w,3,4 | not a number  |

## Known Bugs
* Not aware of any bugs so far, please let me know if you run into any at the provided contacts below
## Technologies Used
* HTML
* CSS
* JavaScript
* Git
## Support and contact details
* You can find me at denzelwash97@gmail.com or Denzel Washington .O. in github

### License
*{Determine the license under which this application can be used.  See below for more details on licensing.}*
Copyright (c) {2018} Denzel
