import React from "react";
import Navbar from "./ui/Navbar";

function Client() {

    return(
        <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Driving</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
       
       <Navbar/>
        <section className="Clients">
          <div className="container-fluid">
            <div className="client-head">
              <div className="clienthead-upper">
                <span>Clients</span>
                <a href="" className="add-new">
                  Add New Client
                </a>
              </div>
              <div className="clienthead-lower">
                <span>
                  Total Clients: <strong>223</strong>
                </span>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    <img src="img/Icon feather-search.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="client-table">
              <table className="table ">
                <thead>
                  <tr className="ctable-head">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Vehicle Type</th>
                    <th scope="col">License No.</th>
                    <th scope="col">License Type</th>
                    <th scope="col">Reminder Call</th>
                    <th scope="col" />
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>Mady Hill</td>
                    <td>(02) 8513 3407</td>
                    <td>HR Auto</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>20 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" id="client-dialog">
                          <div className="modal-content">
                            <div className="modal-header" id="client-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Feedback
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body" id="client-body">
                              <span>
                                {" "}
                                The training program was extremely helpful in
                                improving my driving skills. The instructors were
                                knowledgeable and patient, and the practical exercises
                                helped me gain confidence behind the wheel. The
                                program was well-organized and structured. It covered
                                all the important aspects of driving, from basic
                                maneuvers to more advanced techniques. The instructors
                                were also able to answer all my questions and provide
                                helpful feedback.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr className="ctable-blue">
                    <td>002</td>
                    <td>Olene Iniguez</td>
                    <td>(02) 8513 3407</td>
                    <td>Car</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>17 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <th>003</th>
                    <td>Troy Husby</td>
                    <td>(02) 8513 3407</td>
                    <td>HR Auto</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>18 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr className="ctable-blue">
                    <td>004</td>
                    <td>Thomas Bush</td>
                    <td>(02) 8513 3407</td>
                    <td>HR Road Ranger</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>20 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <th>005</th>
                    <td>Mandy Hill</td>
                    <td>610-444-55507</td>
                    <td>Car</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>18 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr className="ctable-blue">
                    <td>006</td>
                    <td>Thomas Bush</td>
                    <td>(02) 8513 3407</td>
                    <td>HR Auto</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>20 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <th>007</th>
                    <td>Mandy Hill</td>
                    <td>610-444-55507</td>
                    <td>Car</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>18 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr className="ctable-blue">
                    <td>008</td>
                    <td>Thomas Bush</td>
                    <td>(02) 8513 3407</td>
                    <td>HR Auto</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>20 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <th>009</th>
                    <td>Mandy Hill</td>
                    <td>610-444-55507</td>
                    <td>Car</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>18 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr className="ctable-blue">
                    <td>010</td>
                    <td>Thomas Bush</td>
                    <td>(02) 8513 3407</td>
                    <td>HR Auto</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>20 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <th>011</th>
                    <td>Mandy Hill</td>
                    <td>610-444-55507</td>
                    <td>Car</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>18 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                  <tr className="ctable-blue">
                    <td>012</td>
                    <td>Thomas Bush</td>
                    <td>(02) 8513 3407</td>
                    <td>HR Auto</td>
                    <td>0285372275</td>
                    <td>Australian - NSW </td>
                    <td>20 Aug 2023</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img src="img/Icon feather-trash-2.png" alt="" />
                      <img src="img/Icon feather-edit.png" alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="container">
            <p>© 2023 Driving Schedule Software. All Rights Reserved.</p>
          </div>
        </section>
      </>
      

    )

}
export default Client;