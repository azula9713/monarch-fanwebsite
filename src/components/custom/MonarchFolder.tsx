import Folder1 from "../../assets/images/Folder1.png";
import Folder2 from "../../assets/images/Folder2.png";

type Props = {
  icon: "folder1" | "folder2";
  folderTitle: string;
};

function MonarchFolder({ icon, folderTitle }: Readonly<Props>) {
  return (
    <div className="flex flex-wrap items-center justify-center w-full space-x-2 cursor-pointer">
      <img
        src={icon === "folder1" ? Folder1 : Folder2}
        alt="folder"
        className="h-full object-cover w-[80px]"
      />

      <div className="text-monarch font-oxanium md:font-bold text-xs hover:underline">
        {folderTitle}
      </div>
    </div>
  );
}

export default MonarchFolder;
