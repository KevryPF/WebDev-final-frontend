import { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='Navbar'>
                <div className = 'Links'>
                    <ul>
                        <li><Link to={'/'} > Home Page </Link></li>
                        <li><Link to={'/employees'} > All Employees </Link></li>
                        <li><Link to={'/tasks'} > All Tasks </Link></li>
                    </ul>
                </div>
            </div>
        )
    }
};
export default NavBarContainer;