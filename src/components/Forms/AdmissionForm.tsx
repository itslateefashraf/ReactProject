import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
// import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useState } from "react";
// import { DeleteStudent } from './CreatePerson/AdmissionForm/StudentDetail'

const schema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name should be at Least 3 characters" }),
  email: z.string().min(2, { message: "Email shoud be Required" }),
  dob: z.string().min(2),
  gender: z.string().min(3),
});

type FormData = z.infer<typeof schema>;

const AdmissionForm = () => {
  const [alert, setAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  let onSubmit = (data: any) => {
    console.log(data);

    let lsdata = localStorage.getItem("students");
    console.log(lsdata);
    if (lsdata === null) {
      localStorage.setItem("students", JSON.stringify([data]));
    } else {
      let newstdarray = JSON.parse(lsdata);
      newstdarray.push(data);
      localStorage.setItem("students", JSON.stringify(newstdarray));
    }
    reset();
    setAlert(true);
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <h2 className="text-center mb-3">AdmissionForm</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              {alert == true && (
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Congrutalation!</strong> Your form has been submitted
                  sucessfully.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close "
                    onClick={() => setAlert(false)}
                  ></button>
                </div>
              )}

              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-danger">{errors.fullName.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                required
                {...register("dob")}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    value="male"
                    required
                    {...register("gender")}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="female"
                    value="female"
                    required
                    {...register("gender")}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
