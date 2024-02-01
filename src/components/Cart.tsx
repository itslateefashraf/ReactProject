interface props{
  CartItem:string[];
  Onclear:()=>void;
}

const Cart = ({CartItem,Onclear }: props) => {
  return (
    <>
      <div className="">Cart</div>
      <ul>
        {CartItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-outline-danger mx-4" onClick={Onclear}>Clear</button>
    </>
  );
};

export default Cart;
