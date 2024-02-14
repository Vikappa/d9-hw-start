import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import PreviousSearch from "./PreviousSearch";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getSearchResultsAction } from '../redux/action'

const MainSearch = () => {
  const [query, setQuery] = useState("");
  let jobs = useSelector(state => state.searchResults.lastSearch)
  const favJobsArray = useSelector(state =>state.favList.content);
  const searchResultArray = useSelector(state => state.searchResults.searchResults)
  const dispatch = useDispatch()



  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleDeleteFav = function (id) {
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
          {jobs.length>0?
          jobs.map((jobData, index ) => (
            index<20?<Job key={index} data={jobData} />:""
          ))
        :""}
        </Col>
        <Col xs={10} className={favJobsArray.length === 0 ? "d-none" : "mx-auto my-3"}>
          <h2>Favourite jobs:</h2>
          {favJobsArray?favJobsArray.map((job, index) => {
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
          }):""}
        </Col>

        <Col xs={10} className={searchResultArray.length === 0 ? "d-none" : "mx-auto my-3"}>

          <h2>Previous searches:</h2>
          <div className="d-flex flex-column">
          {searchResultArray?searchResultArray.map((array, index) => {
            return (
              <PreviousSearch key={index} data={{array, index}} />
              )
            }):""}
          </div>
        </Col>

      </Row>
    </Container>
  );
};


export default MainSearch;
