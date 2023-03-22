import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListCompensation, fetchCreateCompensation, fetchDeleteCompensation, fetchUpdateCompensation } from '../../store/reducers/compensationReducer'
import FormCompensation from './FormCompensation'
import { store } from '../../store/store'
import { useSelector } from 'react-redux'

const Style = {
    addCompensation: {
        height: "50px",
        backgroundColor: "green",
        border: "none",
        marginTop: "17px",
    }
}


const ListCompensation = (props) => {
    const dispatch = useDispatch()

    const [PopupCompensation, setPopupCompensation] = useState(false)
    const [Compensations, setCompensations] = useState([])
    const [dataUppdate, setDataUpdate] = useState(null)
    const [isFetch, setIsFetch] = useState(false)

    const stateCompensations = useSelector((state) => state.listCompensationData)
    useEffect(() => {
        const user = store.getState().userData.data
        dispatch(fetchListCompensation({ access_token: user.access_token }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if (stateCompensations.data != null) {
            setCompensations(stateCompensations.data)
        }
    }, [stateCompensations])

    const addCompensation = (item) => {
        console.log("item", item)
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreateCompensation({
            access_token: accessToken,
            data: {
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
                status: item.status
            }
        }))
        handlePopupCompensation()
        setIsFetch(true)
    }

    const handlePopupCompensation = (item) => {
        setDataUpdate(item)
        setPopupCompensation(!PopupCompensation)
    }

    const deleteCompensation = (id) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchDeleteCompensation({
            access_token: accessToken,
            id: id,
        }))
        setIsFetch(true)
    }
    const updateCompensation = (item) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchUpdateCompensation({
            access_token: accessToken,
            id: item.id,
            data: {
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
                status: item.status,
            }
        }))
        handlePopupCompensation()
        setIsFetch(true)
    }
    return (
        <div className="col-md-10">
            {props.isAdmin ? <button type="button" style={Style.addCompensation} className="btn btn-primary"
                onClick={handlePopupCompensation}
            >Add new Compensation</button> : <button type="button" style={Style.addCompensation} className="btn btn-primary"
                onClick={handlePopupCompensation}
            >Request new Compensation</button>}
            {PopupCompensation ? <FormCompensation title={"Compensation"}
                handlePopup={handlePopupCompensation} addCompensation={addCompensation} data={dataUppdate}
                updateCompensation={updateCompensation} /> : ""}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Issued Date</th>
                        <th scope="col">Resolved Date</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {Compensations.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.reason}</td>
                            <td>{item.issued_date}</td>
                            <td>{item.resolved_date}</td>
                            <td>{item.status}</td>
                            {props.isAdmin ? <td style={{ display: "flex", justifyContent: "space-around" }}>
                                <button onClick={() => handlePopupCompensation(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deleteCompensation(item.id)} type="button" className="btn btn-danger">Delete</button>
                                <button type="button" className="btn btn-danger" style={{ backgroundColor: "#43e2ae", borderColor: "#43e2ae" }}><a  href={require('../File/contract-1.pdf')}  style={{color:"white"}}>View</a></button>
                            </td> : <td style={{ display: "flex", justifyContent: "space-around" }}>
                                <button type="button" className="btn btn-danger" style={{ backgroundColor: "#43e2ae", borderColor: "#43e2ae" }}><a  href={require('../File/contract-1.pdf')}  style={{color:"white"}}>View</a></button>
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

export default ListCompensation