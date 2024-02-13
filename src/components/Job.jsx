import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Job = ({ data }) => {
  const favCompany = useSelector(state => state.favList);

  const dispatch = useDispatch()

  const checkIfFavourite = () => {
    for (let index = 0; index < favCompany.length; index++) {
    if(favCompany[index].company_name === data.company_name){
    return true
    }      
    return false
  }
  }

  const addCompanyToFav = () => {
    dispatch({type: 'ADD_TO_FAVLIST', payload: data})
    console.log(data)
    console.log(favCompany)
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className='d-flex flex-column align-items-start'>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <Button className='p-0 my-1' onClick={addCompanyToFav}>
        {checkIfFavourite() ? "Remove from favourites" : "Add to favourites"}
      </Button>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>

      </Col>
    </Row>
  )
}

export default Job
