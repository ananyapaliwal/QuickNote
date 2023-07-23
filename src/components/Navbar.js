import React, { Component } from 'react';
import AddNote from './AddNote';
import { FaPen } from 'react-icons/fa';
import '../App.css';

class Navbar extends Component {
    render() {
      return (
        <React.Fragment>
          <nav
            style={navStyle}
            className="navbar fixed-top navbar-expand-md navbar-dark bg-dark d-flex justify-content-between mb-4"
          >
            <p style={noteStyle}>
              <FaPen style={penIconStyle} /> QuickNote
            </p>
            <AddNote addNote={this.props.addNote} />
          </nav>
        </React.Fragment>
      );
    }
  }
  

    const navStyle = {
        paddingLeft: '5%',
        paddingRight: '5%'
    };

    const noteStyle = {
        color: '#fff',
        fontSize: 38,
        fontWeight: 500,
        marginBottom: 0,
        display: 'flex',
        alignItems: 'center',
      };
      
    const penIconStyle = {
        fontSize: '28px',
        marginRight: '10px',
    };


export default Navbar;