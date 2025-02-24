export default function Header() {
    return (
      <header className="bg-gray-800 h-800 my-100 mx-50 fixed top-0 left-0 right-0 pb-10 z-50 ">
        <div className="container mx-auto  px-5 py-10 text-right flex justify-between  lg:items-center  ">
          <h1 className="text-2xl font-bold hidden lg:block">Your Logo</h1>
          <nav className="flex items-center justify-end fixed  left-0 w-full lg:items-center pr-10 ">
            <ul className="flex space-x-20 ">
            <li><a href="#HOME" className="text-white hover:text-yellow-300">HOME</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-300">About</a></li>
              <li><a href="#services" className="text-white hover:text-yellow-300">Services</a></li>
              <li><a href="#products" className="text-white hover:text-yellow-300">Products</a></li>
              <li><a href="#contact" className="text-white hover:text-yellow-300">Contact</a></li>

            </ul>
          </nav>
        </div>
      </header>
    );
  }
  