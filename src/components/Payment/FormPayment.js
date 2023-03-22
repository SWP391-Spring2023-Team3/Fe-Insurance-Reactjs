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
const FormPayment = (props) => {
    const [title, setTitle] = useState("")
    const [Amount, setAmount] = useState("")
    const [issuedDate, setIssuedDate] = useState("")
    const [resovelDate, setResovelDate] = useState("")
    const [Description, setDescription] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    const handleIssuedDate = (e) => {
        setIssuedDate(e.target.value)
    }
    const handleResovelDate = (e) => {
        setResovelDate(e.target.value)
    }
    console.log(Description)
    const handleAddPayment = () => {
        
        props.addPayment({
            title: title,
            amount: Amount,
            issuedDate: issuedDate,
            resolvedDate: resovelDate,
            description:Description
        })
    }
    const handleUpdatePayment = () => {
        props.updatePayment({
            id: props.data.id,
            title: title,
            amount: Amount,
            issuedDate: issuedDate,
            description: Description
        })
    }
    const handleDescription = (e) => {
        setDescription(e.target.value );
    }

    let checkUpdate = props.data.id != null

    useEffect(() => {
        if (checkUpdate) {
            setTitle(props.data.title)
            setAmount(props.data.amount)
            setIssuedDate(props.data.date_issued)
            setDescription(props.data.description)
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
                        <label>Amount</label>
                        <div className="form-group pass_show">
                            <input value={Amount} onChange={handleAmount} type="text" className="form-control" placeholder="Enter Amount" name="email" />
                        </div>
                        <label>Issued Date</label>
                        <div className="form-group pass_show">
                            <input value={issuedDate} onChange={handleIssuedDate} type="date" className="form-control" name="email" />
                        </div>
                        <label>Description</label>
                        <div className="form-group pass_show">
                            <input value={Description} onChange={handleDescription} type="text" className="form-control" placeholder="Enter description" name="email" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.handlePopup} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary"
                            onClick={checkUpdate ? handleUpdatePayment : handleAddPayment}
                        >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPayment