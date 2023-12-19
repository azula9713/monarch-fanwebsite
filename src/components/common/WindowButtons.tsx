type WindowButtonsProps = {
  closeBtnAction?: () => void;
};

function WindowButtons({
  closeBtnAction = () => {},
}: Readonly<WindowButtonsProps>) {
  return (
    <div className="hidden xs:flex items-start justify-between h-full">
      <div className="flex items-center">
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 mr-2" />
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500 mr-2" />
        <div
          className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 cursor-pointer"
          onClick={closeBtnAction}
          // do same on escape key press
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeBtnAction();
            }
          }}
        />
      </div>
    </div>
  );
}

export default WindowButtons;
