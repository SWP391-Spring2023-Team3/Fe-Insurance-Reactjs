import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListAccident, fetchCreateAccident, fetchDeleteAccident ,fetchUpdateAccident} from '../../store/reducers/accidentReducer'
import FormAccident from './FormAccident'
import { store } from '../../store/store'
import { useSelector } from 'react-redux'

const Style = {
    addAccident: {
        height: "50px",
        backgroundColor: "green",
        border: "none",
        marginTop: "17px",
    }
}


const ListAccident = (props) => {
    const dispatch = useDispatch()

    const [PopupAccident, setPopupAccident] = useState(false)
    const [Accidents, setAccidents] = useState([])
    const [dataUppdate, setDataUpdate] = useState(null)
    const [isFetch, setIsFetch] = useState(false)

    const stateAccidents = useSelector((state) => state.listAccidentData);
    useEffect(() => {
        console.log("get list")
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchListAccident({ access_token: accessToken }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if(stateAccidents.data != null){
            setAccidents(stateAccidents.data)
        }
    }, [stateAccidents])

    const addAccident = (item) => {
        console.log("item",item)
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreateAccident({
             access_token: accessToken,
             data :{
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
             }
            }))
        handlePopupAccident()
        setIsFetch(true)
    }

    const handlePopupAccident = (item) => {
        setDataUpdate(item)
        setPopupAccident(!PopupAccident)
    }

    const deleteAccident = (id) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchDeleteAccident({
            access_token: accessToken,
            id: id,
        }))
        setIsFetch(true)
    }
    const updateAccident = (item) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchUpdateAccident({
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
            <button type="button" style={Style.addAccident} className="btn btn-primary"
                onClick={handlePopupAccident}
            >Add new Accident</button>
            {PopupAccident ? <FormAccident title={"Add New Accident"}
                handlePopup={handlePopupAccident} addAccident={addAccident} data={dataUppdate}
                updateAccident={updateAccident}/> : ""}
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
                    {Accidents.map(item =>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>in</td>
                            <td>Otto</td>
                            <td>{item.issued_date}</td>
                            <td>{item.resolved_date}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handlePopupAccident(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deleteAccident(item.id)} type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListAccident