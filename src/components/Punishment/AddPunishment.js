import React from 'react'


const AddPunishment = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Reset password</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <form >
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
    )
}

export default AddPunishment