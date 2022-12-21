import { useState } from 'react'
import * as Asset from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

      {/* Desktop */}
      <img src={Asset.logo} alt="hoobank" className="w-32 h-8 mx-3" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link) => (
          <li key={link.id} className={`font-poppins font-normal cursor-pointer text-base text-white mx-4`}>
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={sidebar ? Asset.close : Asset.menu} alt="sidebar" className="w-7 h-7 object-contain mx-3" onClick={() => setSidebar((prev) => !prev)} />
        <div className={`${sidebar ? 'flex' : 'hidden'} p-5 bg-black-gradient absolute top-24 right-0 mx-6 my-6 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link) => (
              <li key={link.id} className={`font-poppins font-normal cursor-pointer text-base text-white my-2`}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar