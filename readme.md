### this Kata is to learn typescript
Typescipt = Javascript + a type system.

### benefits of using type system.
- helps us catch errors during development
- uses 'type annotaion' to analyze our code
- only active during <b>development<b/>
- doesnt provide any performance optimization

### how does it work
typescript code -> typescript compiler -> plain old js

------------------------------------------------------------------
### What is type system?
easy way to refer to the different properties 
+ function that a value has

every value in Typescipt has a type.
easy way to refer to all the properties.

### type of types in TS:

1) Primitive types
- number, boolean, void, undefined, string, symbol, null

2) Object types
- functions, arrays, classes, objects

### why do we care about types:

- types are used by the tsc to analyze our code for errors.
- types allow other engineers to understand what values are flowing
through our codebase.
------------------------------------------------------------------
### Type Annotation and Type Inference:
- Type Annotation -> we (developers) tell TS the type.
- Type Inference -> TS guesses the type.
    - if declaration and initialization are on the same line,
    Typescipt will figure out the type of 'color' for us.
------------------------------------------------------------------
### Type annotaions for functions:
- code we add to tell typescript what type of arguments a function
will receive and what type of values it will return

### Type Inference for functions:
- TS tries to figure out what what type of value a function will return
(remember type inference is like and automatic system)
--------------------------------------------------------------------
### Typed Arrays:
Arrays where each element is some consistent type of value.

Any time we need to repersent a collection of records with some arbitrary sort order.

------------------------------------------------------------------
### Tuples:
Array-like structure where each element represents property of a record

- you just order a structure in. 

you may not be using that much in TS as its really hard to tell what
tuple like structure data really mean. we can just use object for better representation.

-----------------------------------------------------------------

### interfaces:
create a new type, describing the property names and values types of an object.

mostly you are gonna learn who to use interface and classes together.

`interface Reportable {
    summary(): string; // function that returns a string
};`

the above interface is valid for objects which have a function 
that returns a string.

// object
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `name: ${this.name}`;
    }
};

// here is the function that uses interface Reportable
`const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}`

--------------------------------------------------------------------------

### Interface and Abstract Classess:

#### Interfaces: 
- Sets up a contract between different classes. 
- Use when we have very different objects that we want to work together.
- Promotes loose coupling.

#### Inheritancs / Abstract Classes:
- Sets up a contract between different classes.
- Use when we are trying to build up a definition of an object.
- Strongly couples classes together.
