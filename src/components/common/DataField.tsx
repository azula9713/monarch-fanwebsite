type Props = {
  propTitle: string;
  propValue: string;
  valueColor?: string;
};

function DataField({
  propTitle,
  propValue,
  valueColor = "#fff",
}: Readonly<Props>) {
  return (
    <div className="flex xxs:flex-wrap xs:flex-row items-start xxs:justify-start xxs:items-center w-full ">
      <div className="text-monarch uppercase font-bold tracking-wider mr-2">
        {propTitle}:
      </div>
      <div
        className="uppercase font-bold tracking-wider"
        style={{
          color: valueColor,
        }}
      >
        {propValue}
      </div>
    </div>
  );
}

export default DataField;
