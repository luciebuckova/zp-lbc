import { useState } from "react";
import HamburgerBtn from "./HamburgerBtn";
import { NavLink } from "react-router-dom";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav className="flex justify-between p-8">
      <p className="text-lg font-bold">
        Zdravotnické potřeby
        <br />
        Ludmila Bučková
      </p>
      <HamburgerBtn toggleOpen={toggleOpen} isOpen={isOpen} />
      {isOpen ? (
        <div className="absolute right-0 top-0 z-40 h-screen w-full bg-purple-950 p-8 pt-28 font-medium text-white">
          <ul className="flex flex-col gap-8">
            <li onClick={toggleOpen}>
              <NavLink to="/" className="text-fuchsia-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
              </NavLink>
            </li>
            <li onClick={toggleOpen}>
              <NavLink to="onas" className="text-fuchsia-50">
                O nás
              </NavLink>
            </li>
            <li onClick={toggleOpen}>
              <NavLink to="produkty" className="text-fuchsia-50">
                Produkty
              </NavLink>
            </li>
            <li onClick={toggleOpen}>
              <NavLink to="epoukaz" className="text-fuchsia-50">
                Zaslat ePoukaz
              </NavLink>
            </li>
            <li onClick={toggleOpen}>
              <NavLink to="kontakt" className="text-fuchsia-50">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default MobileNav;
