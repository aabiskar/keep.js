#Keep.js

##What is it for?
Keep was created to remove all the shit that may be added to your beautiful objects.

It extends Object via Object.prototype, so you can call it directly on your object.

It supports object attributes, nested attributes, and arrays of objects. You can nest as deep as you want. Like an object that has a property that's an array of objects, and those object have a property that's an array of objects. Damn, that's a lot of objects.

##Keep specific attributes

	var myObject = {
		somethingIWant: 'keep me!',
		shit: 'some shit'
	};
	
	myObject.keep({
		somethingIWant: true
	});
	
	console.log(myObject);
	// {
	//     somethingIWant: 'keep me!'
	// }

##Keep nested objects

	var myObject = {
		stay: 123,
		nested: {
			keepMe: 'keep me',
			removeMe: 'remove me'
		},
		shit: 'some shit'
	};
	
	myObject.keep({
		nested: {
			keepMe: true
		},
		stay: true
	});
	
	console.log(myObject);
	// {
	//     stay: 123,
	//     nested: {
	//         keepMe: 'keep me'
	//	   }
	// }

##Keep attributes on arrays of objects

	var myObject = {
		stay: 123,
		nested: [{
			keepMe: 'keep me2',
			removeMe: 'remove me2'
		}, {
			keepMe: 'keep me2',
			removeMe: 'remove me2'
		}],
		shit: 'some shit'
	};
	
	myObject.keep({
		nested: [{
			keepMe: true
		}],
		stay: true
	});
	
	console.log(myObject);
	// {
	//		stay: 123,
	//		nested: [{
	//			keepMe: 'keep me'
	//		}, {
	//			keepMe: 'keep me2'
	//		}]
	// }

##License
The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
