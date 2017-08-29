# Pretty Dump
Provides a better dump function to visualize data in the terminal.

## TOC

+ [Installation](#installation)
+ [Basic Usage](#basic-usage)
+ [Examples](#examples)
    * [String](#string)
    * [Number](#number)
    * [Boolean](#boolean)
    * [Null](#null)
    * [Undefined](#undefined)
    * [Array](#array)
    * [Object](#object)
    * [Function](#function)
    * [Class](#class)
+ [Methods](#methods)
    * [dump()](#dump)
    * [dd()](#dd)
+ [Author](#author)

## Installation

```
    npm install pretty.dump
```

## Basic Usage

```js
    let pretty = require("pretty.dump");
    
    let variable = "string";

    pretty.dump(variable); // ==> "string"
```

## Examples

#### String

```js
    let variable = "string";

    pretty.dump(variable);
```

![string screenshot](/docs/string.jpg?raw=true "string screenshot")

#### Number

```js
    let variable = 123;

    pretty.dump(variable);
```

![int screenshot](/docs/int.jpg?raw=true "int screenshot")

#### Boolean

```js
    let variable = true;

    pretty.dump(variable);
```

![bool screenshot](/docs/bool.jpg?raw=true "bool screenshot")

#### Null

```js
    let variable = null;

    pretty.dump(variable);
```

![null screenshot](/docs/null.jpg?raw=true "null screenshot")

#### Undefined

```js
    let variable = undefined;

    pretty.dump(variable);
```

![undefined screenshot](/docs/undefined.jpg?raw=true "undefined screenshot")

#### Array

```js
    let variable = ["a", "b", ["c", "d"]];

    pretty.dump(variable);
```

![array screenshot](/docs/array.jpg?raw=true "array screenshot")

#### Object

```js
    let variable = {
        name: "PrettyDump",
        status: "active"
    };

    pretty.dump(variable);
```

![object screenshot](/docs/object.jpg?raw=true "object screenshot")

#### Function

```js
    let variable = (a) => {
        return a*a;
    };

    pretty.dump(variable);
```

![function screenshot](/docs/function.jpg?raw=true "function screenshot")

#### Class

```js
    let variable = pretty;

    pretty.dump(variable);
```

![class screenshot](/docs/class.jpg?raw=true "class screenshot")

In case of circular relationships, PrettyDump will print `[Circular]`.

## Methods

### `dump()`

Prettyfies and dumps the variable to the console.

#### Example

```js
    let variable = false;

    pretty.dump(variable); // ==> false
```

### `dd()`

A.k.a. Die and dump. It prettyfies, dumps the variable to the console and exits the process.

#### Example

```js
    let variable = ["a", "b"];

    pretty.dump(variable); // ==> array:2 [ 0: "a" 1: "b"]
```

## Author
+ [Olavo Amorim Santos](https://github.com/olavoasantos)
