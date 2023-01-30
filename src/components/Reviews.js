
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

function Reviews({review}) {
    const [open, setOpen] = useState(false);

  return (
    <>  

    <Button className='mt-2'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
            {
                review.map(item=>
                    <div>
                        <Card body style={{width:'400px'}}>
                            <h6>{item.name} {item.date}</h6>
                            <h6>{item.rating}</h6>
                            <p>{item.comments}</p>
                        </Card>
                    </div>
                )
            }
         
        </div>
      </Collapse>    
    </>
  )
}

export default Reviews
