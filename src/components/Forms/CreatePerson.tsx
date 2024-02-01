import { useForm, FieldValues } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useEffect, useState } from "react";
const schema = z.object({
  name: z.string().min(3, {message: 'name must be atleast 3 characters'}),
  email: z.string().min(5, {message: 'email should be required'}),
  department:z.string()
});
type FormData = z.infer<typeof schema>;

interface Teacher{
  name:string;
  email:string;
  department:string;
}

const CreatePerson = () => {
  // const [name,setName]= useState('');
  // const [email,setEmail]= useState('');
  const [teachers,setTeachers]= useState([]);
  const [load,setLoad]=useState(false)
  // const nameRef = useRef<any>(null);
  // const emailRef = useRef<any>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm<FormData>({resolver: zodResolver(schema)});


  
  // const handle = ()=> {
  //     // if(nameRef.current.value == '' || emailRef.current.value == '' ){
  //     //     alert('name and email are mandatory');
  //     //     return;
  //     // }
  //     // let person= {name:nameRef.current.value,email:emailRef.current.value}
  //     // console.log(person)

  //     // saveUserInLocalStorage(person)

  // }
  useEffect(() => {
    let teacherArr:any = localStorage.getItem('teachers')
    if(teacherArr === null){
      teacherArr= []

    }else{
      teacherArr=JSON.parse(teacherArr)
    }
    setTeachers(teacherArr)
  },[load])
    


  const onSubmit = (data: FieldValues) => {
    console.log(data)

    let lsdata = localStorage.getItem('teachers');
    if(lsdata === null){
      localStorage.setItem('teachers',JSON.stringify([data]));
    }else{
      let techersArr = JSON.parse(lsdata)
      techersArr.push(data);
      localStorage.setItem('teachers',JSON.stringify(techersArr));
    }

    reset();
    setLoad(prev => !prev ) //responsible for executing useEffect call
  };

  // function saveUserInLocalStorage(person:any){
  //     localStorage.setItem('person',JSON.stringify(person));
  // }

  function DeleteTeacher(name:string){
    console.log('deleting teacher ', name);

    //filter teacher statevariable by name and find only 
    //those whos name is not equal to current
    let filteredTeachers = teachers.filter((teacher:Teacher) => teacher.name != name  )
    console.log('filtered array ',filteredTeachers)

    //set those filtered array in localstorage on same key
    localStorage.setItem('teachers',JSON.stringify(filteredTeachers))

    setLoad(prev => !prev )
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                {...register("name")} 
              /> 
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
             
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                {...register("email")}
              />
              { errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
             
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <select className="form-select mb-3" aria-label="Default select example"
            {...register("department")}
            >
              <option selected>Select Department</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="Computer">Computer</option>
              <option value="Urdu">Urdu</option>
              <option value="Kashmiri">Kashmiri</option>
            </select>
            <button  className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="mb-3">List of Teachers</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher:Teacher,index) => (
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.department}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={()=>DeleteTeacher(teacher.name)}>Delete</button>
                </td>
              </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatePerson;
