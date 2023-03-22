import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListPunishment, fetchCreatePunishment, fetchDeletePunishment, fetchUpdatePunishment } from '../../store/reducers/punishmentReducer'
import FormPunishment from './FormPunishment'
import { store } from '../../store/store'
import { useSelector } from 'react-redux'

const Style = {
    addPunishment: {
        height: "50px",
        backgroundColor: "green",
        border: "none",
        marginTop: "17px",
    }
}


const ListPunishment = (props) => {
    const dispatch = useDispatch()

    const [PopupPunishment, setPopupPunishment] = useState(false)
    const [Punishments, setPunishments] = useState([])
    const [dataUppdate, setDataUpdate] = useState(null)
    const [isFetch, setIsFetch] = useState(false)

    const statePunishments = useSelector((state) => state.listPunishmentData)
    useEffect(() => {
        const user = store.getState().userData.data
        dispatch(fetchListPunishment({ access_token: user.access_token }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if (statePunishments.data != null) {
            setPunishments(statePunishments.data)
        }
    }, [statePunishments])

    const addPunishment = (item) => {
        console.log("item", item)
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreatePunishment({
            access_token: accessToken,
            data: {
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
                status: item.status
            }
        }))
        handlePopupPunishment()
        setIsFetch(true)
    }

    const handlePopupPunishment = (item) => {
        setDataUpdate(item)
        setPopupPunishment(!PopupPunishment)
    }

    const deletePunishment = (id) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchDeletePunishment({
            access_token: accessToken,
            id: id,
        }))
        setIsFetch(true)
    }
    const updatePunishment = (item) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchUpdatePunishment({
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
        handlePopupPunishment()
        setIsFetch(true)
    }
    return (
        <div className="col-md-10">
            {props.isAdmin ? <button type="button" style={Style.addPunishment} className="btn btn-primary"
                onClick={handlePopupPunishment}
            >Add new Punishment</button>:<button type="button" style={Style.addPunishment} className="btn btn-primary"
                onClick={handlePopupPunishment}
            >Request new Punishment</button>}
            {PopupPunishment ? <FormPunishment title={"Punishment"}
                handlePopup={handlePopupPunishment} addPunishment={addPunishment} data={dataUppdate}
                updatePunishment={updatePunishment} /> : ""}
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
                    {Punishments.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.reason}</td>
                            <td>{item.issued_date}</td>
                            <td>{item.resolved_date}</td>
                            <td>{item.status}</td>
                            {props.isAdmin ? <td style={{display:"flex",justifyContent:"space-around"}}>
                                <button onClick={() => handlePopupPunishment(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deletePunishment(item.id)} type="button" className="btn btn-danger">Delete</button>
                                <button type="button" className="btn btn-danger" style={{ backgroundColor: "#43e2ae", borderColor: "#43e2ae" }}><a  href={require('../File/contract-1.pdf')}  style={{color:"white"}}>View</a></button>
                            </td> : <td  style={{display:"flex",justifyContent:"space-around"}}>
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

export default ListPunishment