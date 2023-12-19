import Logo from "./Logo";
import WindowButtons from "./WindowButtons";

type Props = {
  title: string;
  logoSize?: "xs" | "sm" | "md" | "lg";
  closeBtnAction?: () => void;
  logoIsInverted?: boolean;
};

function WindowHeader({
  title,
  logoSize = "md",
  closeBtnAction = () => {},
  logoIsInverted = false,
}: Readonly<Props>) {
  return (
    <div className="flex items-center justify-between w-full px-4 border-b border-monarchPrimary p-2">
      <Logo size={logoSize} isInverted={logoIsInverted} />
      <h2 className="text-md  lg:text-xl font-bold font-oxanium text-monarch">
        {title}
      </h2>
      <WindowButtons closeBtnAction={closeBtnAction} />
    </div>
  );
}

export default WindowHeader;
