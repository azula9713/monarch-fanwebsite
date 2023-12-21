import "../../assets/css/MonarchLoader.css";

function MonarchLoader() {
  return (
    <div className="w-full h-[calc(100vh-250px)] items-center justify-center flex flex-col m-12 p-12">
      <div className="monarch-loader relative min-w-[200px] w-full max-w-[400px] h-[70px]" />
    </div>
  );
}

export default MonarchLoader;
