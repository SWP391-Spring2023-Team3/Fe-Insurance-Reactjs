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
    const [punishments, setPunishments] = useState([])
    const [dataUppdate, setDataUpdate] = useState(null)
    const [isFetch, setIsFetch] = useState(false)

    const statePunishments = useSelector((state) => state.listPunishmentData);
    useEffect(() => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchListPunishment({ access_token: accessToken }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if(statePunishments.data){
        setPunishments(statePunishments.data)
        }
    }, [statePunishments])

    const addPunishment = (item) => {
        console.log("item",item)
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreatePunishment({
             access_token: accessToken,
             data :{
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
            data :{
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
            <button type="button" style={Style.addPunishment} className="btn btn-primary"
                onClick={handlePopupPunishment}
            >Add new punishment</button>
            {PopupPunishment ? <FormPunishment title={"Add New Punishment"}
                handlePopup={handlePopupPunishment} addPunishment={addPunishment} data={dataUppdate}
                updatePunishment={updatePunishment}/> : ""}
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
                    {punishments.map(item =>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>in</td>
                            <td>Otto</td>
                            <td>{item.issued_date}</td>
                            <td>{item.resolved_date}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handlePopupPunishment(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deletePunishment(item.id)} type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPunishment