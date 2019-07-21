import React, { Component } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import StorageLocationView from "./storageLocation/StorageLocationView";
import ContainerView from "./container/ContainerView";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          containersList: [],
          positionsList: [],
          positionFlag: false,
          containerFlag: false
        };
      }

    handleTabs = tab => {
        console.log(tab);
        if (tab == "positions") {
          this.setState({
            positionFlag: true,
            containerFlag: false
          });
        } else {
          this.setState({
            positionFlag: false,
            containerFlag: true
          });
        }
      };
    render() { 
        return ( 
            
            <React.Fragment>
            <Tabs
              transition={false}
              onSelect={key => this.handleTabs(key)}
              defaultActiveKey="containers"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="containers" title="Container Units">
                {this.state.containerFlag && (
                  <ContainerView  />
                )}
              </Tab>
              <Tab eventKey="positions" title="Storage Location">
                {this.state.positionFlag && (
                  <StorageLocationView />
                )}
              </Tab>
            </Tabs>
          </React.Fragment>

                // <Tabs defaultActiveKey="containers" id="containerView">
                //     <Tab eventKey="containers" title="Container Unit">
                //         <ContainerView></ContainerView>
                //     </Tab>
                //     <Tab eventKey="storageLocation" title="Storage Location">
                //         <StorageLocationView></StorageLocationView>
                //     </Tab>
                // </Tabs>
            
         );
    }
}
 
export default Container;