import React, { useState } from "react";


const UserList = () => {
    return (
        
        <div>
            <div style={{ top: 0, width: '100%', backgroundColor: '#222222', display: 'flex', justifyContent: 'space-between' }}>
                <a href="/adminsite" className="btn btn-light">Back admin site</a>
                <h2 style={{ color: 'aqua' }}>User List</h2>
            </div>
            <div style={{ width: '100%' }}>
                <div className="row">
                    <div className="col-md-2" style={{ height: '90vh', backgroundColor: '#d8fbfd9d' }}>
                        <div style={{ borderBottom: '1px lightgray solid', width: '100%', textAlign: 'center', padding: '5px' }}>
                            <a href="Userlist.html" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>User List</a>
                        </div>
                    </div>
                    {/* Page content*/}
                    <div className="col-md-10">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Control</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Edit</button>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default UserList
