# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @myfootsasleep/lotide`

**Require it:**

`const _ = require('@myfootsasleep/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element in the array
* `tail`: return all but the first element in the array
* `middle`: returns the middle most elements of the array, if the array is even then it will return two items
* `flatten`: take an array with an array and flattens them into one array
* `countOnly`: takes an array of names and returns the amount a name was found in the array
* `letterPosition`: Should return where the position of the letter in the word we specify 
* `findKeyByValue`: returns the object of they key value we specify
* `eqObjects`: used to test if contents of two objects are the same or not
* `eqArrays`: used to test if the contents of two arrays are the same or not