import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListPayment, fetchCreatePayment, fetchDeletePayment ,fetchUpdatePayment} from '../../store/reducers/paymentReducer'
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

    const statePayments = useSelector((state) => state.listPaymentData);
    useEffect(() => {
        console.log("get list")
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchListPayment({ access_token: accessToken }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if (statePayments.data != null) {
            setPayments(statePayments.data)
        }
    }, [statePayments])

    const addPayment = (item) => {
        console.log("item", item)
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreatePayment({
            access_token: accessToken,
            data: {
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
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
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchDeletePayment({
            access_token: accessToken,
            id: id,
        }))
        setIsFetch(true)
    }
    const updatePayment = (item) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchUpdatePayment({
            access_token: accessToken,
            id: item.id,
            data: {
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
            }
        }))
        setIsFetch(true)
    }
    return (
        <div className="col-md-10">
            <button type="button" style={Style.addPayment} className="btn btn-primary"
                onClick={handlePopupPayment}
            >Add new Payment</button>
            {PopupPayment ? <FormPayment title={"Add New Payment"}
                handlePopup={handlePopupPayment} addPayment={addPayment} data={dataUppdate}
                updatePayment={updatePayment} /> : ""}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tile</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Issued Date</th>
                        <th scope="col">Resolved Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Payments.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>in</td>
                            <td>Otto</td>
                            <td>{item.issued_date}</td>
                            <td>{item.resolved_date}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handlePopupPayment(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deletePayment(item.id)} type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPayment