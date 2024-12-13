import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";

const AddJob = () => {
  const navigate = useNavigate()
  const {user} = useAuth()

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData)
    const { min, max, currency, ...newJob } = initialData;
    // console.log(newJob)
    newJob.salaryRange = { currency, min, max };
    newJob.requirements = newJob.requirements.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Job has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };
  return (
    <div>
      <h2>Post a new job</h2>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddJob} className="card-body">
          {/* job title  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              className="input input-bordered"
              required
            />
          </div>
          {/* job location  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered"
              required
            />
          </div>
          {/* job type  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job type</span>
            </label>
            <select defaultValue="Pick a job type"
              name="jobType"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>
                Pick a job type
              </option>
              <option>Full-Time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          {/* job category  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Filed</span>
            </label>
            <select
              name="jobCategory" defaultValue="Pick a job field"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>
                Pick a job field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
          {/* Salary Range */}
          <p>Salary Range</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
            <select
              name="currency" defaultValue="Currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>
                Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
          {/* job description  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Job description"
              name="description"
              required
            ></textarea>
          </div>
          {/* company name  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* job requirements  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Put each requirements in a new line"
              name="requirements"
              required
            ></textarea>
          </div>
          {/* job responsibilities  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write each Responsibilities in a new line"
              name="responsibilities"
              required
            ></textarea>
          </div>
          {/* HR name  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* HR email  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              placeholder="HR Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* application Deadline  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          {/* company logo url  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo"
              className="input input-bordered"
              required
            />
          </div>
          {/* submit btn  */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
