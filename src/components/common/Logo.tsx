type Props = {
  isInverted?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
};

function Logo({ isInverted = false, size = "md" }: Readonly<Props>) {
  const sizeMapper = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <img
      src="/logo.png"
      alt="Monarch"
      className={`${sizeMapper[size]}`}
      style={{
        filter: isInverted ? "invert(1)" : "none",
      }}
    />
  );
}

export default Logo;
