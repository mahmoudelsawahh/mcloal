// import ProdcutCard from "../ProductCard";
import SimilarItems from "../ProductDetails/SimilarItrms";
const NewlyAdd = () => {
  return (
    <div className="container margin_top">
      <h2 className="main_two">Newly Added</h2>
      {/* <div className="grid_layout">
        <ProdcutCard count={3} />
        <ProdcutCard count={5} />
        <ProdcutCard count={4} />
        <ProdcutCard count={5} />
        <ProdcutCard count={3} />
      </div> */}

      <SimilarItems />
    </div>
  );
};

export default NewlyAdd;
