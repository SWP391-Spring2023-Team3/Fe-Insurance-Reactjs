import React, { useState } from "react";


const UserSite = () => {
    



    return (
        <div>
            <div style={{ top: 0, width: '100%', backgroundColor: '#222222', display: 'flex', justifyContent: 'space-between' }}>
                <h2 style={{ color: 'white' }}>Welcome User</h2>
                <div>
                    {/* button modale */}
                    <button type="button" className="btn btn-outline-info" style={{ margin: '3px' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Change password
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Reset password</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <form action method="post">
                                    <div className="modal-body">
                                        <label>Email</label>
                                        <div className="form-group pass_show">
                                            <input type="text" className="form-control" placeholder="Enter Email" name="email" />
                                        </div>
                                        <label>New Password</label>
                                        <div className="form-group pass_show">
                                            <input type="password" className="form-control" placeholder="New Password" name="newpassword" />
                                        </div>
                                        <label>Confirm Password</label>
                                        <div className="form-group pass_show">
                                            <input type="password" className="form-control" placeholder="Confirm Password" name="confirmpassword" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save
                                            changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* End modal */}
                    <a href="/home" className="btn btn-outline-info" style={{ margin: '3px' }}>Logout</a>
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <div className="row">
                    <div className="col-md-3" style={{ height: '90vh', backgroundColor: '#d8fbfd9d' }}>
                        <div style={{ borderBottom: '1px lightgray solid', width: '100%', textAlign: 'center', padding: '5px' }}>
                            <a href="/profile" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>Profile</a>
                        </div>
                        <div style={{ borderBottom: '1px lightgray solid', width: '100%', textAlign: 'center', padding: '5px' }}>
                            <a href="/contract" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>Contract</a>
                        </div>
                        <div style={{ borderBottom: '1px lightgray solid', width: '100%', textAlign: 'center', padding: '5px' }}>
                            <a href="/punishment" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>Punishment</a>
                        </div>
                        <div style={{ borderBottom: '1px lightgray solid', width: '100%', textAlign: 'center', padding: '5px' }}>
                            <a href="/compensation" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>Compensation</a>
                        </div>
                        <div style={{ borderBottom: '1px lightgray solid', width: '100%', textAlign: 'center', padding: '5px' }}>
                            <a href="/request-compensation" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>Request Compensation</a>
                        </div>
                        <div style={{ borderBottom: '1px lightgray solid', width: '100%', textAlign: 'center', padding: '5px' }}>
                            <a href="/accident" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>Accident</a>
                        </div>
                    </div>
                    {/* Page content*/}
                    <div className="col-md-10">
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserSite