import { ReactNode } from "react";
interface props {
  children: ReactNode;
  OnClose: () => void;
}
const Alert = ({children,OnClose}: props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible p-4 m-4 ">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={OnClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
