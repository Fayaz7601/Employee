import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';


function Edit() {
  const [id, setId] = useState(0)
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState(0)

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")))
    setUname(localStorage.getItem("uname"))
    setAge(JSON.parse(localStorage.getItem("age")))
    setDesig(localStorage.getItem("desig"))
    setSalary(JSON.parse(localStorage.getItem("salary")))

  }, [])


  var index = employee.map((item) => item.id).indexOf(id)
  let history = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()

    let emp = employee[index]
    emp.name = uname
    emp.age = age
    emp.desig = desig
    emp.salary = salary

    history('/')
  }


  // console.log(id);
  // console.log(uname);
  // console.log(salary);

  return (
    <>
      <h1 className='text-center text-warning p-3 mt-3'>Edit details of employee</h1>
      <div className='text-center p-2 fs-5'>
        <p >cjnenjncncue ndundwdiwdiw nnnoidwiojdqoji didijdejidqidm </p>
      </div>
      <Container>
        <Row>
          <Col md={4}>
            <img className='w-100 mt-5'
              src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' />

          </Col>

          <Col md={8}>
            <Form className='border p-5'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control value={uname} type="text" placeholder="Name" onChange={(e) => setUname(e.target.value)} />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control value={age} type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control value={desig} type="text" placeholder="Designation" onChange={(e) => setDesig(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control value={salary} type="text" placeholder="salary" onChange={(e) => setSalary(e.target.value)} />
              </Form.Group>

              <Button onClick={(e) => handleUpdate(e)} variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>



  )
}

export default Edit
