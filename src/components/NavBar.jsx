import React, { useState } from 'react';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    return(
        <nav>
            <div>
                {/* //myspace logo here */}
                <h3>mySpace</h3>
                <div>
                    <input type="text"/>

                    <button>search</button>
                </div>
            </div>
            <div>
                <ul>
                    <li>home</li>
                    <li>mail</li>
                    <li>profile</li>
                    <li>friends</li>
                </ul>
            </div>
        </nav>
    )
}