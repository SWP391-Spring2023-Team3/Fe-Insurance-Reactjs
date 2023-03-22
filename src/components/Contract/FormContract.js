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
const FormContract = (props) => {
    const [title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [issuedDate, setIssuedDate] = useState("")
    const [resovelDate, setResovelDate] = useState("")
    const [status, setStatus] = useState("Processing")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleIssuedDate = (e) => {
        setIssuedDate(e.target.value)
    }
    const handleResovelDate = (e) => {
        setResovelDate(e.target.value)
    }
    const handleAddContract = () => {
        props.addContract({
            title: title,
            description: Description,
            issuedDate: issuedDate,
            resolvedDate: resovelDate,
            status:status
        })
    }
    const handleUpdateContract = () => {
        props.updateContract({
            id: props.data.id,
            title: title,
            description: Description,
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
            setDescription(props.data.description)
            setIssuedDate(props.data.start_date)
            setResovelDate(props.data.end_date)
        }
    }, [])
    const [link, setLink] = useState("")

    const handleLink = (e) => {
        setLink(e.target.value)
    }

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
                        <label>Description</label>
                        <div className="form-group pass_show">
                            <input value={Description} onChange={handleDescription} type="text" className="form-control" placeholder="Enter Description" name="email" />
                        </div>
                        <label>Start Date</label>
                        <div className="form-group pass_show">
                            <input value={issuedDate} onChange={handleIssuedDate} type="date" className="form-control" name="email" />
                        </div>
                        <label>End Date</label>
                        <div className="form-group pass_show">
                            <input value={resovelDate} onChange={handleResovelDate} type="date" className="form-control" name="email" />
                        </div>
                        <label>Link</label>
                        <div className="form-group pass_show">
                            <input value={link} onChange={handleLink} type="file" className="form-control" placeholder="Enter Title" name="email" />
                        </div>
                        <label>Status</label>
                        <select onChange={handleStatus}>
                            <option value="Processing">Processing</option>
                            <option value="Active">Active</option>
                            <option value="Not Active">Not Active</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.handlePopup} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary"
                            onClick={checkUpdate ? handleUpdateContract : handleAddContract}
                        >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormContract