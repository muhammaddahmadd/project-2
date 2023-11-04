import icon from "../icon.png";
function Navbar() {
  return (
    <nav className="flex flex-row px-2 items-center bg-blue-300  space-x-2 justify-between">
      <div className="cursor-pointer">
        <img src={icon} alt="do some coding" />
      </div>
      <ul className="flex space-x-7 font-semibold cursor-pointer text-blue-600 font-sans">
        <li>Home</li>
        <li>Contact</li>
        <li>About us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
