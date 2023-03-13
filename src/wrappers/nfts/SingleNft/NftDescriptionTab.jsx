import React from "react";

import { Tab, Nav } from "react-bootstrap";

const NftDescriptionTab = ({ spaceBottomClass, nftData }) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">Properties</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    {nftData?.attributes?.map((attr,index) => {
                      return (
                        <li key={index}>
                          <span>
                            <strong>{attr.trait_type}: </strong>
                          </span>{" "}
                          {attr.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {nftData?.description}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default NftDescriptionTab;
