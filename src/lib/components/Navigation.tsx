import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div>
      <ul>
        <Link href={"#*"}>
          <li>
              Welcome
          </li>
        </Link>
        <Link href={"#webdev"}>
          <li>
              Webdev
          </li>
        </Link>
        <Link href={"#gamedev"}>
          <li>
              Gamedev
          </li>
        </Link>
        <Link href={"#contact"}>
          <li>
              Contact
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
