import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jQuery from 'jquery';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import FBXLoader from 'three-fbxloader-offical';

import './App.css';

import Header from './components/Header';
import Home      from './components/Home';
import Services    from './components/Services';
import Yolo      from './components/Yolo';
import Efficient from './components/Efficient';
import Intro     from './components/Intro';
import Contact   from './components/Contact';
import Map       from './components/Map';
// import Footer    from './components/Footer';

import homeBackImg from './assets/images/home-back.png';
import loadingImg from './assets/images/loading-logo.png';
import envBKImg from './assets/images/back_BK2.jpg';
import envDNImg from './assets/images/back_DN2.jpg';
import envFRImg from './assets/images/back_FR2.jpg';
import envLFImg from './assets/images/back_LF2.jpg';
import envRTImg from './assets/images/back_RT2.jpg';
import envUPImg from './assets/images/back_UP2.jpg';
import cubeFile from './assets/models/total.FBX';

class App extends Component {
  constructor(props) {
    super(props);
    this.wWidth = jQuery(window).width(); this.wHeight = jQuery(window).height(); this.pageY = 0;
    this.cWidth = 0; this.cHeight = 0;
    this.cube = null;
    this.lightArr = [];
    this.lineArr = []; this.blackArr = []; this.boardArr = [];
    // this.colTime = {r:100, g:200, b:0};
    this.colTime = 0;
    this.colVal = 0;
    // this.colVal = {r:0, g:0, b:0};
    this.cubeLength = 4; this.inBox = null;
    this.device = null; this.checkTest = 0; this.checkResize = false;
    this.loading = {length:0, delta:0, time:0};
    this.lineMat = null; this.blackMat = null; this.boardMat = null;
    this.animate = this.animate.bind(this);
    this.render = this.render.bind(this);
    this.windowResize = this.windowResize.bind(this);
    this.windowScroll = this.windowScroll.bind(this);
  }

  startLoading() {
    this.loading.length = Math.min(this.wWidth * 0.8, this.wHeight * 0.8, 210);
    this.loading.time = 40;
    this.loading.delta = this.loading.length/this.loading.time;
    jQuery(".loading").css({
       "width":this.loading.length+"px",
       "top" : Math.round((this.wHeight-this.loading.length) /2) + "px",
       "left": Math.round((this.wWidth-this.loading.length) /2) + "px"
    });
  }
  setLoading() {
    for (let i = 0; i < this.loading.time; i++) {
      setTimeout(() => {
         var imgWidth = this.loading.delta * (this.loading.time - i);
         jQuery(".loading").css({
            "width":imgWidth+"px",
            "top" : Math.round((this.wHeight-imgWidth) /2) + "px",
            "left": Math.round((this.wWidth-imgWidth) /2) + "px"
         });
         if (imgWidth <= 30) {
            jQuery(".loading").css("display", "none");
            jQuery(".main-wrap").addClass("show");
         }
      }, i * 20);
    }
  }
  windowResize() {
    if (this.checkResize == false) {
      // this.checkResize = true;
      // if (this.cube) {
      //     this.cube.rotation.y = Math.PI/4;
      //     this.lineArr.forEach(item => {
      //         item.material.color.setHex(0x003991);
      //     });
      //     jQuery("#colorShadow").css("background", "radial-gradient(closest-side, #0066D0, #003991, #000000)");// 1C1D28
      // }
    }
    this.setCanvasSize();
  }

  showMenu(menuStr) {
    jQuery(".menu").removeClass("show");
    jQuery("."+menuStr).addClass("show");
  }
  setCanvasSize() {
    this.device = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )?"mobile":"web";
    this.wWidth = jQuery(window).width();
    this.wHeight = jQuery(window).height();
    (this.wWidth < 750)?this.showMenu("menuB"):this.showMenu("menuA"); 
    var headerTop;
    if (this.wWidth > this.wHeight) {
      headerTop = (this.wHeight < 600)?5:50;
    }
    else {
      headerTop = (this.wWidth < 600)?20:50;
    }
    jQuery(".header").css("margin-top", headerTop + "px");

    var menuAFontSize   = (this.wWidth >= 1024)? 20:17;
    var menuAItemRight  = (this.wWidth >= 1024)? 30:20;

    jQuery(".header-wrap .menu-item").css({"font-size": menuAFontSize + "px", "margin-right":menuAItemRight+"px"});

    var h1 = {cLeft, cTop, sWidth, sHeight, sLeft, sTop, wRatio, contentLeft, contentTop, titleFontSize, successFontSize, desFontSize, desWidth, chatFontSize, chatWidth, chatHeight, chatPadding, showDes};
    var cLeft, cTop, sWidth, sHeight, sLeft, sTop;
    var wRatio = 0, contentLeft, contentTop, titleFontSize, successFontSize, desFontSize;
    var desWidth, chatFontSize, chatWidth, chatHeight, chatPadding, showDes;
    if (this.wWidth > this.wHeight) {
      this.cWidth = Math.round(Math.min(this.wWidth / 1.5, this.wHeight/1));
      this.cHeight = this.cWidth;
      cLeft = Math.round(this.wWidth * 3 / 4 - this.cWidth/2);
      cTop = Math.round(this.wHeight / 2 - this.cHeight / 2) - 30;
      sWidth = this.cWidth * 0.3;
      sHeight = sWidth / 2;
      sTop = cTop + this.cHeight * 0.7;
      sLeft = cLeft + (this.cWidth - sWidth) / 2;

      if (this.wWidth < 1500) {
          wRatio = this.wWidth/1500;
          contentTop = Math.round(this.wHeight/2 - wRatio * 200);
          titleFontSize = Math.round(wRatio * 40);
          if (titleFontSize < 20) titleFontSize = 20;
          successFontSize = Math.round(wRatio * 140);
          desFontSize = Math.round(wRatio * 20);
          if (desFontSize < 14) desFontSize = 14;
      }
    }
    else {
        this.cWidth = Math.round(Math.min(this.wWidth * 0.8, 600));
        this.cHeight = this.cWidth;
        cLeft = Math.round(this.wWidth / 2 - this.cWidth/2);
        cTop = headerTop + 60;
 
        sWidth = this.cWidth * 0.6;
        sHeight = sWidth / 2;
        sLeft = cLeft + (this.cWidth - sWidth) / 2;
        sTop = cTop + this.cHeight * 0.85;

        wRatio = Math.min(this.wWidth/1000, 1);
        contentTop = sTop + sHeight + 20;
        titleFontSize = Math.round(wRatio * 40);
        if (titleFontSize < 17) titleFontSize = 17;
        successFontSize = Math.round(wRatio * 140);
        desFontSize = Math.round(wRatio * 20);
        if (desFontSize < 14) desFontSize = 14;
    }

    if (wRatio) {
      contentLeft = Math.round(wRatio * 260 * 0.9);
      desWidth = Math.round(wRatio * 530);
      chatFontSize = Math.round(wRatio * 33);
      chatWidth = Math.round(wRatio * 280);
      chatHeight = Math.round(wRatio * 60);
      chatPadding = Math.round(wRatio * 20);
      showDes = (this.wHeight < 450)?"none":"block";
      jQuery(".home .content").css({"left":contentLeft+"px", "top":contentTop+"px"});
      jQuery(".home .content .title").css("font-size", titleFontSize+"px");
      jQuery(".home .content .success").css("font-size", successFontSize+"px");
      jQuery(".home .content .description").css({"font-size": desFontSize+"px", "width":desWidth+"px", "display":showDes});
      jQuery(".home .content .chat-btn").css({"font-size": chatFontSize+"px", "width": chatWidth+"px", "height": chatHeight+"px", "padding-top": chatPadding+"px"});
    }

    jQuery("#container").css({"width":this.cWidth+"px", "height":this.cHeight+"px", "left":cLeft+"px", "top":cTop+"px"});
    jQuery("#colorShadow").css({"width":sWidth+"px", "height":sHeight+"px", "left":sLeft+"px", "top":sTop+"px"});

    if (this.renderer && this.camera) {
      this.renderer.setSize(this.cWidth, this.cHeight);
      this.camera.aspect = this.cWidth/this.cHeight;
    }
  }

  windowScroll() {
    this.pageY = Math.round(window.pageYOffset);
    if (this.pageY < 220) {
      jQuery(".header-wrap").removeClass("cover");
      // jQuery(".header").removeClass("cover");
    } else {
      jQuery(".header-wrap").addClass("cover");
      // jQuery(".header").addClass("cover");
    }
  }
  init() {
    var self = this;
    this.camera = new THREE.PerspectiveCamera(60, this.cWidth / this.cHeight, 0.05,  500);
    this.camera.position.set(0, 2.4, 6);
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    this.renderer.setSize(this.cWidth, this.cHeight);
    if (!document.getElementById("container")) return false;
    document.getElementById("container").appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0x000000, 0);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = false;

    var yPos = 0.3, lightDis = 9;
    var posArr = [{x:-1, y:yPos, z:0}, {x:1, y:yPos, z:0}, {x:0, y:1, z:0}, {x:0, y:yPos, z:1}];
    posArr.forEach((pos, idx) => {
       var spotLight = new THREE.SpotLight( 0xFFFFFF, 8, 11, Math.PI/3, 0.5, 1 );
       spotLight.position.set(pos.x * lightDis, pos.y * lightDis, pos.z * lightDis);
       self.lightArr[idx] =spotLight;
       self.scene.add( self.lightArr[idx] );
    });

    this.loadCube();
  }

  animate () {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
    if (this.lineArr.length === 6 && this.checkResize === false) {
      var self = this;
       this.checkTest++;
       this.cube.rotation.y -= 0.005;

       var speedVal = 0.5;
        this.colTime++;
        if      (this.colTime < 100 * speedVal) this.colVal = this.colTime/(100 * speedVal);
        // else if (self.colTime < 200 * speedVal) self.colVal = (200 * speedVal - self.colTime)/100 * speedVal;
        // else self.colVal = 0;
        else if (this.colTime < 150 * speedVal) this.colVal = 1;
        else if (this.colTime < 250 * speedVal) this.colVal = (250 * speedVal - this.colTime)/(100 * speedVal);
        else this.colVal = 0;
        if (this.colTime === 300 * speedVal) this.colTime = 0;

        var lightIntVal = 2 + this.colVal * 6;
        this.lightArr.forEach(light => { light.intensity = lightIntVal; });

        if (this.colVal < 0.5) this.colVal = 0.5;
        // jQuery("canvas").css("opacity", this.colVal);
        jQuery("#colorShadow").css("opacity", this.colVal);

        // self.blackMat.color.setRGB(0.16 * self.colVal, 0.16 * self.colVal, 0.16 * self.colVal);
        self.lineMat.color.setRGB(0 * self.colVal, 0.38 * self.colVal, 0.81 * self.colVal);
        // var centerStr = "#", sideStr = "#";
        // ["r", "g", "b"].forEach(key => {
        //   var aVal = 0;
        //   if (key === "g") aVal = 0.38;
        //   else if (key === "b") aVal = 0.81;
        //     var colDec = Math.round(aVal * self.colVal/speedVal * 256);
        //     var centerHexStr = colDec.toString(16);
        //     if (centerHexStr.length == 1) centerHexStr = "0" + centerHexStr;
        //     centerStr += centerHexStr;
        //     var sideHex = Math.round((colDec+20)/2);
        //     var sideHexStr = sideHex.toString(16);
        //     if (sideHexStr.length === 1) sideHexStr = "0" + sideHexStr;
        //     sideStr += sideHexStr;
        // });
        // jQuery("#colorShadow").css("background", "radial-gradient(closest-side, "+centerStr+", "+sideStr+", #1E1E1E)");

      //  ["r", "g", "b"].forEach(key => {
      //     self.colTime[key]++;
      //     if      (self.colTime[key] < 100) self.colVal[key] = self.colTime[key]/100;
      //     else if (self.colTime[key] < 200) self.colVal[key] = (200 - self.colTime[key])/100;
      //     else self.colVal[key] = 0;
      //     if (self.colTime[key] == 300) self.colTime[key] = 0;
      //  });
      //  self.lineArr.forEach(item => {
      //     item.material.color.setRGB(self.colVal.r, self.colVal.g, self.colVal.b);
      //  });
      //  // inBox.material.color.setRGB(colVal.g, colVal.b, colVal.r);
      //  var centerStr = "#", sideStr = "#";
      //  ["r", "g", "b"].forEach(key => {
      //     var colDec = Math.round(self.colVal[key] * 256);
      //     var centerHex = colDec.toString(16);
      //     var sideHex = Math.round((colDec + 62)/3);
      //     centerStr += (centerHex != "0")?centerHex:"00";
      //     sideStr += sideHex.toString(16);
      //  });
      //  jQuery("#colorShadow").css("background", "radial-gradient(closest-side, "+centerStr+", "+sideStr+", #000000)"); //1C1D28
    }
  }
  loadCube() {
    var envMapLoader = new THREE.CubeTextureLoader();
    var envMap = envMapLoader.load( [ envFRImg, envBKImg, envLFImg, envRTImg, envUPImg, envDNImg ] );
    this.lineMat = new THREE.MeshBasicMaterial({color:0x0061D0});
    this.blackMat = new THREE.MeshBasicMaterial({color:0x282828});
    this.boardMat = new THREE.MeshPhongMaterial({color:0x030303, envMap:envMap, reflectivity:0.5});

    var self = this;
    new FBXLoader().load(cubeFile, function (object){
      var vSize = new THREE.Box3().setFromObject(object).getSize();
       object.children.forEach(side => {
          if (side.children.length == 0){
             self.inBox = side;
             side.visible = false;
          }
          side.children.forEach(item => {
            if (item.name.indexOf("line-") > -1) {
              item.material = self.lineMat;
              self.lineArr.push(item);
            }
            else if (item.name.indexOf("black-") > -1) {
              item.material = self.blackMat;
              self.blackArr.push(item);
            } 
            else if (item.name.indexOf("board-") > -1) {
              item.material = self.boardMat;
              self.boardArr.push(item);
            }
          });
       });
       var scl = self.cubeLength/vSize.x;
       object.scale.set(scl, scl, scl);
       object.rotation.y = Math.PI/4;
        self.cube = object;
       self.scene.add(self.cube);
       self.setLoading();
    })
  }

  componentDidMount() {
    this.startLoading();
    this.setCanvasSize();

    if (this.device == "web") {
      this.init();
      this.animate();
    }
    else {
      jQuery("#container").addClass("show-img");
      jQuery("#colorShadow").addClass("show-img");
      this.setLoading();
    }
    window.addEventListener('resize', this.windowResize);
    window.addEventListener('scroll', this.windowScroll, true);

    // const resizeScript = document.createElement("script");
    // resizeScript.src = "/src/script/resize.js";
    // resizeScript.async = true;
    // resizeScript.onload = () => this.scriptLoaded();
    // document.body.appendChild(resizeScript);
  }
  mapStyles() {
    return [
      { elementType: "geometry", stylers: [{ color: "#000000" }] },
      { elementType: "labels.icon", stylers: [{ color: "#FF0000" }] },
    ];
  }
  // #1d2c4d 023e58
  render() {
    return (
      <div>
        <img id="homeBack" src={homeBackImg} />
        <Header />
        <div className="main-wrap">
          <Home />
          <Services />
          <Yolo />
          <Efficient />
          <Intro />
          <Contact />
          <Map />
          <Footer />
        </div> 


        {/* <BrowserRouter>
          <div className="main-wrap">
            <Header />
            <Switch>
              <Route path="/"           component={Home} exact/>
              <Route path="/about"      component={About}/>
              <Route path="/services"     component={Services}/>
              <Route path="/portfolio"  component={Portfolio}/>
              <Route path="/contact"    component={Contact}/>
            </Switch>
          </div> 
        </BrowserRouter> */}
        <div className="loading">
          <img src={loadingImg} />
        </div>
      </div>
    );
  }
}

export default App;
