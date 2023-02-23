import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";
import { nftsData } from "../../data";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category
}) => {
  return (
    <div
    
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <SectionTitle titleText="VERIFIED DIAMOND NFTS!" positionClass="text-center" />
        <Tab.Container defaultActiveKey="stoneDiamond">
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="individualJewellery">
                <h4>Individual Jewellery</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="stoneDiamond">
                <h4>Stones</h4>
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="individualJewellery">
              <div className="row">
                <ProductGrid
                  category={category}
                  products={nftsData}
                  type="new"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="stoneDiamond">
              <div className="row">
                <ProductGrid
                                  products={nftsData}

                  category={category}
                  type="stoneDiamond"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};


export default TabProduct;
