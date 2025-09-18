import { NavLink } from "react-router-dom"


function Header() {
  return (
    <>
      <div className="w-[90%] max-w-[1200px] mx-auto h-16 px-6 flex items-center justify-between  mt-10
                      rounded-2xl  border-white/20 bg-white/5 backdrop-blur-md text-white shadow-lg">
        
        {/* Logo */}
        <div >
          <img
            src="https://i.ibb.co/pBGkt9ZD/nike-logo-removebg-preview.png"
            className="h-15 mr-10 md:mr-0 w-15 object-contain rounded-lg transition-transform duration-200 hover:scale-105"
            alt="Nike Logo"
          />
        </div>

        {/* Navigation */}
        <div>
          <ul className="flex items-center gap-5  md:gap-10 md:text-lg text-sm font-medium">
            <li>
              <NavLink to="/male" className="hover:text-gray-300">
                Male
              </NavLink>
            </li>
            <li>
              <NavLink to="/female" className="hover:text-gray-300">
                Female
              </NavLink>
            </li>
            <li>
              <NavLink to="/sports" className="hover:text-gray-300">
                Sports
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="cursor-pointer  hover:text-gray-300 ml-10 md:ml-0">
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-github h-8 w-8" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
        </div>

        
      </div>
      

    </>
  )
}

export default Header
