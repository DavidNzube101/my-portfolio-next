'use client';

import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="logo text-2xl font-bold text-blue-600">
          David.
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['about', 'services', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust this value based on your header height
                  className="cursor-pointer hover:text-blue-600"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Header;