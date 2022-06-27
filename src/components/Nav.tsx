import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      
        
          <Link to="/">Home</Link>        
          <Link to="/article">Ajout d'Article</Link>
          <Link to="/Bon-plan">Ajout de BonPlan</Link>
       
    </nav>
  );
}
export default Nav;