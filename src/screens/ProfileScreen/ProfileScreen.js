import { useState } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import profile_img from "../../images/profile_img.jpg";
import { useSelector } from "react-redux";
import crown2 from "../../images/crown2.png";
import "./ProfileScreen.css";

function ProfileScreen() {
  
  const data = useSelector((state) => state.userSignin);
  let user = data.response.custDto;

  return (
    <>
    <UserNavbar />
      <div className="page-content mb-3 mt-5">
        <div className="container">
          <div className="main-body">
            <div className="row">
              <div className="col-4"> </div>
              <div className="col-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-end">
                      <img src={crown2} alt="" className="crown2_img" />
                    </div>
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={profile_img}
                        alt="Admin"
                        className="rounded-circle"
                        width="120"
                      />
                      <div className="mt-3">
                        <h4>
                          {user.firstName + " " + user.lastName}
                        </h4>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-globe me-2 icon-inline"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                          Email
                        </h6>
                        <span className="text-secondary">
                          {user.email}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github me-2 icon-inline"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          Phone
                        </h6>
                        <span className="text-secondary">
                          {user.phoneNumber}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-4"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
