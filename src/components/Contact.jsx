import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img-svg'

function Contact() {
    const formInitialDetails = {
        firstName:'',
        lasName:'',
        email:'',
        phone:'',
        message:''
    }
    const[formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Seding...')
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json;charset=utf-8'
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText('Send')
        let result = response.json()
        setFormDetails(formInitialDetails)
        if(result.code === 200) {
            setStatus({success: true, message: 'Message sent successfully'})
        }else {
            setStatus({success: false, message: 'Something went wrong, please try again later.'})
        }

    }

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us' />
                </Col>
                <Col md={6}>
                    <h2>
                        Get In Touch
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='first Name' onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                                 <input type='text' value={formDetails.lastName} placeholder='last Name' onChange= {(e) => onFormUpdate('lastName', e.target.value)}></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                                 <input type='email' value={formDetails.email} placeholder='Email Address' onChange= {(e) => onFormUpdate('email', e.target.value)}></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                                 <input type='tel' value={formDetails.phone} placeholder='last Name' onChange= {(e) => onFormUpdate('phone', e.target.value)}></input>
                            </Col>
                            <Col>
                                <textarea row='6' value={formDetails.message} placeholder='Message'  onChange= {(e) => onFormUpdate('message', e.target.value)}/>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.sucess === false ? 'danger' : 'success'}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Contact
