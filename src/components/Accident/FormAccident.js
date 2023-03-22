import React from 'react'
import { useState, useEffect } from 'react'


const styles = {
    modal: {
        position: "absolute",
        top: "26px",
        left: "23%",
        width: "600px",
        maxWidth: "none",
    }
}
const FormAccident = (props) => {
    const [title, setTitle] = useState("")
    const [reason, setReason] = useState("")
    const [issuedDate, setIssuedDate] = useState("")
    const [resovelDate, setResovelDate] = useState("")
    const [status, setStatus] = useState("Active")
    const [link, setLink] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleReason = (e) => {
        setReason(e.target.value)
    }
    const handleIssuedDate = (e) => {
        setIssuedDate(e.target.value)
    }
    const handleResovelDate = (e) => {
        setResovelDate(e.target.value)
    }    
    const handleLink = (e) => {
        setLink(e.target.value)
    }
    console.log(status)
    const handleAddAccident = () => {
        
        props.addAccident({
            title: title,
            reason: reason,
            issuedDate: issuedDate,
            resolvedDate: resovelDate,
            status:status
        })
    }
    const handleUpdateAccident = () => {
        props.updateAccident({
            id: props.data.id,
            title: title,
            reason: reason,
            issuedDate: issuedDate,
            resolvedDate: resovelDate,
            status: status
        })
    }
    const handleStatus = (e) => {
        setStatus(e.target.value );
    }

    let checkUpdate = props.data.id != null

    useEffect(() => {
        if (checkUpdate) {
            setTitle(props.data.title)
            setReason(props.data.reason)
            setIssuedDate(props.data.issued_date)
            setResovelDate(props.data.resolved_date)
        }
    }, [])


    return (
        <div className="modal-dialog" style={styles.modal}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                    <button
                        onClick={props.handlePopup}
                        type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div>
                    <div className="modal-body">
                        <label>Title</label>
                        <div className="form-group pass_show">
                            <input value={title} onChange={handleTitle} type="text" className="form-control" placeholder="Enter Title" name="email" />
                        </div>
                        <label>Reason</label>
                        <div className="form-group pass_show">
                            <input value={reason} onChange={handleReason} type="text" className="form-control" placeholder="Enter Reason" name="email" />
                        </div>
                        <label>Date Issued</label>
                        <div className="form-group pass_show">
                            <input value={issuedDate} onChange={handleIssuedDate} type="date" className="form-control" name="email" />
                        </div>
                        <label>Date Resovel</label>
                        <div className="form-group pass_show">
                            <input value={resovelDate} onChange={handleResovelDate} type="date" className="form-control" name="email" />
                        </div>
                        <label>Link</label>
                        <div className="form-group pass_show">
                            <input value={link} onChange={handleLink} type="file" className="form-control" placeholder="Enter Title" name="email" />
                        </div>
                        <label>Status</label>
                        <select onChange={handleStatus}>
                            <option value="Active">Active</option>
                            <option value="Not Active">Not Active</option>
                            <option value="doing">doing</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.handlePopup} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary"
                            onClick={checkUpdate ? handleUpdateAccident : handleAddAccident}
                        >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAccident