import { Link } from "react-router-dom";
import "./Viruddhxi.scss";
interface props {
  listsItem: {label:string, link:string}[];
  title: string;
}

const Virrudhix = ({ listsItem, title }: props) => {
  return (
    <>
      <div className="nav-bar container-fluid ">
        <nav className="d-flex justify-content-around  align-items-center ">
        <div className=" logo">
          <img
            width={"200px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&usqp=CAU"
            alt=""
          />
        </div>

        <ul className="d-flex gap-4 list-unstyled">
          {listsItem.map((list,i) => (
            <>
           
              <li key={i} style={{ cursor: 'pointer' }}>
                <a style={{textDecoration:'none', color:'white'}} href={list.link}>{list.label}</a>
              </li>
            
          </>
          ))}
        </ul>
        </nav>
        <div className="title">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};

export default Virrudhix;
