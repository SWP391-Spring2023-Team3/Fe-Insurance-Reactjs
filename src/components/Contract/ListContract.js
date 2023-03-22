import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListContract, fetchCreateContract, fetchDeleteContract, fetchUpdateContract, fetchListContractUser } from '../../store/reducers/contractReducer'
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

    const stateContracts = useSelector((state) => state.listContractData)
    useEffect(() => {
        const user = store.getState().userData.data
        dispatch(fetchListContract({ access_token: user.access_token }))
        setIsFetch(false);
    }, [isFetch])

    useEffect(() => {
        if (stateContracts.data != null) {
            setContracts(stateContracts.data)
        }
    }, [stateContracts])

    const addContract = (item) => {
        const accessToken = store.getState().userData.data.access_token
        dispatch(fetchCreateContract({
            access_token: accessToken,
            data: {
                title: item.title,
                description: item.description,
                startDate: item.issuedDate,
                endDate: item.resolvedDate,
                status: item.status
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
            data: {
                title: item.title,
                description: item.description,
                startDate: item.issuedDate,
                endDate: item.resolvedDate,
                status: item.status
            }
        }))
        handlePopupContract()
        setIsFetch(true)
    }
    return (
        <div className="col-md-10">
            {props.isAdmin ? <button type="button" style={Style.addContract} className="btn btn-primary"
                onClick={handlePopupContract}
            >Add new Contract</button>:<button type="button" style={Style.addContract} className="btn btn-primary"
                onClick={handlePopupContract}
            >Request new Contract</button>}
            {PopupContract ? <FormContract title={"Contract"}
                handlePopup={handlePopupContract} addContract={addContract} data={dataUppdate}
                updateContract={updateContract} /> : ""}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">start Date</th>
                        <th scope="col">end Date</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {Contracts.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.start_date}</td>
                            <td>{item.end_date}</td>
                            <td>{item.status}</td>
                            {props.isAdmin ? <td style={{display:"flex",justifyContent:"space-around"}}>
                                <button onClick={() => handlePopupContract(item)} type="button" className="btn btn-primary">Edit</button>
                                <button onClick={() => deleteContract(item.id)} type="button" className="btn btn-danger">Delete</button>
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

export default ListContract