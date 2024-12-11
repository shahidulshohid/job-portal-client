import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {title, company, deadline} = useLoaderData()
    return (
        <div>
            <h2 className="text-3xl">Job details for: {title}</h2>
            <p>Apply for: {company}</p>
            <p>Dead Line{deadline}</p>
            <button className="btn btn-primary">Apply Now</button>
        </div>
    );
};

export default JobDetails;