import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav>
        <div className="flex justify-evenly items-center w-full p-10 fixed z-10 text-white">
          <div className="w-full text-left ml-16 p-1">
            <Link to="/"> 
            <img src="./logo-1.png" className="w-[60px]"/>
            </Link>
            {/* <img src="./logo-2.png" className="w-[260px] "/> */}
          </div>
          <div className="flex list-none items-center mx-16 text-2xl w-[30%] justify-around">
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Blog</a>
            </li>
            <li className="bg-[#FEBB00] px-8 py-1 rounded-md text-white">
                <Link to="/login">JOIN</Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
