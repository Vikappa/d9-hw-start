import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getSearchResultsAction } from '../redux/action'

const MainSearch = () => {
  const [query, setQuery] = useState("");
  let jobs = useSelector(state => state.searchResults.searchResults)
  const favJobsArray = useSelector(state => state.favList.content)
  const searchResultArray = useSelector(state => state.searchResults.content)
  const dispatch = useDispatch()



  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleDeleteFav = function (id) {
    console.log(id)
    dispatch({ type: 'REMOVE_FROM_FAVLIST', payload: id })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(getSearchResultsAction(query))
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
        <Col xs={10} className={favJobsArray.length === 0 ? "d-none" : "mx-auto my-3"}>
          <h2>Favourite companies:</h2>
          {favJobsArray.map((job, index) => {
            return (

              <div key={index} className="d-flex border border-2 border-primary rounded-3 p-2 my-2">
                <div>

                  <a href={job.url} target="_blank" rel="noreferrer">
                    {job.title}
                  </a>
                  <br />
                  <Link to={`/${job.company_name}`}>
                    <p target="_blank" rel="noreferrer">{job.company_name}</p>
                  </Link>
                </div>
                <Button variant="danger" className='p-0 m-2 ms-auto' onClick={() => { handleDeleteFav(job._id) }}>Delete</Button>
              </div>
            )
          })}
        </Col>
      </Row>
    </Container>
  );
};


export default MainSearch;
