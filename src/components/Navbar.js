const navlinkFormat = "text-white font-bold";

const Navbar = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg">Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className={navlinkFormat}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={navlinkFormat}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className={navlinkFormat}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const message = () => {
  return (
    <>
      <h1></h1>
    </>
  );
};

export default Navbar;
