import React, { useState } from "react";


const CompensationHistory = () => {
    return (
        
        <div>
            <div style={{ top: 0, width: '100%', backgroundColor: '#222222', display: 'flex', justifyContent: 'space-between' }}>
                <a href="/usersite" className="btn btn-light">Back usersite</a>
                <h2 style={{ color: 'aqua' }}>User List</h2>
            </div>
            <div style={{ width: '100%' }}>
                <div className="row">
                    {/* Page content*/}
                    <div className="col-md-10">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date Create</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>12-12-2021</td>
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

export default CompensationHistory
