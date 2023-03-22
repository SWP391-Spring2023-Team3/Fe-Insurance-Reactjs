import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListCompensation, fetchCreateCompensation, fetchDeleteCompensation,fetchUpdateCompensation } from '../../store/reducers/compensationReducer'
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

    const stateCompensations = useSelector((state) => state.listCompensationData);
    useEffect(() => {
        console.log("get list")
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchListCompensation({ access_token: accessToken }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if(stateCompensations.data != null){
        setCompensations(stateCompensations.data)
        }
    }, [stateCompensations])

    const addCompensation = (item) => {
        console.log("item",item)
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreateCompensation({
             access_token: accessToken,
             data :{
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
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
            data :{
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
            <button type="button" style={Style.addCompensation} className="btn btn-primary"
                onClick={handlePopupCompensation}
            >Add new Compensation</button>
            {PopupCompensation ? <FormCompensation title={"Add New Compensation"}
                handlePopup={handlePopupCompensation} addCompensation={addCompensation} data={dataUppdate}
                updateCompensation={updateCompensation}/> : ""}
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
                    {Compensations.map(item =>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>in</td>
                            <td>Otto</td>
                            <td>{item.issued_date}</td>
                            <td>{item.resolved_date}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handlePopupCompensation(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deleteCompensation(item.id)} type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListCompensation