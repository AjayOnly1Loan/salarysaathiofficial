import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppPopup.css";

const WhatsAppPopup = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    let timer;

    // Handle icon click and set popup visibility
    const handleIconClick = () => {
        setIsPopupVisible(true);

        // Clear any existing timer to avoid multiple timers overlapping
        clearTimeout(timer);

        // Set a timer to automatically close the popup after 10 seconds
        timer = setTimeout(() => {
            setIsPopupVisible(false);
        }, 10000); // 10000ms = 10 seconds
    };

    const handleStartChat = () => {
        window.open("https://wa.me/+918448665118?text=Hi", "_blank");
    };

    return (
        <div className="whatsapp-popup">
            {/* Floating WhatsApp icon */}
            <div className="whatsapp-icon" onClick={handleIconClick}>
                <FaWhatsapp size={50} color="#ffffff" />
            </div>

            {/* Popup content, visible for 10 seconds after icon click */}
            {isPopupVisible && (
                <div className="popup-content">
                    <h4>Apply with WhatsApp</h4>
                    <button className="apply-btn" onClick={handleStartChat}>
                        Start WhatsApp Chat
                    </button>
                </div>
            )}
        </div>
    );
};

export default WhatsAppPopup;
