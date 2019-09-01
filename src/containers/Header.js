import React from 'react';

function Header() {
	return (
        <div className="header">
            <h1>Realmarkably</h1>
            <ul>
            <li><input defaultValue="user" /></li>
            <li><input defaultValue="password" /></li>
            <li><button>submit</button></li>
            </ul>
      </div>
    )
}

export default Header

