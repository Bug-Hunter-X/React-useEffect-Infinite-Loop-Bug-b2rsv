# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by directly modifying the state variable within the effect's dependency array.  The `bug.js` file contains the erroneous code, and `bugSolution.js` provides the corrected version. 

## Problem
The issue stems from how `useEffect` works.  It runs after every render. If the effect itself modifies a state variable that's also included in the dependency array, it creates a cycle: the state change triggers a re-render, which triggers the effect again, leading to an infinite loop.