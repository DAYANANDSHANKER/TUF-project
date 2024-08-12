import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import CountdownTimer from "./CountdownTimer";
import Dashboard from "./Dashboard";
import BannerComp from "./BannerComp";

const Banner = () => {
  const [bannerData, setBannerData] = useState({
    description: "",
    link: "",
    visible: true,
    timer: 0,
  });

  const [toggleBanner, setToggleBanner] = useState(true);

  const fetchBannerData = async () => {
    await axios
      .get("http://localhost:8000/api/banner")
      .then((response) => setBannerData(response.data))
      .catch((error) => console.error("Error fetching banner data:", error));
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  const handleExpire = () => {
    setBannerData({ ...bannerData, visible: false });
  };

  const handleUpdate = async (data) => {
    await axios
      .post("http://localhost:8000/api/banner", { ...data, visible: true })
      .then((response) => console.log("Banner updated:", response.data))
      .catch((error) => console.error("Error updating banner:", error));
  };

  return (
    <div className="banner">
      {!bannerData.visible ? (
        <div>
          <Dashboard
            initialSettings={bannerData}
            onSave={handleUpdate}
            setBannerToggle={() => setToggleBanner(!toggleBanner)}
            bannerToggle={toggleBanner}
          />
          {toggleBanner && (
            <BannerComp
              description={bannerData?.description}
              link={bannerData?.link}
            />
          )}
        </div>
      ) : (
        <CountdownTimer
          initialTime={bannerData.timer}
          onExpire={handleExpire}
        />
      )}
    </div>
  );
};

export default Banner;
