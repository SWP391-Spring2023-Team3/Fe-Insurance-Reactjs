import React, { useState,useEffect } from "react";


const UserProfile = (props) => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const email = "customer@gmail.com"

    const handleName = (e) => {
        setName(e.target.value)
    }    
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }    
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }    
    const handleCountry = (e) => {
        setCountry(e.target.value)
    }

    useEffect(() => {
      setName("customer")
      setAddress("vinh phuc")
      setPhone("03322555")
      setCountry("Viet Nam")
    }, [])


    return (
        <div className="container rounded bg-white mt-5 mb-5" style={{ marginTop: "0px !important" }}>
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src={`../Images/profilepic.jpg`} alt={"can't load your image"}/>
                        <span className="font-weight-bold">{name}</span>
                        <span className="text-black-50">{email}</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Your Profile</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Full Name</label>
                                <input type="text" className="form-control " value={name} onChange={handleName} /></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Address </label>
                                <input value={address} onChange={handleAddress}  type="text" className="form-control" placeholder="enter address " />
                            </div>
                            <div className="col-md-12"><label className="labels">Phone Number</label>
                                <input value={phone} onChange={handlePhone}  type="text" className="form-control" placeholder="enter phone number" />
                            </div>
                            <div className="col-md-12"><label className="labels">Country</label>
                                <input value={country} onChange={handleCountry}  type="text" className="form-control" placeholder="enter country" />
                            </div>
                            <div className="col-md-12"><label className="labels">Identity ID</label>
                                <input type="text" readOnly className="form-control" value={"123456789"} />
                            </div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save
                            Profile</button></div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default UserProfile