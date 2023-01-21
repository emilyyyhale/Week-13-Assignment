import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class NavBar extends React.Component {
    render () {
        return (
            <nav className="navbar fixed-top navbar-expand-md bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Hale Travels</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">International Trips</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">USA Trips</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

