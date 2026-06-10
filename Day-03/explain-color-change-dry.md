# JavaScript DRY Principle - Refactoring Our Font and Color Changer Application

## Learning Objectives

By the end of this lesson, you will be able to:

* Understand the DRY Principle
* Use function parameters
* Store DOM elements in variables
* Use template literals
* Use CSS variables
* Reduce code duplication
* Write cleaner and more maintainable JavaScript

---

# What is DRY?

DRY stands for:

**D = Don't**
**R = Repeat**
**Y = Yourself**

The DRY principle encourages us to avoid writing the same code multiple times.

---

## Bad Example

```javascript
function changeColorGreen() {
    document.getElementById('title').style.color = 'green';
}

function changeColorRed() {
    document.getElementById('title').style.color = 'red';
}

function changeColorBlue() {
    document.getElementById('title').style.color = 'blue';
}
```

### Problem

Notice that all three functions do exactly the same thing.

The only difference is the color.

If we need 20 colors, we would need 20 functions.

This creates:

* More code
* More maintenance
* More bugs
* Less readability

---

# Solution: Use Parameters

Instead of creating multiple functions, create one reusable function.

```javascript
function changeTitleColor(color) {
    title.style.color = color;
}
```

Now we can call:

```javascript
changeTitleColor("green");
changeTitleColor("red");
changeTitleColor("blue");
changeTitleColor("yellow");
```

### Benefit

One function can handle unlimited colors.

---

# Understanding Function Parameters

A parameter is a value passed into a function.

Example:

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

Calling the function:

```javascript
greet("Sadeed");
greet("John");
greet("Sarah");
```

Output:

```text
Hello Sadeed
Hello John
Hello Sarah
```

The same function works for many different values.

---

# Storing DOM Elements in Variables

## Before

```javascript
document.getElementById('title').style.color = 'green';
document.getElementById('title').style.color = 'red';
document.getElementById('title').style.color = 'blue';
```

JavaScript searches the page every time.

---

## After

```javascript
const title = document.getElementById('title');
const demo = document.getElementById('demo');
```

Now we can simply write:

```javascript
title.style.color = 'green';
```

---

## Why is this better?

* Cleaner code
* Faster execution
* Easier to read
* Easier to maintain

---

# Understanding const

```javascript
const title = document.getElementById('title');
```

The keyword `const` means:

> This variable cannot be reassigned.

Example:

```javascript
const age = 20;
```

This is allowed:

```javascript
console.log(age);
```

This is NOT allowed:

```javascript
age = 30;
```

JavaScript will produce an error.

---

# Using Multiple Parameters

Our font changing function accepts two values.

```javascript
function changeFontSize(size, color) {
    demo.style.fontSize = `${size}px`;
    demo.style.color = color;
}
```

Calling:

```javascript
changeFontSize(36, "red");
```

Internally becomes:

```javascript
size = 36;
color = "red";
```

Result:

```javascript
demo.style.fontSize = "36px";
demo.style.color = "red";
```

---

# Understanding Template Literals

## Traditional Method

```javascript
size + "px"
```

Example:

```javascript
36 + "px"
```

Result:

```text
36px
```

---

## Modern Method

```javascript
`${size}px`
```

Result:

```text
36px
```

---

## Why Use Template Literals?

Template literals make strings easier to read.

Example:

```javascript
let name = "Sadeed";

console.log(`Welcome ${name}`);
```

Output:

```text
Welcome Sadeed
```

---

# CSS Refactoring

## Before

We had four different classes.

```css
.btn-green
.btn-red
.btn-yellow
.btn-blue
```

Each class repeated:

```css
width: 70px;
height: 30px;
border: none;
border-radius: 5px;
```

---

## Problem

The same code is repeated multiple times.

---

## Better Solution

Create one shared class.

```css
.btn {
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
}
```

All buttons now use the same style.

---

# CSS Variables

Instead of creating multiple button classes, we can use CSS variables.

Button:

```html
<button class="btn"
        style="--btn-color: green">
</button>
```

CSS:

```css
background-color: var(--btn-color);
```

---

## What Happens?

For this button:

```html
style="--btn-color: green"
```

JavaScript interprets it as:

```css
background-color: green;
```

For another button:

```html
style="--btn-color: red"
```

JavaScript interprets it as:

```css
background-color: red;
```

One CSS rule works for all colors.

---

# Cleaner HTML

## Before

```html
<button onclick="changeColorGreen()"></button>
<button onclick="changeColorRed()"></button>
<button onclick="changeColorBlue()"></button>
```

Many functions.

---

## After

```html
<button onclick="changeTitleColor('green')"></button>

<button onclick="changeTitleColor('red')"></button>

<button onclick="changeTitleColor('blue')"></button>
```

One reusable function.

---

# Benefits of Refactoring

After applying DRY principles, our code becomes:

### Easier to Read

Less code means less confusion.

### Easier to Maintain

Changes only need to be made in one place.

### Easier to Extend

Adding new colors requires no new functions.

### More Professional

This is how real-world developers write scalable code.

---

# Key Takeaways

## HTML Concepts

* id attribute
* button element
* onclick event

## CSS Concepts

* Classes
* Hover effects
* CSS Variables

## JavaScript Concepts

* Functions
* Parameters
* Variables
* const
* DOM Manipulation
* Template Literals

## Software Engineering Concepts

* DRY Principle
* Code Reusability
* Maintainability
* Refactoring

---

# Challenge Exercise

Add the following features:

1. Create a Purple button.
2. Create an Orange button.
3. Add a Reset button.
4. Create a function that changes both the title and paragraph color together.
5. Allow users to type a font size in a textbox and apply it dynamically.

These exercises will reinforce the DRY principle and help you become more comfortable with reusable code.
