import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux"
const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([])
  const favJobsArray = useSelector(state => state.favList.content)

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <h2>Favourites:</h2>
          {favJobsArray.map((job, index) => {
            return (
              <div key={index}>
                <a href={job.url} target="_blank" rel="noreferrer">
                  {job.title}
                </a>
                <br />
                <a href={job.company_url} target="_blank" rel="noreferrer">
                  {job.company_name}
                </a>
              </div>
            )
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
