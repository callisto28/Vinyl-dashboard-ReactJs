import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center border-b-2 border-blue-600">


      <Link className="text-xl px-2 text-blue-500 hover:text-white hover:bg-black" to="/">Home</Link>
      <Link className="text-xl px-2 text-blue-500 hover:text-white hover:bg-black" to="/article">Ajout d'Article</Link>
      <Link className="text-xl px-2 text-blue-500 hover:text-white hover:bg-black" to="/Bon-plan">Ajout de BonPlan</Link>

    </nav>
  );
}
export default Nav;