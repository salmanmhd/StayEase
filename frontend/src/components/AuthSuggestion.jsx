import { Link } from "react-router-dom";

function AuthSuggestion({ text, redirectText, redirectTo }) {
  return (
    <p className="mt-4 text-center text-sm text-gray-300">
      {text}
      <Link
        to={redirectTo}
        className="text-indigo-400 underline underline-offset-1 transition-colors hover:text-indigo-300"
      >
        {redirectText}
      </Link>
    </p>
  );
}

export default AuthSuggestion;
