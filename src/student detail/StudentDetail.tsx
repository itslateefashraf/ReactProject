import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// interface props {
//   id: number;
//   name: string;
//   email: string;
//   dob: Date;
//   gender: string;
// }

const StudentDetail = () => {
  const [students, setStudents] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    let stdarray: any = localStorage.getItem("students");
    if (stdarray == null) {
      stdarray = [];
    } else {
      stdarray = JSON.parse(stdarray);
    }
    setStudents(stdarray);
  }, [load]);

  

  const DeleteStudent = (name: string) => {
    let filterdStudent = students.filter(
      (student:any) => student.fullName !== name
    );
    localStorage.setItem("students", JSON.stringify(filterdStudent));
    setLoad((e) => !e);
  };

  const  selectedGenderAction = (value:string) =>{
    console.log('lateef',value.toLowerCase());
    console.log(students);
    let lsstudents=[]
    let lsstud =localStorage.getItem("students")
    if( lsstud !== null){
      lsstudents=JSON.parse(lsstud)
    } 
    if(value == 'All'){
      setStudents(lsstudents)
    }else{
      let filterdStudents = lsstudents.filter((student:any) => student.gender === value.toLowerCase())
      console.log('filted S',filterdStudents)
      setStudents(filterdStudents)
    }
  }

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="text-center mb-4">Student Detail</h2>

          <select className="form-select mb-3" aria-label="Default select example"
            onChange={(e)=> selectedGenderAction(e.target.value)}
            >
              <option defaultValue={'All'}>All </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              
            </select>

          <table className="table table-borderd">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student: any,i) => (
                <tr key={i}>
                  <td>{student.fullName}</td>
                  <td>{student.email}</td>
                  <td>{student.dob}</td>
                  <td>{student.gender}</td>
                  <td>
                    <button
                      className="btn btn-danger ms-3"
                      onClick={() => DeleteStudent(student.fullName)}
                    >
                      Delete
                    </button>
                  </td>

                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
