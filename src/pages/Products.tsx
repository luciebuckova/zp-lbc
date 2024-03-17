function Products() {
  return (
    <>
      <h3 className="text-gradient mb-8 inline-block text-2xl font-bold md:mb-14 md:text-4xl">
        Produkty
      </h3>
      <p className="mb-4 md:text-lg">
        Široký výběr zboží skladem nebo na objednání do druhého dne!
      </p>
      <p className="mb-16 md:text-lg">
        Vydáváme zdravotní pomůcky na poukazy všech zdravotních pojišťoven,
        přijímáme také <strong className="text-fuchsia-300">ePoukazy</strong>.
      </p>
      <div className="grid items-start gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="h-full rounded-xl border-[1px] border-white/30 bg-white/15 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg">
          <ul>
            <li className="mb-4">
              <strong>Inkontinenční vložky</strong> značek Tena, MoliCare, Abena
            </li>
            <li className="mb-4">
              <strong>Inkontinenční kalhotky</strong> značek Tena, MoliCare,
              Abena
            </li>
            <li className="mb-4">
              <strong>Kompresní punčochy</strong> Mediven, Avicenum, Maxis
            </li>
            <li>
              <strong>Ortopedické pomůcky</strong> - podpatěnky, korektory,
              stélky
            </li>
          </ul>
        </div>
        <div className="h-full rounded-xl border-[1px] border-white/30 bg-white/15 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg">
          <ul>
            <li className="mb-4">
              <strong>Rehabilitační pomůcky</strong> - gymnastické míče,
              overbally, balanční podložky, masážní válečky, míčky, tejpy,
              podsedáky
            </li>
            <li className="mb-4">
              <strong>Zdravotní obuv</strong> na doma i na ven
            </li>
            <li className="mb-4">
              <strong>Zdravotní ponožky</strong> pro diabetiky, adjustační
              ponožky, bandáže, ortézy, bederní pásy
            </li>
          </ul>
        </div>
        <div className="h-full rounded-xl border-[1px] border-white/30 bg-white/15 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg">
          <ul>
            <li className="mb-4">
              <strong>Tlakoměry, teploměry, glukometry</strong>
            </li>
            <li className="mb-4">
              <strong>Dezinfekční přípravky, speciální kosmetika</strong>{" "}
              Menalind, Seni Care, Tena
            </li>
            <li className="mb-4">
              <strong>Soupravy na klistýr</strong>
            </li>
            <li className="mb-4">
              <strong>Nahřívací a chladivé polštářky</strong>
            </li>
            <li>
              <strong>Podpažní berle, francouzské hole, vycházkové hole</strong>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Products;
