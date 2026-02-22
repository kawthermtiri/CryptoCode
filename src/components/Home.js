import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import securityImage from "../image/4.jpeg";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <img src={securityImage} alt="Security" className="security-image" />
            <h1 className="home-title">Bienvenue sur l'application de cryptage</h1>
            <div className="button-group">
                <button 
                    className="action-button" 
                    onClick={() => navigate("./cryptage")}
                >
                    Crypter
                </button>
                <button 
                    className="action-button" 
                    onClick={() => navigate("./decrypter")}
                >
                    Décrypter
                </button>
            </div>
        </div>
    );
};

export default Home;
