import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-300 transition-colors duration-300";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "inline-block text-sm disabled:cursor-not-allowed px-4 md:px-6 md:py-3.5 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 rounded-full font-semibold border-2 boder-stone-300 uppercase tracking-wide text-stone-400 hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 py-2.5",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
