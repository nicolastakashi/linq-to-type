# Linq To Type
[![Build Status](https://travis-ci.org/nicolastakashi/linq-to-type.svg?branch=master)](https://travis-ci.org/nicolastakashi/linq-to-type)
[![Coverage Status](https://coveralls.io/repos/github/nicolastakashi/linq-to-type/badge.svg?branch=master)](https://coveralls.io/github/nicolastakashi/linq-to-type?branch=master)
[![TypeScript definitions on DefinitelyTyped](http://definitelytyped.org/badges/standard.svg)](http://definitelytyped.org)
[![npm version](https://badge.fury.io/js/linq-to-type.svg)](https://badge.fury.io/js/linq-to-type)

A library written entirely in typescript inspired Linq that exists in .NET.

Linq to type allows for the manipulation of data collections in the same way we do in C # using lambda expressions.

# Installing
```sh
$ npm install linq-to-type
```

# Usage
Add reference tag to your `index.d.ts`  file
``` sh
///<reference path="../node_modules/linq-to-type/src/lib.es6.d.ts" />
```

Add `linq-to-type.js` to your `index.html` file
``` sh
<script src="./node_modules/linq-to-type/src/linq-to-type.js"></script>
```
# Features

| Feature               | Implemented           | Not Implemented  |
| ----------------------|:---------------------:|:----------------:|
|Aggregate              |x                      |                  |	
|All                    |x                      |                  |	
|Any                    |x                      |                  |	
|Average	              |x                      |                  |	
|Concat		              |                       |x                 |
|Contains	              |x                      |                  |	
|Count	                |x                      |                  |	
|DefaultIfEmpty	        |                       |x                 |
|Distinct	              |x                      |                  |	
|ElementAt	            |x                      |                  |	
|ElementAtOrDefault		  |                       |x                 |
|Except	                |x                      |                  |	
|First	                |x                      |                  |	
|FirstOrDefault	        |x                      |                  |	
|ForEach		            |                       |x                 |
|GroupBy		            |x                      |                  |
|GroupJoin		          |                       |x                 |
|IndexOf		            |                       |x                 |
|Intersect		          |                       |x                 |
|Join		                |                       |x                 |
|Last	                  |x                      |                  |	
|LastOrDefault		      |                       |x                 |
|Max	                  |x                      |                  |	
|Min	                  |x                      |                  |	
|OrderBy		            |                       |x                 |
|OrderByDescending		  |                       |x                 |
|ThenBy		              |                       |x                 |
|ThenByDescending		    |                       |x                 |
|Remove	                |x                      |                  |	
|RemoveAll	            |x                      |                  |	
|RemoveAt	              |x                      |                  |	
|Reverse	              |                       |x                 |
|Select	                |x                      |                  |	
|SelectMany		          |                       |x                 |
|SequenceEqual		      |                       |x                 |
|Single	                |x                      |                  |	
|SingleOrDefault	      |x                      |                  |	
|Skip		                |                       |x                 |
|SkipWhile		          |                       |x                 |
|Sum	                  |x                      |                  |	
|Take		                |                       |x                 |
|TakeWhile		          |                       |x                 |
|ToLookup		            |                       |x                 |
|Union		              |                       |x                 |
|Where	                |x                      |                  |	
|Zip		                |                       |x                 |

# Demo
![alt text](https://s22.postimg.org/qvhio5yap/linq_to_type_readme.png "Linq to type example")

