import React, { useState } from 'react';

function Browser() {
  const [url, setUrl] = useState('https://www.example.com');

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <>
      <section>
        <span>Browser</span>
        <input
          type="text"

          placeholder="Enter URL"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button onClick={handleChange}>Search</button>
        <iframe
          src={url}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Embedded Browser"
        />
      </section>
    </>
  );
}

export default Browser;