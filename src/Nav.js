import App from './App';
import Signup from './Signup';
import{Link} from 'react-router-dom'

function Nav(){
 return(
   <div>
      <Link to="/App">App</Link>
    <Link sx={{marginLeft:"15px"}} to="/Signup">Signup</Link>
   </div>
    
 )
}
export default Nav;
