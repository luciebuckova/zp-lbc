import GoogleMap from "../utils/GoogleMap";

function Contact() {
  return (
    <>
      <h3 className="text-gradient mb-8 inline-block text-2xl font-bold md:mb-14 md:text-4xl">
        Kontakt
      </h3>
      <h4 className="mb-4 text-lg font-medium text-fuchsia-300 md:text-xl">
        Provozní doba:
      </h4>
      <ul className="md:text-lg">
        <li>pondělí až čtvrtek 8-17 hod.</li>
        <li>pátek 8-16 hod.</li>
      </ul>
      <div className="mt-8">
        <GoogleMap />
      </div>
      <div className="mt-8 flex flex-col justify-between gap-4 text-blue-300 lg:flex-row">
        <div className="flex items-center gap-2">
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
          <p className="font-bold md:text-xl">Široká 27/3, Liberec</p>
        </div>
        <div>
          <a
            href="mailto:lidabuckova@centrum.cz"
            className="flex items-center gap-2"
          >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <p className="font-bold md:text-xl">lidabuckova@centrum.cz</p>
          </a>
        </div>
        <div>
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
            <p className="font-bold md:text-xl">+420 604 687 034</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
