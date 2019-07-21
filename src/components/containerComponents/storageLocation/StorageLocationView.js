import React, { Component } from 'react';
import {
    Table,
    Button,
    OverlayTrigger,
    Tooltip,
    Form,
    Row,
    Col
  } from "react-bootstrap";
  
  import {
    FaPlus,
    FaBarcode,
    FaEdit,
    FaTrash,
    FaTrashRestore,
    FaDolly,
    FaLayerGroup
  } from "react-icons/fa";
  import "./StorageLocationView.css";

class StorageLocationView extends Component {
    state = {  }

    enableModal = async () => {
        const response = await fetch(
          config.Backend_URL + "storage_location/generateid"
        );
        const data = await response.json();
    
        this.setState({
          addPosId: data,
          modalFlag: !this.state.modalFlag
        });
      };

    render() { 
        return ( 
                <div>
                    <div className="storageLocationDiv">
          <Row>
            <Col sm={5} className="searchBox">
              <input
                type="text"
                className="form-control"
                name="searchBarText"
                value={this.state.searchBarText}
                placeholder="Search from the list..."
                // onKeyUp={this.handleKeyUp}
                // onChange={this.handleChange}
              />
            </Col>
            <Col sm={2} className="addFilterBoxPos">
              <Form.Control
                as="select"
                name="statusFilter"
                onChange={this.handleChange}
              >
                <option key="A" value="A">
                  Active Storage Locations
                </option>
                <option key="I" value="I">
                  Inactive Storage Locations
                </option>
                <option key="All" value="All">
                  All Storage Locations
                </option>
              </Form.Control>
            </Col>
            <Col sm={5} className="btns text-right">
              {/* {data.length == 0 ? null : (
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Bulk Storage Location Move</Tooltip>}
                >
                  <Button onClick={this.bulkModalEnable} variant="outline-dark">
                    <FaLayerGroup />
                  </Button>
                </OverlayTrigger>
              )} */}

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Add Storage Location</Tooltip>}
              >
                <Button
                  className="addBtn"
                  onClick={this.enableModal}
                  variant="outline-dark"
                >
                  <FaPlus />
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </div>
        
                </div>
         );
    }
}
 
export default StorageLocationView;