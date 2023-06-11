import Card from 'react-bootstrap/Card';
import '../assets/cards.css'
import Send from '../images/send.png'
import Recv from "../images/received.png";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function ImgOverlayExample() {
  const navi = useNavigate()
  return (
    <div className='parentCard'>
    <div className='mainCard'>
    <Card className="bg-dark text-white">
      <Card.Img src={Send} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Send</Card.Title>
        <Card.Text>
          Select files and start sharing for 30 minutes
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        <Button as="input" type="submit" value="Send" onClick={()=> navi('send')}/>
      </Card.ImgOverlay>
       
    </Card>
    </div>
    <div className='mainCard'>
    <Card className="bg-dark text-white">
      <Card.Img src={Recv} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Receive</Card.Title>
        <Card.Text>
          Receive the files or data
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        <Button as="input" type="submit" value="Recieve" onClick={()=> navi('receive')}/>
      </Card.ImgOverlay>
    </Card>
    </div>
    </div>
  );
}

export default ImgOverlayExample;
