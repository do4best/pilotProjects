import {Routes,Route,Link} from 'react-router'
import OurTeam from './ourTeam';
import MyLocation from './myLocation';
function MainRouterExample() {
    return (<>
    <Link to='/'>Home</Link>
     <Link to='/mylocation'>Location</Link>
    <Routes>
    <Route path="/" element={<OurTeam />} />
     <Route path="/mylocation" element={<MyLocation />} />
    </Routes>
    
    </>  );

}

export default MainRouterExample;