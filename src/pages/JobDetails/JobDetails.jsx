import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {_id, title, company, deadline} = useLoaderData()
    return (
        <div>
            <h2 className="text-3xl">Job details for: {title}</h2>
            <p>Apply for: {company}</p>
            <p>Dead Line{deadline}</p>
            <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;