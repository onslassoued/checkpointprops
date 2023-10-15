import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Player({info}) {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={info.img} className='img'/>
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>
          {info.nationality}
        </Card.Text>
        <Button variant="primary">{info.age}</Button>
      </Card.Body>
    </Card>
  );
}

export default Player ;