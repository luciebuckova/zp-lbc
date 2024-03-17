import { useForm } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xayrdqop");
  if (state.succeeded) {
    return (
      <p className="font-medium md:text-lg">Děkujeme, brzy se vám ozveme!</p>
    );
  }
  return (
    <>
      <h3 className="text-gradient mb-8 inline-block text-2xl font-bold md:mb-14 md:text-4xl">
        ePoukazy
      </h3>
      <p className="mb-16 md:text-lg">
        Chcete-li si ušetřit čas a stres z čekání, máme pro vás jednoduché
        řešení. Stačí nám předem zaslat kód vašeho ePoukazu a my se postaráme o
        zbytek. Požadované zboží budeme mít připravené a vy dostanete zprávu, že
        si jej můžete přijít vyzvednout. Užijte si pohodlný nákup bez zbytečných
        prodlev a stresu.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex max-w-xs flex-col gap-2 md:text-lg">
          <label htmlFor="epoukaz">Kód ePoukazu</label>
          <input
            id="epoukaz"
            type="text"
            name="epoukaz"
            className="rounded-lg border-[1px] border-white/30 bg-white/15 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg focus:bg-white/25 focus:outline-none"
          />
        </div>
        <div className="mb-4 flex max-w-xs flex-col gap-2 md:text-lg">
          <label htmlFor="name">Jméno</label>
          <input
            id="name"
            type="text"
            name="name"
            className="rounded-lg border-[1px] border-white/30 bg-white/15 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg focus:bg-white/25 focus:outline-none"
          />
        </div>
        <div className="mb-4 flex max-w-xs flex-col gap-2 md:text-lg">
          <label htmlFor="phone">Telefon</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="rounded-lg border-[1px] border-white/30 bg-white/15 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg focus:bg-white/25 focus:outline-none"
          />
        </div>
        {/* doplnit checkbox - souhlas */}
        <button
          type="submit"
          disabled={state.submitting}
          className="mt-8 rounded-lg bg-fuchsia-700 px-8 py-4 font-medium text-white duration-300 hover:bg-fuchsia-600 md:text-2xl"
        >
          Odeslat
        </button>
      </form>
    </>
  );
}

export default Form;
