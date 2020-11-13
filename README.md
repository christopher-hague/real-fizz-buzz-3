# Getting Started
Projects with `create-react-app` have out of the box support for React Testing Library. Clone the repo and run `npm install` via the terminal. Given the time constraint as listed in the guidelines, as well as that Part 3 has the broadest scope for the most comprehensive test coverage, testing resides only in this repo. The test suite can be run with `npm test`. Look to the code in `src/fizzBuzz` to see how Real FizzBuzz was implemented. Test files can be found in `src/tests`.

# Overview
The directions in Real FizzBuzz - Part 3 build upon the directions defined in [Part 1](https://github.com/christopher-hague/real-fizz-buzz-1) and [Part 2](https://github.com/christopher-hague/real-fizz-buzz-2). In additioon to filtering values based on their fizziness/buzziness/luckiness/etc. we will also render a report that indicates the number of fizzes/buzzes/luckys/etc. Given that, we can expect a range of 1-20 to render something like this:  

`1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz`  

`fizz: 4`  

`buzz: 3`  

`fizzbuzz: 1`  

`lucky: 2`  

`integer: 10`  


The app has been given a default range from 1-20 but is equipped to generate a new set of data for user input. Try it for yourself!