import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = ({
  initialSettings,
  onSave,
  setBannerToggle,
  bannerToggle,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(initialSettings.description);
  const [timer, setTimer] = useState(initialSettings.timer);
  const [link, setLink] = useState(initialSettings.link);

  const handleSave = () => {
    onSave({ description, timer, link });
    setIsModalOpen(false);
  };

  const handleBannerToggle = () => {
    setBannerToggle();
  };

  return (
    <div>
      <button
        className="menu-button"
        onClick={() => setIsModalOpen(true)}
        style={{
          position: "fixed",
          top: "30px",
          right: "30px",
          zIndex: 1000,
        }}
      >
        Internal Dashboard
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Internal Dashboard</h2>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={bannerToggle}
                  onChange={handleBannerToggle}
                />
                Show Banner
              </label>
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Timer (in seconds):</label>
              <input
                type="number"
                value={timer}
                onChange={(e) => setTimer(e.target.value)}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Banner Link:</label>
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="form-buttons">
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="close-button"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
