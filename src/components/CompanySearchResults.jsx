import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import {Button} from "react-bootstrap";
import { useSelector } from "react-redux";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const favCompanies = useSelector(state => state.favList);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  const addCompanyToFav = () =>{

  }

  const checkIfFavourite = function() {
for (let index = 0; index < favCompanies.length; index++) {
  const element = favCompanies[index];  
}
    return false
  }
  

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
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
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Button
          onClick={addCompanyToFav()}
          >{checkIfFavourite()?"Remove from favourites":"Add to favourites"}</Button>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
