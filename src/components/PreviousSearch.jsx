import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Job from './Job';
function PreviousSearch(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='text-start'
      >
        {props.data.index+1}
      </Button>
{props.data.array.map(
    (jobData, index) => (
        <Collapse id={index} in={open}>
        <div id="example-collapse-text">
          <Job key={index} data={jobData} />
        </div>
      </Collapse>
    )
)}
    </>
  );
}

export default PreviousSearch;