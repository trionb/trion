import React from "react";
import "../Projects/Projects.css";
import Soundtrack from "../Images/soundtrackmovie.png"
import Fyre from "../Images/fyre.png";
import PasswordGenerator from "../Images/passwordgenerator.png";
import NoteTaker from "../Images/note-taker.png";
import EatDatSushi from "../Images/sushi.png";
import solveStaking from "../Images/solveStaking.png";



function Projects () {
    return (
        <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card">
            <img src={Soundtrack} className="card-img-top1" alt="soundtrack to that movie website" />
            <div className="card-body">
              <h5 className="card-title">Soundtrack to that Movie!</h5>
              <p>Soundtrack to the Movie gives the users access to the soundtracks from their favorite movies.</p>
              <a href="https://trionb.github.io/soundtrack-that-movie/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/soundtrack-that-movie" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src={Fyre} className="card-img-top" alt="music" />
            <div className="card-body">
              <h5 className="card-title">Fyre</h5>
              <p>Frye is a music streaming website where users can have access to the lastest and hottest tracks.</p>
              <p className="note">Note:A Spotify premium account is needed for the songs to be loaded.</p>
              <a href="https://fathomless-basin-76899.herokuapp.com/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/Fyre" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src={PasswordGenerator} className="card-img-top" alt="random password generator" />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p>This is a simple and easy to use random Password Generator.</p>
              <a href="https://trionb.github.io/passwordGenerator/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/passwordGenerator" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src={NoteTaker} className="card-img-top" alt="random password generator" />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p>This is a simple Note Taker app which allows user to create and delete notes.</p>
              <a href="https://note-taking12.herokuapp.com/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/note-taker" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src={EatDatSushi} className="card-img-top" alt="random password generator" />
            <div className="card-body">
              <h5 className="card-title">Eat-Dat-Sushi</h5>
              <p>Eat-Dat-Sushi is an order app which allows users to order a type of sushi.</p>
              <a href="https://eat-dat-sushi.herokuapp.com/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/Eat-Dat-Sushi" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src={solveStaking} className="card-img-top" alt="random password generator" />
            <div className="card-body">
              <h5 className="card-title">Solve-Staking</h5>
              <p>Solves Staking is an informative website based on cryptocurrency specifically Cordano and Bitcoin.</p>
              <a href="https://solvestaking.herokuapp.com/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/honey.stake" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Projects;