import React from 'react'; 
import {Link, withRouter} from 'react-router-dom';

const NavBar = (props) =>
{
    console.log(props)

    return(
        
<div className="container">
    <Link to="/" style={{margin: 5}}>Home</Link>
    <Link to="/about" style={{margin: 5}}>About</Link>
    <Link to="/contact">contact</Link>

</div>
    );


}

export default withRouter(NavBar);
 