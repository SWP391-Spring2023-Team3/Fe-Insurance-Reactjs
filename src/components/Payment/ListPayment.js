import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListPayment, fetchCreatePayment, fetchDeletePayment, fetchUpdatePayment } from '../../store/reducers/paymentReducer'
import FormPayment from './FormPayment'
import { store } from '../../store/store'
import { useSelector } from 'react-redux'

const Style = {
    addPayment: {
        height: "50px",
        backgroundColor: "green",
        border: "none",
        marginTop: "17px",
    }
}


const ListPayment = (props) => {
    const dispatch = useDispatch()

    const [PopupPayment, setPopupPayment] = useState(false)
    const [Payments, setPayments] = useState([])
    const [dataUppdate, setDataUpdate] = useState(null)
    const [isFetch, setIsFetch] = useState(false)

    const statePayments = useSelector((state) => state.listPaymentData)
    useEffect(() => {
        const user = store.getState().userData.data
        dispatch(fetchListPayment({ access_token: user.access_token }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if (statePayments.data != null) {
            setPayments(statePayments.data)
        }
    }, [statePayments])

    const addPayment = (item) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreatePayment({
            access_token: accessToken,
            data: {
                title: item.title,
                amount: item.amount,
                issuedDate: item.issuedDate,
                description: item.description,
            }
        }))
        handlePopupPayment()
        setIsFetch(true)
    }

    const handlePopupPayment = (item) => {
        setDataUpdate(item)
        setPopupPayment(!PopupPayment)
    }

    const deletePayment = (id) => {
        if (window.confirm("Delete the item?")) {
            const accessToken = store.getState().userData.data.access_token
            dispatch(fetchDeletePayment({
                access_token: accessToken,
                id: id,
            }))
            setIsFetch(true)
        }
    }
    const updatePayment = (item) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchUpdatePayment({
            access_token: accessToken,
            id: item.id,
            data: {
                title: item.title,
                amount: item.amount,
                issuedDate: item.issuedDate,
                description: item.description,
            }
        }))
        handlePopupPayment()
        setIsFetch(true)
    }
    return (
        <div className="col-md-10" style={{marginTop:"50px"}}>
            {props.isAdmin ? <button type="button" style={Style.addPayment} className="btn btn-primary"
                onClick={handlePopupPayment}
            >Add new Payment</button>:""}
            {PopupPayment ? <FormPayment title={"Payment"}
                handlePopup={handlePopupPayment} addPayment={addPayment} data={dataUppdate}
                updatePayment={updatePayment} /> : ""}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date Issued</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {Payments.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.amount}</td>
                            <td>{item.date_issued}</td>
                            <td>{item.description}</td>
                            {props.isAdmin ? <td style={{ display: "flex", justifyContent: "space-around" }}>
                                <button onClick={() => handlePopupPayment(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deletePayment(item.id)} type="button" className="btn btn-danger">Delete</button>
                                <button type="button" className="btn btn-danger" style={{ backgroundColor: "#43e2ae", borderColor: "#43e2ae" }}><a href={require('../File/contract-1.pdf')} style={{ color: "white" }}>View</a></button>
                            </td> : <td style={{ display: "flex", justifyContent: "space-around" }}>
                                <button type="button" className="btn btn-danger" style={{ backgroundColor: "#43e2ae", borderColor: "#43e2ae" }}><a href={require('../File/contract-1.pdf')} style={{ color: "white" }}>View</a></button>
                                <button type="button" className="btn btn-danger" style={{ backgroundColor: "#ad43e2", borderColor: "#ad43e2" }}>Renew </button>
                            </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPayment