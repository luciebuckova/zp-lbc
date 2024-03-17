import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1 className="text-gradient mb-8 inline-block text-4xl font-bold leading-tight md:text-7xl md:leading-tight">
        Zdravotnické potřeby
        <br />
        Ludmila Bučková
      </h1>
      <h2 className="mb-14 max-w-3xl text-lg font-medium tracking-wider  md:text-2xl">
        V centru <strong className="text-fuchsia-300">Liberce</strong> Vám
        nabízíme mimo jiné široký sortiment inkontinenčních pomůcek, zdravotních
        punčoch a obuvi
      </h2>
      <div>
        <NavLink
          to="kontakt"
          className="rounded-lg bg-fuchsia-700 px-8 py-4 font-medium text-white duration-300 hover:bg-fuchsia-600 md:text-2xl"
        >
          Kde nás najdete →
        </NavLink>
      </div>
    </>
  );
}

export default HomePage;
