1. What problem does the context API help solve?
Context API makes state management application wide using hooks and Context.Provider

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions objects provide information for the reducer include action types and any optional payload to update state. 
Reducers determine how state should react to an action that is passed in.
Store is an immutable state tree and holds the global state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application holds the global state while Component holds the local state within the components.
Application state would be used for large applications that have complex state management.
Component state would be use for small applications without complex stae dependencies.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is middleware that handles asynchronous events and dispatch actions at different stages;
this gives us dynamic action-creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API makes state managemnet easy and eliminates the darn props drilling.
