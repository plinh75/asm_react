import React from 'react'
import Nav from '../components/Nav'
import Search from '../components/Search'
import Banner from './Logo'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div>
        <div>
          <Banner />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Nav />
          <Search />
        </nav>

      </div>
    </header>
  )
}

export default Header