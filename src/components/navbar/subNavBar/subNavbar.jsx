import React, { useState } from "react";
import {SearchIcon} from "../../../assets/Icons";

const WCSubNavBar = ({navCategories}) => {
  const [hoverShowData, setHoverShowData] = useState(null);
  console.log("hover data : ", hoverShowData);
  return (
    <>
    <div className="sub_menu_container">
        <div className="sub_menu">
          <ul>
            {navCategories.map((get, keys) => {
              return (
                <li
                  onMouseEnter={() => setHoverShowData(get)}
                  onMouseLeave={() => setHoverShowData(null)}
                >
                  <p>{get?.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {hoverShowData && (
        <div
          className="mega_menu_container"
          onMouseEnter={() => setHoverShowData(hoverShowData)}
          onMouseLeave={() => setHoverShowData(null)}>
          <div className="mega_menu">
            <div className="row">
              <div className="col-2">one</div>
              <div className="col-2">two </div>
              <div className="col-2">three</div>
            </div>
            <div className="row">
              <div className="col-2">
                <div className="mega_menu_first">
                  <h5 className="mega_menu_title">{hoverShowData?.name}</h5>
                  <ul>
                    {hoverShowData?.navCategories?.map((get, keys) => {
                      return (
                        <li>
                          <p>{get?.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div className="mega_menu_first">
                  <h5 className="mega_menu_title">CATEGORY</h5>
                  <ul>
                    <li>
                      <p>Sub Category 1</p>
                    </li>
                    <li>
                      <p>Sub Category 2</p>
                    </li>
                    <li>
                      <p>Sub Category 3</p>
                    </li>
                    <li>
                      <p>Sub Category 4</p>
                    </li>
                    <li>
                      <p>Sub Category 5</p>
                    </li>
                    <li>
                      <p>Sub Category 6</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="mega_menu_third">
                  <h5 className="mega_menu_title">TOP BRANDS</h5>
                  <div className="mega_menu_brands">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex gap-2">
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/Merchant-Ambassador-logo.webp?context=bWFzdGVyfHJvb3R8MzI1OHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aGYwL2hhYS8xMDI5OTcyNjUyODU0Mi9NZXJjaGFudC1BbWJhc3NhZG9yLWxvZ28ud2VicHw1Y2QxMWVlNmU3YmFiODBjYThiOWZlZDI4NWMyYjMxODY5NDdjZTM4N2NkMGQwMmZkNjdlYmUxMDM5NGQ5Mjdm"
                            alt="images"
                          />
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/Unig-logo.webp?context=bWFzdGVyfHJvb3R8MTY1OHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDMxL2hhNy8xMDI5OTcyNjY1OTYxNC9VbmlnLWxvZ28ud2VicHw5NWFkYmM0NTZlMTNlYjc4OTQ4ZTFkNDE3YTNmZjQyMTQ0ZDU0OWFjNDc2NWUxNDk4MjAxMjA4NTk2MzczZThl"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex gap-2">
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/Woodwick-logo.webp?context=bWFzdGVyfHJvb3R8MzkzNHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDYwL2hhMC8xMDI5OTcyNjg1NjIyMi9Xb29kd2ljay1sb2dvLndlYnB8NzJlMzg5ODEzMjU4MjBkZjhjNzc3N2NlNjczZWQ2MGY3NTM5NzdhZTcyMTYyYmI3OGJiMjAxZTVjMWI0ZTQyYg"
                            alt="images"
                          />
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/Sonos-logo.webp?context=bWFzdGVyfHJvb3R8MzIzNHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDlmL2gzNi8xMDI5OTcyODk1MzM3NC9Tb25vcy1sb2dvLndlYnB8MzgxMzhmMGQxMDRiYTlkZGI4N2Y3NTJhM2MxM2IxMjMyZDE1YThhNmQxYWU4NDliZWU3ZTE4OGExMjFjNjY3Yw"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex gap-2">
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/Zwilling-logo.webp?context=bWFzdGVyfHJvb3R8MzY1MHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDYwL2g1Yy8xMDI5OTczMDM2MjM5OC9ad2lsbGluZy1sb2dvLndlYnB8OGVlNDE1ZGEyMzVjMzAxMWY5Y2NiNjY5YTZmZGRlMGVkZjdiMjkyZDZiNjU5NWI2ZWFjYmNmNTE5ZTRiNjk0ZA"
                            alt="images"
                          />
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/GoPro-logo.webp?context=bWFzdGVyfHJvb3R8MjYzNnxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDYzL2g1OS8xMDI5OTczMDQyNzkzNC9Hb1Byby1sb2dvLndlYnB8NTY4ZWVjMGRmZGY5OWMwMWFkOWQ1NGNhN2U5NDMyZjhkNWI1OTFlZWU5NjcyOGRjZjkzYTg0NTg2OTdmZTQ1Mw"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex gap-2">
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/Dell-logo.webp?context=bWFzdGVyfHJvb3R8NDA2MnxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aGE2L2gwMi8xMDI5OTczMTAxNzc1OC9EZWxsLWxvZ28ud2VicHwzNDg5NWVlM2Q5MGRjZjM3ZGI2N2IwODQwMjgxMzkzMDcyNTE0ZDI1ZmYwMWYxNDdhZWUxNWRkMTVhMTBlYjBk"
                            alt="images"
                          />
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/Mountain-logo.webp?context=bWFzdGVyfHJvb3R8Mzk1NHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDI0L2gwYS8xMDI5OTczMTI3OTkwMi9Nb3VudGFpbi1sb2dvLndlYnB8MzBmYWVmYjEwMTY1Y2Y2MGI5N2U3NGQ0NGJhYjBmOWI1NGUxNTAyYTVjZjhjMWQ3NTZlODI1NjNiYjJmYjhiOQ"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex gap-2">
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/LEGO-logo.webp?context=bWFzdGVyfHJvb3R8MzgzNnxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aDFkL2gxMC8xMDMwMDE0NTk5MTcxMC9MRUdPLWxvZ28ud2VicHw0NjZlMmUyZGIyYThiYThiYmM3NDA5M2VkOGFmZGU0Y2Q1NWI3MmIzYTIzMDFkYTAyNzY3OWFhNjhkN2IwNGI5"
                            alt="images"
                          />
                          <img
                            className="mega_menu_img"
                            src="https://www.virginmegastore.qa/medias/MiiR-logo.webp?context=bWFzdGVyfHJvb3R8MTU5OHxhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW18aGEzL2g1NS8xMDI5OTczMDU1OTAwNi9NaWlSLWxvZ28ud2VicHxkYjQ5ZWQyMGRlMzQ0YmJlNDRjZDBmYzZkMGVjNDc3MTg1YTcxMjQ2MGMxMGVkYTExNWFkYzQ4NjZhZDBkOTky"
                            alt="images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="mega_menu_four">
                  <h5 className="mega_menu_title">POPULAR PICKS</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mega_popular_picks">
                        <img
                          src="https://media.vogue.co.uk/photos/62c45cb547517a27cb1e505e/2:3/w_1920,c_limit/00003-gucci-fall-22-ready-to-wear-milan-credit-gorunway.jpg"
                          alt="popular"
                        />
                        <p>
                          Chosen from the best and best is solution for
                          everything.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mega_popular_picks">
                        <img
                          src="https://media.vogue.co.uk/photos/62c45cb547517a27cb1e505e/2:3/w_1920,c_limit/00003-gucci-fall-22-ready-to-wear-milan-credit-gorunway.jpg"
                          alt="popular"
                        />
                        <p>
                          Chosen from the best and best is solution for
                          everything.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WCSubNavBar;
