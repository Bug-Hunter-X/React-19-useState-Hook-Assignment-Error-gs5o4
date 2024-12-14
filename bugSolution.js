```javascript
//Correct way to use the useState hook
import React, { useState } from 'react';

function MyComponent() {
  // Correct: Using a setter function to update state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```