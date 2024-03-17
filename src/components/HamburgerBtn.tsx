type Props = {
  toggleOpen: () => void;
  isOpen: boolean;
};

function HamburgerBtn({ toggleOpen, isOpen }: Props) {
  return (
    <button
      className={`hamburger z-50 block focus:outline-none ${
        isOpen ? "open" : ""
      }`}
      type="button"
      onClick={toggleOpen}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}

export default HamburgerBtn;
