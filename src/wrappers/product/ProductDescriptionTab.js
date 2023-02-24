import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                Properties
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Weight</span> 400 g
                    </li>
                    <li>
                      <span>Dimensions</span>10 x 10 x 15 cm{" "}
                    </li>
                    <li>
                      <span>Materials</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
             
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
