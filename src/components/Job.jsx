import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Job = ({ data }) => {
  const favJobs = useSelector(state => state.favList);

  const dispatch = useDispatch()

  const checkIfFavourite = () => {
    for (let index = 0; index < favJobs.length; index++) {
    if(favJobs[index]._id === data._id){
    return true
    }      
    return false
  }
  }

  const addCompanyToFav = () => {
    // console.log(data)
    // console.log(favJobs)
    dispatch({type: 'ADD_TO_FAVLIST', payload: data})
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button className='p-0 m-2' onClick={addCompanyToFav}>
        {checkIfFavourite() ? "Remove from favourites" : "Add to favourites"}
      </Button>
      </Col>
    </Row>
  )
}

export default Job
