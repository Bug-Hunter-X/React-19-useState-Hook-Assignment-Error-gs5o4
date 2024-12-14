# React 19 useState Hook Assignment Error
This repository demonstrates a common error when using the `useState` hook in React 19 and its solution.

## Bug
The bug lies in the incorrect assignment of the state variable within the `useState` hook.  The code attempts to directly assign the value to the state variable which results in a runtime error or unexpected behavior. 

## Solution
The solution involves correctly using the setter function provided by `useState` to update the state variable.  This ensures the component re-renders correctly and reflects the changes in state.