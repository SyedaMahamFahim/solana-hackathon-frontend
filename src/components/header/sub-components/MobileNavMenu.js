import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={"/"}>{strings["home"]}</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={"/"}>{strings["home_group_one"]}</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={"/home-fashion"}>{strings["home_fashion"]}</Link>
                </li>
                <li>
                  <Link to={"/home-fashion-two"}>
                    {strings["home_fashion_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-fashion-three"}>
                    {strings["home_fashion_three"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-fashion-four"}>
                    {strings["home_fashion_four"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-fashion-five"}>
                    {strings["home_fashion_five"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-fashion-six"}>
                    {strings["home_fashion_six"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-fashion-seven"}>
                    {strings["home_fashion_seven"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-fashion-eight"}>
                    {strings["home_fashion_eight"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-kids-fashion"}>
                    {strings["home_kids_fashion"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-cosmetics"}>
                    {strings["home_cosmetics"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-furniture"}>
                    {strings["home_furniture"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-furniture-two"}>
                    {strings["home_furniture_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-furniture-three"}>
                    {strings["home_furniture_three"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-furniture-four"}>
                    {strings["home_furniture_four"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={"/"}>{strings["home_group_two"]}</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={"/home-furniture-five"}>
                    {strings["home_furniture_five"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-furniture-six"}>
                    {strings["home_furniture_six"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-furniture-seven"}>
                    {strings["home_furniture_seven"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-electronics"}>
                    {strings["home_electronics"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-electronics-two"}>
                    {strings["home_electronics_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-electronics-three"}>
                    {strings["home_electronics_three"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-book-store"}>
                    {strings["home_book_store"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-book-store-two"}>
                    {strings["home_book_store_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-plants"}>{strings["home_plants"]}</Link>
                </li>
                <li>
                  <Link to={"/home-flower-shop"}>
                    {strings["home_flower_shop"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-flower-shop-two"}>
                    {strings["home_flower_shop_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-organic-food"}>
                    {strings["home_organic_food"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-organic-food-two"}>
                    {strings["home_organic_food_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-onepage-scroll"}>
                    {strings["home_onepage_scroll"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={"/"}>{strings["home_group_three"]}</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={"/home-grid-banner"}>
                    {strings["home_grid_banner"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-auto-parts"}>
                    {strings["home_auto_parts"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-cake-shop"}>
                    {strings["home_cake_shop"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-handmade"}>{strings["home_handmade"]}</Link>
                </li>
                <li>
                  <Link to={"/home-pet-food"}>{strings["home_pet_food"]}</Link>
                </li>
                <li>
                  <Link to={"/home-medical-equipment"}>
                    {strings["home_medical_equipment"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-christmas"}>
                    {strings["home_christmas"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-black-friday"}>
                    {strings["home_black_friday"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-black-friday-two"}>
                    {strings["home_black_friday_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/home-valentines-day"}>
                    {strings["home_valentines_day"]}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link to={"/shop-grid-standard"}>{strings["shop"]}</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={"/shop-grid-standard"}>{strings["shop_layout"]}</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={"/shop-grid-standard"}>
                    {strings["shop_grid_standard"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/shop-grid-filter"}>
                    {strings["shop_grid_filter"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/shop-grid-two-column"}>
                    {strings["shop_grid_two_column"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/shop-grid-no-sidebar"}>
                    {strings["shop_grid_no_sidebar"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/shop-grid-full-width"}>
                    {strings["shop_grid_full_width"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/shop-grid-right-sidebar"}>
                    {strings["shop_grid_right_sidebar"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/shop-list-standard"}>
                    {strings["shop_list_standard"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/shop-list-full-width"}>
                    {strings["shop_list_full_width"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/shop-list-two-column"}>
                    {strings["shop_list_two_column"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={"/product/1"}>{strings["product_details"]}</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={"/product/1"}>{strings["product_tab_bottom"]}</Link>
                </li>
                <li>
                  <Link to={"/product-tab-left/1"}>
                    {strings["product_tab_left"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/product-tab-right/1"}>
                    {strings["product_tab_right"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/product-sticky/1"}>
                    {strings["product_sticky"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/product-slider/1"}>
                    {strings["product_slider"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/product-fixed-image/1"}>
                    {strings["product_fixed_image"]}
                  </Link>
                </li>
                <li>
                  <Link to={"/product/1"}>{strings["product_simple"]}</Link>
                </li>
                <li>
                  <Link to={"/product/1"}>{strings["product_variation"]}</Link>
                </li>
                <li>
                  <Link to={"/product/1"}>{strings["product_affiliate"]}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/shop-grid-standard"}>{strings["collection"]}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={"/"}>{strings["pages"]}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={"/cart"}>{strings["cart"]}</Link>
            </li>
            <li>
              <Link to={"/checkout"}>{strings["checkout"]}</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>{strings["wishlist"]}</Link>
            </li>
            <li>
              <Link to={"/compare"}>{strings["compare"]}</Link>
            </li>
            <li>
              <Link to={"/my-account"}>{strings["my_account"]}</Link>
            </li>
            <li>
              <Link to={"/login-register"}>{strings["login_register"]}</Link>
            </li>
            <li>
              <Link to={"/about"}>{strings["about_us"]}</Link>
            </li>
            <li>
              <Link to={"/contact"}>{strings["contact_us"]}</Link>
            </li>
            <li>
              <Link to={"/not-found"}>{strings["404_page"]}</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to={"/blog-standard"}>{strings["blog"]}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={"/blog-standard"}>{strings["blog_standard"]}</Link>
            </li>
            <li>
              <Link to={"/blog-no-sidebar"}>{strings["blog_no_sidebar"]}</Link>
            </li>
            <li>
              <Link to={"/blog-right-sidebar"}>
                {strings["blog_right_sidebar"]}
              </Link>
            </li>
            <li>
              <Link to={"/blog-details-standard"}>
                {strings["blog_details_standard"]}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/contact"}>{strings["contact_us"]}</Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default multilanguage(MobileNavMenu);
