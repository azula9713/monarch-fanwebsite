type Props = {
  title: string;
};

function ProfileCardTitle({ title }: Readonly<Props>) {
  return (
    <div className="bg-monarchSecondary xxs:text-xl md:text-3xl font-oxanium text-white uppercase font-bold tracking-wider px-2 w-full">
      {title}
    </div>
  );
}

export default ProfileCardTitle;
