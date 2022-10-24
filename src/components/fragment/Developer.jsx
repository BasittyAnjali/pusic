import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/profile.webp";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Basitty Anjali</h3>
                        <p>Web developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Master of Computer Application student at the NMAM Institute of Technology(NITTE), Karnataka.</p>
                    <p>Graduating in 2023 and looking for a responsible position to gain more practical knowledge</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I am interested in developing projects whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href="/">
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href="/">
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href="/">
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href="/">
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href="/">
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;