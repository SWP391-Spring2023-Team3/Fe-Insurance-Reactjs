import React, { useState } from "react";


const PunishmentHistory = () => {
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
                                    <th scope="col">category</th>
                                    <th scope="col">money</th>
                                    <th scope="col">detail</th>
                                    <th scope="col">date payment</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>delay motobike</td>
                                    <td>100000</td>
                                    <td>this is about ...</td>
                                    <td>10-10-2022</td>
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

export default PunishmentHistory
