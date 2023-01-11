import { extend } from "jquery";
import React from "react";
import ListItem from "./list-item";
import "../../assets/styles/services/navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCarousel: false,
      windowWidth: 0,
      isSticky: false,
      selected: "nav-startup-tab",
      isSidebar: false,
      isStatic: false,
      long: 0,
      isdata: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = (event) => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const container = document.getElementById("container-navbar"),
      tab = document.getElementById("tab-navbar-sticky"),
      a = document.getElementById("startup-accelerator"),
      b = document.getElementById("b"),
      c = document.getElementById("c"),
      d = document.getElementById("d"),
      e = document.getElementById("e"),
      f = document.getElementById("f"),
      g = document.getElementById("g"),
      h = document.getElementById("h");
    const sticky = container.offsetTop,
      longA = a.offsetTop - window.pageYOffset,
      longB = b.offsetTop - window.pageYOffset,
      longC = c.offsetTop - window.pageYOffset,
      longD = d.offsetTop - window.pageYOffset,
      longE = e.offsetTop - window.pageYOffset,
      longF = f.offsetTop - window.pageYOffset,
      longG = g.offsetTop - window.pageYOffset,
      longH = h.offsetTop - window.pageYOffset;

    let selected = "";
    if (longA < 0 || longA > 0) selected = "nav-startup-tab";
    if (longB < 0) selected = "nav-product-tab";
    if (longC < 0) selected = "nav-mobile-tab";
    if (longD < 0) selected = "nav-web-tab";
    if (longE < 0) selected = "nav-enterprise-tab";
    if (longF < 0) selected = "nav-iot-tab";
    if (longG < 0) selected = "nav-growth-tab";
    if (longH < 0) selected = "nav-software-tab";

    this.setState({ selected });
    if (sticky < window.pageYOffset) {
      tab.classList.add("fixe-tab");
      this.setState({ isSticky: true });
    } else {
      tab.classList.remove("fixe-tab");
      this.setState({ isSticky: false });
    }
    if (winScroll <= this.state.isdata - -600) {
      if (selected == "nav-software-tab") {
        this.setState({ isStatic: true, isSticky: false });
        tab.classList.remove("fixe-tab");
        tab.classList.add("tab-static");
        // jQuery(".tab-static").css("top",(this.state.isdata - 100)+"px")
      }
    } else {
      this.setState({ isStatic: false, isSticky: true });
      tab.classList.add("fixe-tab");
      tab.classList.remove("tab-static");
    }

    this.setState({ long: a.offsetTop });
  };

  render() {
    const pull_data = (data) => {
      this.setState({ isdata: data });
      console.log(this.state.isdata);
    };
    const { selected, isSticky, isStatic } = this.state;
    const nav = (
      <nav id="tab-navbar-sticky" className={`tab-sticky`}>
        <ul className={`nav-tab`} id="nav-tab">
          <div
            id="nav-startup-tab"
            className={`nav-item-bar first ${
              selected === "nav-startup-tab" ? ` actives` : ``
            }`}
          >
            <div id="nav-startup-tab" className="circle"></div>
            <a href="#startup">
              <span id="nav-startup-tab">Startup Accelerator</span>
            </a>
          </div>
          <div
            id="nav-product-tab"
            className={`nav-item-bar ${
              selected === "nav-product-tab" ? ` actives` : ``
            }`}
          >
            <div id="nav-product-tab" className="circle"></div>
            <a href="#product">
              <span id="nav-product-tab">Product Design</span>
            </a>
          </div>
          <div
            id="nav-mobile-tab"
            className={`nav-item-bar ${
              selected === "nav-mobile-tab" ? ` actives` : ``
            }`}
          >
            <div id="nav-mobile-tab" className="circle"></div>
            <a href="#mobile">
              <span id="nav-mobile-tab">Mobile App Development</span>
            </a>
          </div>
          <div
            id="nav-web-tab"
            className={`nav-item-bar ${
              selected === "nav-web-tab" ? ` actives` : ``
            }`}
          >
            <div id="nav-web-tab" className="circle"></div>
            <a href="#web">
              <span id="nav-web-tab">Web Development</span>
            </a>
          </div>
          <div
            id="nav-enterprise-tab"
            className={`nav-item-bar ${
              selected === "nav-enterprise-tab" ? ` actives` : ``
            }`}
          >
            <div id="nav-enterprise-tab" className="circle"></div>
            <a href="#enterprise">
              <span id="nav-enterprise-tab">Enterprise App Development</span>
            </a>
          </div>
          <div
            id="nav-iot-tab"
            className={`nav-item-bar ${
              selected === "nav-iot-tab" ? ` actives` : ``
            }`}
          >
            <div id="nav-iot-tab" className="circle"></div>
            <a href="#iot">
              <span id="nav-iot-tab">IOT</span>
            </a>
          </div>
          <div
            id="nav-growth-tab"
            className={`nav-item-bar ${
              selected === "nav-growth-tab" ? ` actives` : ``
            }`}
          >
            <div id="nav-growth-tab" className="circle"></div>
            <a href="#growth">
              <span id="nav-growth-tab">Growth and Digital Marketing</span>
            </a>
          </div>
          <div
            id="nav-software-tab"
            className={`nav-item-bar ${
              selected === "nav-software-tab" ? ` actives` : ``
            }`}
          >
            <div id="nav-software-tab" className="circle"></div>
            <a href="#software">
              <span id="nav-software-tab">Software Maintenance</span>
            </a>
          </div>
        </ul>
      </nav>
    );

    return (
      <div id="container-navbar" className={`container `}>
        {nav}
        <ListItem isSticky={isSticky} estatico={isStatic} func={pull_data} />
      </div>
    );
  }
}
export default Navbar;
