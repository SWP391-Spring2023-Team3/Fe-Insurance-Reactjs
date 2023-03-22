import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../../store/reducers/userReducer";



const Login = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [clientIDAdmin, setClientAdmin] = useState(null)
  const [loginAdmin, setLoginAdmin] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const dispath = useDispatch()
  const userData = useSelector(state => state.userData)
  const handleLogin = async () => {
    dispath(fetchAuthUser({
      isAdmin:loginAdmin,
      clientIDAdmin: clientIDAdmin,
      email: email,
      password: password
    }))
    if (userData.data) {
      if (clientIDAdmin) {
        navigate("/admin-site")
      } else {
        navigate("/user-site")
      }
    }
    if (userData.error) {
      setError(<p>password or username wrong</p>)
    } else {
      setError("");
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleClientAdmin = (e) => {
    setClientAdmin(e.target.value)
  }

  const handleLoginAdmin = () => {
    setLoginAdmin(!loginAdmin)
  }

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div >
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Login Insurance</p>
                  <button type="submit" className="btn btn-primary btn-lg" style={{
                    paddingLeft: '2.5rem', paddingRight: '2.5rem',backgroundColor:"gray",borderColor:"gray"
                  }} onClick={handleLoginAdmin}>{loginAdmin ? "Login With admin" : "Login With customer"}
                  </button>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                  <input value={email} onChange={handleEmail} type="text" id="form3Example3" name="email" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input value={password} onChange={handlePassword} type="password" name="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                </div>
                {loginAdmin ?<div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Client ID</label>
                  <input value={clientIDAdmin} onChange={handleClientAdmin} type="password" name="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                </div>:""}
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                    {error}
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="submit" className="btn btn-primary btn-lg" style={{
                        paddingLeft: '2.5rem', paddingRight: '2.5rem'
                      }} onClick={handleLogin}>Login</button>
                      {/* Button trigger modal */}
                      <button type="button" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem',marginLeft:"7px" }} className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Change password
                      </button>
                      {/* Modal */}
                      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Change password</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                              <label>Email</label>
                              <div className="form-group ">
                                <input type="text" defaultValue className="form-control" placeholder="Enter Email" name="email" />
                              </div>
                              <label>New Password</label>
                              <div className="form-group pass_show">
                                <input type="password" defaultValue className="form-control" placeholder="New Password" name="newpassword" />
                              </div>
                              <label>Confirm Password</label>
                              <div className="form-group pass_show">
                                <input type="password" defaultValue className="form-control" placeholder="Confirm Password" name="confirmpassword" />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="submit" className="btn btn-primary">Save
                                changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/home#portfolio" className="link-danger">Register</a></p>
                    </div>
                  </div>
                </div></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login