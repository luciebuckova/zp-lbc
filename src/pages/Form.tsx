import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";

type Status = {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: string | null };
};

type Inputs = {
  epoukaz: string;
  name: string;
  phone: string;
};

function Form() {
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState<Inputs>({
    epoukaz: "",
    name: "",
    phone: "",
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        epoukaz: "",
        name: "",
        phone: "",
      });
    } else {
      setStatus({
        ...status,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[0-9]{9}$/.test(inputs.phone)) {
      setStatus({
        ...status,
        info: {
          error: true,
          msg: "Telefonní číslo může obsahovat pouze 9 číslic bez mezer (např. 607666777).",
        },
      });
      return;
    }

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xayrdqop",
      data: inputs,
    })
      .then(() => {
        handleServerResponse(true, "Děkujeme, brzy se Vám ozveme.");
      })
      .catch((error) => {
        handleServerResponse(
          false,
          error.response?.data?.error || "Došlo k chybě.",
        );
      });
  };

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
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4 flex max-w-xs flex-col gap-2 md:text-lg">
          <label htmlFor="epoukaz">Kód ePoukazu</label>
          <input
            required
            id="epoukaz"
            type="text"
            name="epoukaz"
            onChange={handleOnChange}
            value={inputs.epoukaz}
            className="rounded-lg border-[1px] border-white/30 bg-white/15 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg focus:bg-white/25 focus:outline-none"
          />
        </div>
        <div className="mb-4 flex max-w-xs flex-col gap-2 md:text-lg">
          <label htmlFor="name">Jméno</label>
          <input
            required
            id="name"
            type="text"
            name="name"
            onChange={handleOnChange}
            value={inputs.name}
            className="rounded-lg border-[1px] border-white/30 bg-white/15 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg focus:bg-white/25 focus:outline-none"
          />
        </div>
        <div className="mb-4 flex max-w-xs flex-col gap-2 md:text-lg">
          <label htmlFor="phone">Telefon</label>
          <input
            required
            id="phone"
            type="text"
            //pattern="[0-9]{9}"
            name="phone"
            onChange={handleOnChange}
            value={inputs.phone}
            className="rounded-lg border-[1px] border-white/30 bg-white/15 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg focus:bg-white/25 focus:outline-none"
          />
        </div>
        {status.info.error && (
          <div className="mt-16 max-w-xs rounded-lg border-[1px] border-red-700 bg-red-700 px-2 py-4 md:text-lg">
            <p>Chyba: {status.info.msg}</p>
          </div>
        )}
        <button
          type="submit"
          disabled={status.submitting || status.submitted}
          className={`mt-8 rounded-lg px-8 py-4 font-medium text-white duration-300 md:text-2xl ${status.submitting || status.submitted ? "cursor-not-allowed bg-gray-500" : "bg-fuchsia-700 hover:bg-fuchsia-600"}`}
        >
          {!status.submitting
            ? !status.submitted
              ? "Odeslat"
              : "Odesláno"
            : "Odesílání..."}
        </button>
      </form>

      {!status.info.error && status.info.msg && (
        <p className="mt-16 md:text-lg">{status.info.msg}</p>
      )}
    </>
  );
}

export default Form;
