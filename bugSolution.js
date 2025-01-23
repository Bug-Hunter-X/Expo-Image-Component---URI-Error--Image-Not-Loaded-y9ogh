The `onError` prop of the Expo Image component allows you to specify a callback function that's executed if the image fails to load. This function can then render an alternative image or display a message to the user.

```javascript
import React from 'react';
import { Image } from 'expo-image';

export default function App() {
  return (
    <Image
      source={{ uri: 'invalid-image-uri' }} 
      style={{ width: 200, height: 200 }}
      onError={(error) => console.log('Image loading error:', error)}
      />
  );
}
```

To further enhance the user experience, you can display a placeholder image while the main image loads and then gracefully handle the failure scenario.  You can also implement a loading indicator.

```javascript
import React, { useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';

export default function App() {
  const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/200');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = (error) => {
    setError(true);
    setLoading(false);
    console.error('Image loading error:', error);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Image
      source={{ uri: imageUrl }}
      style={{ width: 200, height: 200 }}
      onLoad={handleLoad}
      onError={handleError}
      resizeMode={'contain'}
    />
  );
}
```