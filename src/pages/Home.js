import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';

function Home() {

    const[name1, setName1] = useState("");
    const[name2, setName2] = useState("");
    const [result, setResult] = useState("");

    const calculateFlames = () =>
      {
      if (!name1 || !name2) {
      alert("Enter both names");
      return;
  }
        let fname = name1.toLowerCase().replace(/\s/g, '');
        let sname = name2.toLowerCase().replace(/\s/g, '');
        // Removing Common Letters
        for(let i = 0; i < fname.length; i++)
        {
            const char = fname[i];
            const index = sname.indexOf(char);
            if (index !== -1)
            {
                fname = fname.replace(char, '');
                sname = sname.slice(0, index) + sname.slice(index + 1);
                i--;
            }
        }

        let count = fname.length + sname.length;
        let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
        let index = 0;

        while (flames.length > 1)
        {
            index = (index + count - 1) % flames.length;
            flames.splice(index,1);
        }

        const fullForm = {
            F: "Friends",
            L: "Lovers",
            A: "Affection",
            M: "Marriage",
            E: "Enemies",
            S: "Siblings"
        };

        setResult(fullForm[flames[0]]);
    }

    const reload = () =>
    {
      setName1("");
      setName2("");
      setResult("");
    }

    const compliments = {
  Friends: "Friendship thaan soththu namakku 👬🔥",
  Lovers: "Yenga..na lam Poes Garden la veedu vaanga kudatha 😎🏠.",
  Affection: "One side-a lovvu pannithan Bore adikku thadi Double side-a love pannathan Romba naala ready❤️",
  Marriage: "Nalla muhurtham paarthu Kalayanam Fix pannikalam👰🤵",
  Enemies: "Rende rendu peruku tha potiye 😈🎯",
  Siblings: "Rathathin rathamae en iniya udan pirapae",
};
  return (
    <div>
        {/* Navigation Bar */}
        <Navbar className='custom-navbar' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FLAMES</Navbar.Brand>
        </Container>
      </Navbar>
      {/* Container */}
      <Container>
        <h1 className='fw-bold mt-5' style={{color:'#FF4A55'}}>Find Your Relationship</h1>

        {/* card */}
         <Card className='mt-5 p-5  col-md-7 mx-auto'>
      <Card.Body>
        <Row>
            <Col>
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="text" disabled={result} value={name1} onChange={(e)=>setName1(e.target.value)} placeholder="John doe" />
            </Col>
            <Col>
        <Form.Label>Enter Your Aalu Name</Form.Label>
        <Form.Control disabled={result} type="text" value={name2} onChange={(e)=>setName2(e.target.value)} placeholder="Emma William" />
            </Col>
        </Row>
        <div className='text-center'>
            <Button className='mt-5 btn-custom w-50'onClick={calculateFlames} disabled={result}>Find Out</Button>
        </div>

        {result && (
  <>
    <div className='p-3 mx-auto mt-5 rounded shadow' style={{backgroundColor : '#FF4A55'}}>
      <p className='text-center mt-4 fw-bold fs-5 text-light'>
        The relationship between {name1} and {name2} will end in {result}
      </p>
    </div>
      <p className='text-center mt-3 text-secondary fw-bold'>
        {compliments[result]}
      </p>
    <div className='text-center'>
      <Button className='mt-5 btn-custom' onClick={reload}>Try Again</Button>
    </div>
  </>
)}
            
      </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Home