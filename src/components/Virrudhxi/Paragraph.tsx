import  { ReactNode } from 'react'
interface props{
    children:ReactNode;
}

const Paragraph = ({children}:props) => {
  return (
    <div className='container my-4'>{children}</div>
  );
};

export default Paragraph;