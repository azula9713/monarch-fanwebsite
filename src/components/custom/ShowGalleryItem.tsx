type Props = {
  image: string;
  showData: {
    id: number;
    title: string;
    description: string;
  };
};

function ShowGalleryItem({ image, showData }: Readonly<Props>) {
  return (
    <li
      className="item"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="content">
        <h2 className="uppercase font-oxanium text-xl lg:text-3xl">
          {showData.title}
        </h2>
        <p className="description font-oxanium">{showData.description}</p>
        <button>Read More</button>
      </div>
    </li>
  );
}

export default ShowGalleryItem;
