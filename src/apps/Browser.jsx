import React, { useState } from 'react';

function Browser() {

  return (
    <>
    
<section className='browser__section'>

<span>Browser</span>
<input type="text" />
<iframe src="https://www.example.com" style={{width: '100%', height: '100%'}} ></iframe>
</section>

    </>
  );
}

export default Browser;