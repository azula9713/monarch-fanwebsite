type Props = {
  imageUrl: string;
  closeImageViewer: () => void;
};

function FullSizeImageViewer({ imageUrl, closeImageViewer }: Readonly<Props>) {
  return (
    <div className="absolute top-[40px] left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <div
        className="absolute top-0 right-5 w-8 h-8 flex items-center justify-center cursor-pointer"
        onClick={closeImageViewer}
        onKeyDown={closeImageViewer}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <div className="w-full md:w-[80%] h-full flex items-center justify-center">
        <img
          src={imageUrl}
          alt="full size"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default FullSizeImageViewer;
