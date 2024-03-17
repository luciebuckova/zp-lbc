import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="px-8">
      <div className="rounded-b-3xl border-[1px] border-t-0 border-white/30 bg-white/15 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg">
        <p className="mb-8 text-2xl font-bold">
          Zdravotnické potřeby
          <br />
          Ludmila Bučková
        </p>
        <div className="mb-2">
          <NavLink to="kontakt" className="flex items-center gap-2">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p className="font-bold">Široká 27/3, Liberec</p>
          </NavLink>
        </div>
        <div className="mb-8">
          <a href="tel:+420604687034" className="flex items-center gap-2">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <p className="font-bold">+420 604 687 034</p>
          </a>
        </div>
        <h4 className="mb-2 text-lg font-medium text-fuchsia-300">
          Provozní doba:
        </h4>
        <ul className="mb-8">
          <li>pondělí až čtvrtek 8-17 hod.</li>
          <li>pátek 8-16 hod.</li>
        </ul>
        <p className="mb-2 max-w-xs">
          Vydáváme zboží na poukazy i ePoukazy všech zdravotních pojišťoven.
        </p>
        <p>Přijímáme platební karty.</p>
      </div>
    </aside>
  );
}

export default SideBar;
