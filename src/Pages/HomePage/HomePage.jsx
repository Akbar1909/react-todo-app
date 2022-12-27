import React from 'react'
import {Link} from 'react-router-dom';

export default function HomePage() {
  return <div>
  <h1>Hello World</h1>
  <input type="text" />
  <p>Github actions are created 123</p>
  <Link to="about">About Us</Link>
</div>
}
