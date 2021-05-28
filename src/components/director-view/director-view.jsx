import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {NavbarView} from "../navbar-view/navbar-view";
import "./director-view.scss";


export class DirectorView extends React.Component {
  render() {
    const { director, movies, onBackClick } = this.props;
    return (
      <div>
        <div>
      <NavbarView />
      </div>
      <div className="director-view">
        <div className="director-name">
          <span className="value">{director.Name}</span>
        </div>
        <div className="director-bio">
          <span className="value">{director.Bio}</span>
        </div>
        <div className="director-birth">
          <span className="label">Birth: </span>
          <span className="value">{director.Birth}</span>
        </div>
        <div className="director-death">
          <span className="label">Death: </span>
          <span className="value">{director.Death}</span>
        </div>
        <div className="button">
        <Button variant="dark" onClick={() => { onBackClick(null) }}>Back</Button>
        </div>
      </div>
      </div>
    );
  }
}