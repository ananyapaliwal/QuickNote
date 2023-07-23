import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Note extends Component {
    render() {
        return (
            <Col>
                <div style={noteStyle} className="card mb-4">
                    <div style={cardHeader} className="card-header bg-dark-blue">{this.props.note.title}</div>
                    <div style={cardBody} className="card-body">{this.props.note.body}</div>
                    <div className="d-flex justify-content-flex-end ml-2 mb-2">
                        <FontAwesomeIcon
                            icon={faWindowClose}
                            style={{ fontSize: '20px' }}
                            className="text-danger mr-3"
                            onClick={() => this.props.handleDelete(this.props.note.id)}
                        />
                    </div>
                </div>
            </Col>
        )
    }
}

const noteStyle = {
    width: '330px',
    height: '250px',
    backgroundColor: '#f2f7fa', 
};

const cardHeader = {
    color: 'white',
    backgroundColor: '#183057', 
};

const cardBody = {
    overflowY: 'auto',
};

export default Note;
