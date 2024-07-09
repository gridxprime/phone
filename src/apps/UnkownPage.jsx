import React from 'react'
import { Link } from 'react-router-dom'
function UnkownPage() {
  return (
    <section>
      <span>The app isn't installed.<br></br> You can go <Link to='/'>Home</Link></span>
    </section>
  )
}

export default UnkownPage
