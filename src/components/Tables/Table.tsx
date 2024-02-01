import "../Table.scss";

interface student {
  id:number;
  name: string;
  fullName: string;
  class: number;
  address: string;
}
interface props {
  lists: student[];
  onDelete: (id:number) => void;
}

const Table = ({ lists, onDelete }: props) => {
  return (
    <div className="container">
      <table className="std-detail table table-bordered  mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>FullName</th>
            <th>CLass</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.id}>
              <td>{list.name}</td>
              <td>{list.fullName}</td>
              <td>{list.class}</td>
              <td>{list.address}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(list.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
