type Props = {
  title: string;
};

function Title({ title }: Readonly<Props>) {
  return (
    <h2 className="text-md lg:text-xl font-bold text-monarch uppercase">
      {title}
    </h2>
  );
}

export default Title;
