#JavaScript Pile

A collection of functions written for practice. I tried to separate some
functions which stand alone as a project and could potentially be useful
at a later time to make them easier to find.


###play.js
a file that has a hodge podge of functions some recursion etc	this one gets edited regularly.  I keep adding functions

###permutations.js
a basic function to permute using recursion.  Did this some time	ago and definitely needs revisiting

###phoneNumToText.js
was trying to get a list of text strings from a phone	number.  Works but you het a huge list so beware

###recursiveTrees.js
recursive function to create a branching tree, can adjust the number of iterations and length of the arms on initial tree

###sierpinski.js
recursively generate the Sierpinski triangles.  Can adjust the number of iterations.

###convexHull.js
calculates the smallest boundary of a group of points in a plane.  I implemented Grahams solution orignally published in  the 1970's but I found on Wikipedia

###towersOfHanoi.js
recursively solves the Towers of Hanoi porblem.  Have a funcion that returns a table of moves and a function that prints the moves directly on the screen.

###flattenObject.js
a function that takes a hierarchical map of properties and converts it to a single, flattened map, with the different levels separated by a forward slash ('/').

###romanNumeral.js
Roman Numeral Converter
two functions to convert a given number into a roman numeral. One is iterative the other recursive.  Iterative makes more intuitive sense to me.

###deepEquals.js
a function that, given two objects, returns whether or not the two are deeply equivalent--meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

###anagrams.js
a function that given a string returns all anagrams.  Basically all permutaions of the string are retruned in an array.

###binarySearch.js
given an ordered list and an item return the index of the item in that list. Do this recursively.

###isPrime.js
a function that determines if a number is prime.  1 is treated as not prime.

###smallestCommonMultiple.js
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order.

###tagCount.js
a function that recursively checks all tags of the document and counts the number of times a given tag appears. The tag and DOM to be checked are inputs.

###recursiveMultiply.js
a recursive function to multiply two positive integers without using the * operator.  You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.

###makeHtmlPage.sh
a shell script to create an html page with a script tag for testing .js files.

###fibonacci.js
three functions to calculate fibonacci numbers.  One iterative and two recursive (one of the recursive ones has caching).  fibonacci sequence starts: 1, 1, 2, 3, 5,.... so 0th element is 1, 1st element is 1, 2nd is 2, etc found using formula f(n) = f(n-1) + f(n-2).

