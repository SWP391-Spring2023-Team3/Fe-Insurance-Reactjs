import React, { useState } from 'react'
import AddPunishment from './AddPunishment'

const Style = {
    addPunishment : {
        height: "50px",
        backgroundColor : "green",
        border: "none",
        marginTop: "17px",
    }
}


const ListPunishment = () => {
    const [isAddPunishment,setIsAddPunishment] = useState(false)

    const handleIsAddPunishment = () => {
        setIsAddPunishment(!isAddPunishment)
    }


    return (
        <div className="col-md-10">
            <button type="button" onClick={handleIsAddPunishment} style={Style.addPunishment} className="btn btn-primary">Add new punishment</button>
            {isAddPunishment?<AddPunishment/>:""}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Type</th>
                        <th scope="col">Description</th>
                        <th scope="col">Issued Date</th>
                        <th scope="col">Resolved Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>in</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>
                            <button type="button" className="btn btn-primary">Edit</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListPunishment