# Components

Conceptually, components are like JavaScript functions (and technically that's what they are). They accept arbitrary inputs (called “`props`”) and return React elements describing what should appear on the screen.

## Philosophy

### Props and State

**Props**: Any data that is passed to a component as part of it’s creation is classed as props. 
The data flows from the top downwards, ie. from parent to child. 

Props are how components talk to each other.
```jsx harmony
class ParentComponent extends React.Component {
  render() {
    return <ChildComponent message="Hello World"/>;
  }
}
class ChildComponent extends React.Component {
  render() {
    return <p>And then I said, “{this.props.message}”</p>;
  }
}
```

Because of this, React’s data flow is unidirectional: data can only go from parent components to their children, not the other way around.

If a parent passes new props to an existing child this will trigger the child to re-render. The props are saved for reference throughout the life of the component but the component itself does not have the power to change them. 

**State**: Any data that a component decides to store within itself is it’s state. 

Every time a component’s `setState()` function is called, it performs the dual actions of both updating the state, and re-rendering the component.
Programming in a React mindset means trying to minimise the use of state — it should only contain data that needs to respond to change, and ideally components shouldn’t know too much about other components.

### Flow of Control

Flow of control

React enforces one-way data flow for it's components. This means that data flows from parent components down to it's children components but not the other way around.
This makes it much easier to not create code that creates side-effects as you always know which way the data is flowing and it's source.


React really forces you to think carefully about the structure of your app, as both data (in the form of props and state) and control flows in a very linear way between parents and children. Parents have the power to create their children, but also can exert control by passing them new props. 
Parents have the power to create their children, but also can exert control by passing them new props. 

Children can also communicate with their parents through functions that the parent can pass down and the children can then execute, so in this manner they can still communicate but in a manner that is established and predictable to the parent component.

### Siblings

React does not approve or allow siblings Components to communicate with each other. This does bring some challenges when developing functionality of separate components that have some information in common.
To be able to communicate sibling components we would need the parent component to add a mediator of data between components.

This can be difficult when the components are complex or are nested in different levels, which is why there are libraries designed to mitigate this component such as `Flux`-based libraries such as Redux. There's also the new `Context` API that also can be used to solve this problem.


## Creating Components

The simplest way to define a component is to write a JavaScript function:

```jsx harmony
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

React uses a language called JSX that looks like HTML but works inside JavaScript, which HTML usually doesn't do. We'll look more into JSX in a future module.

You can also use an ES6 class to define a component:

```jsx harmony
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Classes have some additional features that we will discuss in the later sections.

## Rendering a Component

When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”.

For example, this code renders “Hello, Sara” on the page:

```jsx harmony
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Let’s recap what happens in this example:

- We call `ReactDOM.render()` with the `<Welcome name="Sara" />` element.
- React calls the `Welcome` component with `{name: 'Sara'}` as the props.
- Our Welcome component returns a `<h1>Hello, Sara</h1>` element as the result.
- React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.

References:
- https://reactjs.org/docs/components-and-props.html
- https://medium.freecodecamp.org/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3
- https://code.likeagirl.io/the-philosophy-of-react-e2c126c61af3
