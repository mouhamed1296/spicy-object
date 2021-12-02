# spicy-object :heart: :boom: :rocket:
[![mouhamed1296 - spicy-object](https://img.shields.io/static/v1?label=mouhamed1296&message=spicy-object&color=blue&logo=github)](https://github.com/mouhamed1296/spicy-object "Go to GitHub repo")
[![stars - spicy-object](https://img.shields.io/github/stars/mouhamed1296/spicy-object?style=social)](https://github.com/mouhamed1296/spicy-object)

***
___
## Table Of Contents 📑
- [🟢 Spicy Object](#spicy-object)
  * [Table Of Contents 📑](#table-of-contents---)
  * [💨 Description](#description)
  * [📥 Installation](#installation)
  * [🤔 Usage](#usage)
  * [✨ Methods](#methods)
    + [➤ size](#-size)
    + [➤ isEmpty](#-isEmpty)
    + [➤ ToMap](#-toMap)
    + [➤ getFirstEntry](#-getFirstEntry)
    + [➤ getLastEntry](#-getLastEntry)
    + [➤ getEntryByIndex](#-getEntryByIndex)
    + [➤ getEntryByKey](#-getEntryByKey)
    + [➤ getEntryByPath](#-getEnryByPath)
    + [➤ slice](#-slice)
    + [➤ filter](#-filter)
    + [➤ map](#-map)
    + [➤ forEach](#-forEach)
    + [➤ freeze](#-freeze)
    + [➤ extract](#-extract)
    + [➤ includes](#-includes)
  * [Contributing ❤](#contributing-)
  * [Issue Reporting](#issue-reporting)
  * [Author](#author)
  * [License](#license)

___

## Description

**Spicy-Object** is a TS/JS [NPM](http://npmjs.com/) Package to enhance javascript Object capabilities by adding a bunch of methods that help manipulate them easily.

## Installation

To use this library you need to install it using :
```
npm install spicy-object --save
//or
npm i spicy-object --save
```
or:
```
yarn add spicy-object
```

## Usage
After installation you need to import the library using :
```js
import { _Object } from "spicy-object"
```
A basic usage would be to test if an object is empty
```js
let myObject = {}
console.log(_Object(myObject).isEmpty())

//expected output
true
```
For further usage please go to the next section.
## Methods

### ➤ size
This is not a method this is an attribute that allow you to get the size of an object


**<span style="color: orange"> Syntax : </span>**
```js
_Object(yourObject).size
```
**<span style="color: green"> use case : </span>**

```js
const yourObject = {/*object entries*/}
const result = _Object(yourObject).size
console.log(result)

//expected output
0
```

### ➤ isEmpty
This method help us determine whether an object is empty or not.

**<span style="color: orange"> Syntax : </span>**
```js
_Object(yourObject).isEmpty()
```
**<span style="color: green"> use case : </span>**

```js
const yourObject = {/*object entries*/}
const result = _Object(yourObject).isEmpty()
console.log(result)

//expected output
true
```
**For simplicity to illustrate a use case of following methos those Object will be used**

```js
const userInfo = {
    name:"John",
    age:30,
    car:null,
    job: "Developer",
    address: "Dakar",
    interest: {
      music: [
        "rnb",
        "rap",
        {
          drill: ["uk", "sn", "us"]
        }
      ],
      sports: ["football", "basketball"]
    }
}

//This could be returned by a backend
const users = {
    0:{
      name:"John",
      age:30,
      car:null,
      job: "Developer",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap"],
        sports: ["football", "basketball"],
        food: [
          {
            senegal: {0:"yassa", 1:"mafé"},
            mali: ["yassa", "mafé", "jolof rice"]
          },
          {
            usa: ["burger", "nuggets", 
              [
                {jfr:["jfr_sn", "jfr_ng"]}
              ]
            ]
          },
          {
            italia: ["pizza", "peperoni"]
          }
        ]
      }
    },
    1:{
      name:"Jane",
      age:20,
      car:null,
      job: "attorney",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap"],
        sports: ["football", "basketball"],
        language: ["deutch", "english"]
      }
    },
    2:{
      name:"Moussa",
      age:26,
      car:null,
      job: "plice officer",
      address: "Dakar",
      interest: {
        music: ["rnb", "rap", "trap"],
        sports: ["basketball", "handball"],
        countries: {
          Africa: ["Senegal", "Rwanda", "Morroco"],
          Europe: ["England", "Russia"],
          Asia: ["China", "Saudi Arabia", "Palestine"],
          America: ["Brasil", "Mexico", "USA"],
          Oceania: ["Australia"]
        }
      }
    }
}
```

### ➤ toMap
This method allow you to convert your object to a map.

**<span style="color: orange"> Syntax : </span>**

```js
_Object(yourObject).toMap()
```

**<span style="color: green"> use case : </span>**

```js
const myMap = _Object(userInfo).toMap()

console.log(myMap)

//expected output
{ 
    name → "John",
    age → 30,
    car → null,
    job → "Developer",
    address → "Dakar",
    interest → {
        music: ["rnb","rap",{drill: ["uk", "sn", "us"]}],
        sports: ["football", "basketball"]
    } 
}
```

### ➤ getFirstEntry
This method allow you to get the first entry of an object.

**<span style="color: orange"> Syntax : </span>**
```js
_Object(yourObject).getFirstEntry()
```
**<span style="color: green"> use case : </span>**

```js
const firstEntry = _Object(userInfo).getFirstEntry()

console.log(firstEntry)

//expected output
"John"
```

### ➤ getLastEntry
This method allow you to get the last entry of an object.

**<span style="color: orange"> Syntax : </span>**
```js
_Object(yourObject).getLastEntry()
```
**<span style="color: green"> use case : </span>**

```js
const lastEntry = _Object(userInfo).getLastEntry()

console.log(lastEntry)

//expected output
{
    music: ["rnb","rap",{drill: ["uk", "sn", "us"]}],
    sports: ["football", "basketball"]
} 
```
### ➤ getEntryByIndex
This method allow you get an entry by only knowing his position inside the object.

It takes one parameter: a number that represents the index of the entry you are looking for.

**<span style="color: orange"> Syntax : </span>**

```js
_Object(yourObject).getEntryByIndex(index)
```
You can think this is useless but let's say that you want to loop through your object with the while loop like you do with arrays this method wiil be very useful.

**<span style="color: green"> use case : </span>**

```js
const myArray = ["sarr", "mouhamed", 20, "Developper"]
const myObject = {
    lastname: "sarr",
    firstname: "mouhamed",
    age: 20,
    job: "Developer"
}

//Loop through array
let i = 0
while (i < myArray.length) {
    //do stuff with values
    console.log(myArray[i])
    i++
}

//Loop though object
let _myObject = _Object(myObject)
let i = 0
while (i < _myObject.size) {
    //do stuff with values
    console.log(_myObject.getEntryByIndex(i))
    i++
}

//expected output for both  loops
"sarr"
"mouhamed"
20
"Developer"
```
### ➤ getEntryByKey
This method allow you to get the value of an deeply nested entry inside an object by only passing his key as parameter.


**<span style="color: orange"> Syntax : </span>**

```js
_Object(yourObject).getEntryByKey(key)
```

**<span style="color: green"> use case : </span>**

```js
/*In this example we are using our users object declared previously and we are tryin to access the jfr key
*/
//using vanilla js
let result = users[0].interest.food[1].usa[2][0].jfr

//using this library
let result = _Object(users).getEntryByKey("jfr")

//expected output for both method
[ "jfr_sn", "jfr_ng" ]
```

### ➤ getEntryByPath
This method allow you to get the value of an deeply nested entry inside an object by only passing the path that lead to this entry as parameter.


**<span style="color: orange"> Syntax : </span>**

```js
_Object(yourObject).getEntryByPath(path)
```

**<span style="color: green"> use case : </span>**

```js
/*In this example we are using our users object declared previously and we are tryin to access the jfr key
by using the path that leads to this key
*/
//using vanilla js
let result = users[0].interest.food[1].usa[2][0].jfr

//using this library
let result = _Object(users).getEntryByKey("0.interest.food.1.usa.2.0.jfr")

//expected output for both method
[ "jfr_sn", "jfr_ng" ]
```
### ➤ slice
This method allow you to get one slice of an object by passing in parameter the slice start index and stop index


**<span style="color: orange"> Syntax : </span>**

```js
_Object(yourObject).slice(startIndex, stopIndex)
```

**<span style="color: green"> use case : </span>**

```js
let slice = _Object(userInfo).slice(0, 3)
console.log(slice)

//expected output
{ 
    name: "John",
    age: 30,
    car: null,
    job: "Developer"
}
```

### ➤ filter
This method allow you to filter an object by passing a filter function that returns a boolean. It works just like the filter method of arrays.

It returns the filtered Object

**<span style="color: orange"> Syntax : </span>**
```js
_Object(yourObject).filter((value, key?optional, index?optional) => {/*body*/})
```

**<span style="color: green"> use case : </span>**

```js
const filtered = _Object(userInfo).filter((info) => `${info}`.includes('D'))

console.log(filtered)

//expected output
{ job: "Developer", address: "Dakar" }

//More advanced filter

const products = {
    { name: 'Orbit', color: 'Blue', size: 50, locations: ['USA', 'Europe'], details: { length: 20, width: 70 } },
    { name: 'Galsen', color: 'Blue', size: 60, locations: [], details: { length: 20, width: 70 } },
    { name: 'DaoudaBa', color: 'Black', size: 70, locations: ['Japan'], details: { length: 20, width: 71 } },
    { name: 'Mouhamed', color: 'Green', size: 50, locations: ['USA'], details: { length: 20, width: 71 } }
};

console.log(
    _Object(products).filter(
        (_) => (
        _.size === 50 || _.size === 70
        && ['blue', 'black'].includes(_.color.toLowerCase())
        && _.locations.find(x => ['JAPAN', 'USA'].includes(x.toUpperCase()))
        && 30 > _.details.length >= 70
        )
    )
)

//expected output
{
    { name: 'Orbit', color: 'Blue', size: 50, locations: ['USA', 'Europe'], details: { length: 20, width: 70 },
    { name: 'DaoudaBa', color: 'Black', size: 70, locations: ['Japan'], details: { length: 20, width: 71 } }
}
```
### ➤ map
This method allow you to map through an object

**Note**: Inside the map you wouldn't try to modify the initial object.If you want to do that use the next method.

**<span style="color: orange"> Syntax : </span>**

```js
_Object(yourObject).map(value, key?optional, index?optional => {/*body*/})
```
**<span style="color: green"> use case : </span>**

```js
/*Let's say i want to have a users object where evry user have a password property*/
const newObject = _Object(users).map(user => {
    user.password = null
    return user
})

console.log(newObject)
```
### ➤ forEach
This method allow you to Loop through an Object and have access to his keys, values and index inside the function passed in parameter.

**<span style="color: orange"> Syntax : </span>**

```js
_Object(yourObject).forEach(value, key?optional, index?optional => {/*body*/})
```
**<span style="color: green"> use case : </span>**

```js
/*Let's say i want to add a password property to evry user of my users Object*/
_Object(users).forEach(user => {
    user.password = null
})

console.log(users)
```
### ➤ freeze
This method allow you to freeze an object according to the depth level that you want to be frozen

**<span style="color: orange"> Syntax : </span>**

```js
_Object(yourObject).freeze(depthLevel)
```
**<span style="color: green"> use case : </span>**

```js
_Object(userInfo).freeze()
/*This only going to froze the property that are directly inside the object(not nested)*/
console.log(Object.isFrozen(userInfo.interest))

//expected output
false
//To froze The first Level of depth we have to pass 1 as depth level
_Object(userInfo).freeze(1)
console.log(Object.isFrozen(userInfo.interest))

//expected output
true
//To froze the entire Object we need to pass 2 as depth level beacause this is a two depth level object
_Object(userInfo).freeze(2)
//after that the object become immutable
```
### ➤ extract
This method allow you to extract some properties of an object and group them to create another object regardless of the level of depth of those properties inside the object until you give a valid path to them.

It takes an unlimited number of parameters

**<span style="color: orange"> Syntax : </span>**

```js
//a param have to be a key or a path to a key
_Object(yourObject).extract(...params)
```
**<span style="color: green"> use case : </span>**

```js
// Simple
const extracted = _Object(userInfo).extract("name")
console.log(extracted)

//expected output
{name: "John"}

//## More Complex

/*Let's say we want to create a users object where a user is only represented by his name and his music interest from our users object*/
const newObj = _Object(users).map(
    user => _Object(user).extract("name", "interest.music")
)

//This reduce our huge user object to this
{
    0: Object { 
        name: "John",
        "interest.music": [ "rnb", "rap" ] 
    }
    1: Object { 
        name: "Jane",
        "interest.music": [ "rnb", "rap" ] 
    }
    2: Object {
        name: "Moussa",
        "interest.music": [ "rnb", "rap", "trap" ]
    }
}
/*For Longer path like "0.interest.food.1.usa.2.0.jfr"
the extracted key become very messy we can use .as(new_key_name) at the end of the path to rename the output key let's apply it to our precedent use case
*/
const newObj = _Object(users).map(
    user => _Object(user).extract("name", "interest.music.as(music)")
)

//This reduce our huge user object to this
{
    0: Object { 
        name: "John",
        music: [ "rnb", "rap" ] 
    }
    1: Object { 
        name: "Jane",
        music: [ "rnb", "rap" ] 
    }
    2: Object {
        name: "Moussa",
        music: [ "rnb", "rap", "trap" ]
    }
}

```
### ➤ includes
This object allow you to test if an object contain a certain key even if the key is deeply nested inside the object

It returns an array where the first element is true or false, the second element is the path to the key or an empty string, depending on whether or not the key was found inside the object

**<span style="color: orange"> Syntax : </span>**

```js
//a param have to be a key or a path to a key
_Object(yourObject).includes(key)
```
**<span style="color: green"> use case : </span>**


```js
const result = _Object(users).includes("jfr")
console.log(result)

//expected output
[ true, "0.interest.food.1.usa.2.0.jfr" ]
```
___
## Contributing ❤

👋🏾 Pull requests are welcome! 
___

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](mailto:mbayelel@gmail.com) details the procedure for disclosing security issues.
___
## Author

**TheCode** [@mouhamed1296](https://github.com/mouhamed1296)

[Linkedin](https://www.linkedin.com/in/mamadou-sarr-b42097166/)

[twitter](https://twitter.com/Mamadou10892209)

___
## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
______________________________________________________
**❤ MADE WITH LOVE ❤**