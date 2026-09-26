interface LogoProps {
  dark?: boolean;
  className?: string;
  imgClassName?: string;
}

export function Logo({ dark, className = "", imgClassName = "h-8 sm:h-9 w-auto object-contain" }: LogoProps) {
  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      {dark === true ? (
        <img
          src="/hole-logo-light.png"
          alt="H.O.L.E. APP"
          className={imgClassName}
        />
      ) : dark === false ? (
        <img
          src="/hole-logo-dark.png"
          alt="H.O.L.E. APP"
          className={imgClassName}
        />
      ) : (
        <>
          <img
            src="/hole-logo-dark.png"
            alt="H.O.L.E. APP"
            className={`block dark:hidden ${imgClassName}`}
          />
          <img
            src="/hole-logo-light.png"
            alt="H.O.L.E. APP"
            className={`hidden dark:block ${imgClassName}`}
          />
        </>
      )}
    </span>
  );
}