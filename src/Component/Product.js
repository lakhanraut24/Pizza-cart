const Product = (props) => {
  
  const list = props.productData.products;
  
  return (
    <>
      {
        
        
        list.map((dataval) => (



        <div>
          <img src={dataval.images} alt="pizza" />
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{dataval.title}</h2>
            <span className="bg-gray-300 py-1 rounded-full text-sm px-4" />
            small
          </div>
          <div className="flex  justify-between items-center mt-4">
            <span>₹ {dataval.price}</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
              Add
            </button>
          </div>
        </div>


      ))}



    </>
  );
};

export default Product;
