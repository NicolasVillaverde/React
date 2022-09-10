const ItemDetail = ({ item }) => {
  return (
    <div className="flex justify-center gap-4">
      <div className=" w-1/4 h-64">
        <img src={item.img} alt="" className="" />
      </div>
      <div className="w-1/3 flex flex-col gap-9 ">
        <h1 className=" font-poppins font-bold text-3xl">{item.title}</h1>
        <p className=" font-poppins ">{item.description}</p>
        <p className="font-poppins font-bold  border-2 p-1 text-2xl">${item.price}</p>
      </div>
    </div>
  );
};
export default ItemDetail;
