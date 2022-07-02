import React from 'react';

function Navbar(props){
    const pages = props.pages;
    return <nav>
      <ul>
        {
          pages.map(page => <li>
            <a className={page.isActive ? 'active' : ''} href={page.link}>{page.name}</a>
          </li>)
      }
    </ul>
  </nav>
}

export default Navbar;