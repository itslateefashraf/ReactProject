interface props{
    onChange:()=>void;
}

const Button = ({onChange}:props) => {
  return (
    <button className='btn btn-danger mt-2 mx-4'onClick={onChange}>Click</button>
  )
}

export default Button;