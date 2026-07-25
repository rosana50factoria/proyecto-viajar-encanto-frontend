import { Link } from "react-router-dom";

export default function AuthCard({ title, subtitle, children, footerText, footerLinkText, footerLinkTo }) {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <h1 className="font-serif text-2xl font-bold text-neutral sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-2 text-sm text-neutral/70">{subtitle}</p>}

      <div className="mt-6">{children}</div>

      {footerText && (
        <p className="mt-6 text-center text-sm text-neutral/70">
          {footerText}{" "}
          <Link to={footerLinkTo} className="font-medium text-primary hover:underline">
            {footerLinkText}
          </Link>
        </p>
      )}
    </div>
  );
}