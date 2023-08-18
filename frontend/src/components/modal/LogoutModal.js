import React from "react";
import { RiCloseLine } from "react-icons/ri";
import "./logoutModal.css";
import { useNavigate } from "react-router-dom";

export default function LogoutModal({ setLogoutModalOpen }) {
  const navigate = useNavigate();
  return (
    <div className="darkBg" onClick={() => setLogoutModalOpen(false)}>
      <div className="centered">
        <div className="modal">
          {/* modal header */}
          <div className="modalHeader">
            <h5 className="heading">Confirm</h5>
          </div>
          <button className="closeBtn" onClick={() => setLogoutModalOpen(false)}>
            <RiCloseLine></RiCloseLine>
          </button>
          {/* modal content */}
          <div className="modalContent">Are you really want to log Out ?</div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="logOutBtn"
                onClick={() => {
                  setLogoutModalOpen(false);
                  localStorage.clear();
                  navigate("./login");
                }}
              >
                Log Out
              </button>

              <button className="cancelBtn" onClick={() => setLogoutModalOpen(false)}>
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}