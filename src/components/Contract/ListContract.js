import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListContract, fetchCreateContract, fetchDeleteContract,fetchUpdateContract } from '../../store/reducers/contractReducer'
import FormContract from './FormContract'
import { store } from '../../store/store'
import { useSelector } from 'react-redux'

const Style = {
    addContract: {
        height: "50px",
        backgroundColor: "green",
        border: "none",
        marginTop: "17px",
    }
}


const ListContract = (props) => {
    const dispatch = useDispatch()

    const [PopupContract, setPopupContract] = useState(false)
    const [Contracts, setContracts] = useState([])
    const [dataUppdate, setDataUpdate] = useState(null)
    const [isFetch, setIsFetch] = useState(false)

    const stateContracts = useSelector((state) => state.listContractData);
    useEffect(() => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchListContract({ access_token: accessToken }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if(stateContracts.data != null){
        setContracts(stateContracts.data)
        }
    }, [stateContracts])

    const addContract = (item) => {
        console.log("item",item)
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreateContract({
             access_token: accessToken,
             data :{
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
                status:item.status
             }
            }))
        handlePopupContract()
        setIsFetch(true)
    }

    const handlePopupContract = (item) => {
        setDataUpdate(item)
        setPopupContract(!PopupContract)
    }

    const deleteContract = (id) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchDeleteContract({
            access_token: accessToken,
            id: id,
        }))
        setIsFetch(true)
    }
    const updateContract = (item) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchUpdateContract({
            access_token: accessToken,
            id: item.id,
            data :{
                title: item.title,
                reason: item.reason,
                issuedDate: item.issuedDate,
                resolvedDate: item.resolvedDate,
                status:item.status,
             }
        }))
        handlePopupContract()
        setIsFetch(true)
    }
    return (
        <div className="col-md-10">
            <button type="button" style={Style.addContract} className="btn btn-primary"
                onClick={handlePopupContract}
            >Add new Contract</button>
            {PopupContract ? <FormContract title={"Add New Contract"}
                handlePopup={handlePopupContract} addContract={addContract} data={dataUppdate}
                updateContract={updateContract}/> : ""}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Issued Date</th>
                        <th scope="col">Resolved Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Contracts.map(item =>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>in</td>
                            <td>Otto</td>
                            <td>{item.start_date}</td>
                            <td>{item.end_date}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handlePopupContract(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deleteContract(item.id)} type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListContract