```javascript
//Incorrect way to use the useState hook
import React, { useState } from 'react';

function MyComponent() {
  // Incorrect: Assigning a value directly to state variable
  const [count, count] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => count++}>Click me</button>
    </div>
  );
}

export default MyComponent;
```