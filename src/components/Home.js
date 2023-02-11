import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';

function Home() {
    
    let history=useNavigate()
    const handleDelete=(id)=>{
        // creatin array of ids
      let index=employee.map(item=>item.id).indexOf(id)
      employee.splice(index,1)

      history('/')
    }

    const handleEdit=(id,uname,age,desig,salary)=>{
        localStorage.setItem("id",JSON.stringify(id))
        localStorage.setItem("uname",uname)
        localStorage.setItem("age",JSON.stringify(age))
        localStorage.setItem("desig",desig)
        localStorage.setItem("salary",JSON.stringify(salary))
    }

    return (
        <>
            <h1 className='text-center p-5 mt-3'>Employee Management system</h1>
            <div className='text-center'>
                <p className='p-3'>Watch out!  elements don't naturally support a disabled attribute. In browsers that support it this is handled with a point-events: none style but not all browsers support it yet.

                    React Bootstrap will prevent any onClick handlers from firing regardless of the rendered element.</p>
                <Link to='/add'>
                    <Button className='p-3' variant="outline-success">Add New Employee <i class="fa-solid fa-user-plus"></i></Button>{' '}
                </Link>
                <Table striped bordered hover style={{ margin: '7rem', width: "85%" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee && employee.length > 0 ?
                                employee.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.desig}</td>
                                        <td>{item.salary}</td>
                                        <td>
                                            <Link to='/edit'>
                                                <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} className='ms-2 me-3' variant="info"><i class="fa-solid fa-pen"></i></Button>{' '}
                                            </Link>
                                            <Button onClick={()=>handleDelete(item.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button>{' '}
                                        </td>
                                    </tr>
                                )) : 'no table data'
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Home
