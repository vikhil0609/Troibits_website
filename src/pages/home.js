import React, { Component } from 'react';
import jQuery from 'jquery';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import FBXLoader from 'three-fbxloader-offical';

import '../App.css';

import Home      from '../components/HomePart/Home';
import Services    from '../components/HomePart/Services';
import Yolo      from '../components/HomePart/Yolo';
import Effcient from '../components/HomePart/Efficient';
import Map       from '../components/HomePart/Map';
import Footer    from '../components/HomePart/Footer';
import HomeHeader  from '../components/HomePart/homeheader';

import envBKImg from '../assets/images/back_BK2.jpg';
import envDNImg from '../assets/images/back_DN2.jpg';
import envFRImg from '../assets/images/back_FR2.jpg';
import envLFImg from '../assets/images/back_LF2.jpg';
import envRTImg from '../assets/images/back_RT2.jpg';
import envUPImg from '../assets/images/back_UP2.jpg';
import cubeFile from '../assets/models/total.FBX';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.wWidth = jQuery(window).width(); this.wHeight = jQuery(window).height(); this.pageY = 0;
    this.cWidth = 0; this.cHeight = 0;
    this.cube = null; this.cubeLength = 4; this.inBox = null;
    this.lightArr = []; this.lineArr = []; this.blackArr = []; this.boardArr = [];
    this.colTime = 0; this.colVal = 0;
    this.device = null; this.checkTest = 0; this.checkResize = false;
    this.loading = {length:0, delta:0, time:0};
    this.lineMat = null; this.blackMat = null; this.boardMat = null; 
    this.animate = this.animate.bind(this);
    this.render = this.render.bind(this);
    this.windowResize = this.windowResize.bind(this);
    this.windowScroll = this.windowScroll.bind(this);
  }

  startLoading() {
    this.loading.length = 0;
    this.loading.time = 1;
    this.loading.delta = 0;
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

  setCanvasSize() {
    this.device = ( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )?"mobile":"web"; //|iPad
    this.wWidth = jQuery(window).width();
    this.wHeight = jQuery(window).height();
    

    var hWidth = (this.wWidth > 1280)?1280: this.wWidth;
    // if (this.device == "mobile") {
    //   // jQuery(".subpart-content").addClass("port");
    //   jQuery("#homeBack").addClass("port");
    //   jQuery(".header-wrap").addClass("port");
    //   jQuery(".home").addClass("port");
    //   jQuery(".services").addClass("port");
    //   jQuery(".yolo").addClass("port");
    //   jQuery(".efficient").addClass("port");
    //   jQuery(".intro").addClass("port");
    //   jQuery(".contact").addClass("port");
    //   jQuery(".map").addClass("port");
    //   jQuery(".footer").addClass("port");
    // }
    if (this.wWidth < 1110){
      hWidth = (hWidth / 2) + 50;
    }
    else{
    hWidth = hWidth / 2;
    }
    this.cWidth = hWidth * 1.68;

    this.cHeight = this.cWidth ;
    var cLeft, cTop, sWidth, sHeight, sLeft, sTop, leftTop;

    cLeft = hWidth * -0.34;
    cTop = (this.wHeight - this.cHeight)/2 - 160;
    if (this.device == "mobile") cTop = this.cHeight * -0.23 + 120;
    sWidth = this.cWidth * 0.32;
    sHeight = this.cWidth * 0.18;
    sLeft = (hWidth-sWidth)/2;
    // sTop = this.wHeight/2 + this.cHeight * 0.02;
    sTop = cTop + this.cHeight * 0.7;
    leftTop = (this.wWidth > 1280)?this.wHeight/2- 350:this.wHeight/2- 270;
    // console.log(this.wHeight)
    // if (this.wHeight < 500) {
    //   cTop += (500 - this.wHeight);
    //   sTop += (500 - this.wHeight);
    //   leftTop += (500 - this.wHeight);
    // }

    jQuery("#container").css({"width":this.cWidth+"px", "height":this.cHeight+"px", "left":cLeft+"px", "top":cTop+"px"});
    jQuery("#colorShadow").css({"width":sWidth+"px", "height":sHeight+"px", "left":sLeft+"px", "top":sTop+"px"});
    if (this.device == "web")
      jQuery(".home-part.left-string").css("margin-top", leftTop + "px");
    else {
      jQuery(".home.port .home-part.left-string").css({"top":  sTop + sHeight + "px", "margin-top":"10px"});
      jQuery(".home.port").css("height",  sTop + sHeight + 400 + "px");
    }

    if (this.renderer && this.camera) {
      this.renderer.setSize(this.cWidth, this.cHeight);
      this.camera.aspect = this.cWidth/this.cHeight;
    }
  }

  setMenuClass(str) {
    jQuery(".menuA-item .circle").css("display", "none");
    jQuery("#menuA"+str+" .circle").css("display", "block");
    jQuery(".menuB-item .circle").css("display", "none");
    jQuery("#menuB"+str+" .circle").css("display", "block");
  }

  windowScroll() {
    var dE = document.documentElement, dB = document.body, sT = 'scrollTop', sH = 'scrollHeight';
    var scrollP = Math.round (dE[sT] / dE[sH] * 1000);
    // var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    // this.pageY = Math.round(window.pageYOffset);
    // var menuCover = (this.pageY < 220)?false:true;
    var menuCover = (scrollP < 20)?false:true;
    if (menuCover) jQuery(".header-wrap").addClass("cover");
    else           jQuery(".header-wrap").removeClass("cover");

    // var menuStr;
    // if      (scrollP < 150) menuStr = "Home";
    // else if (scrollP < 450) menuStr = "Services";
    // else if (scrollP < 580) menuStr = "About";
    // else if (scrollP < 700) menuStr = "Portfolio";
    // else                    menuStr = "Contact";
    // this.setMenuClass(menuStr);

  }
  init() {
    var self = this;
    this.camera = new THREE.PerspectiveCamera(62, this.cWidth / this.cHeight, 0.05,  500);
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
       var spotLight = new THREE.SpotLight( 0xFFFFFF, 8, 11, Math.PI/3, 0.5, 1.1 );

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
      //  if (this.blackMat.colVal) {}
     //  this.whitemat.color.setRGB(255,255,255); 
        if      (this.colTime < 100 * speedVal) this.colVal = this.colTime/(100 * speedVal);
        // else if (self.colTime < 200 * speedVal) self.colVal = (200 * speedVal - self.colTime)/100 * speedVal;
        // else self.colVal = 0;

        else if (this.colTime < 150 * speedVal) this.colVal = 1;
        else if (this.colTime < 250 * speedVal) this.colVal = (250 * speedVal - this.colTime)/(100 * speedVal);
        else this.colVal = 0;
        if (this.colTime === 300 * speedVal) this.colTime = 0;

        var lightIntVal = 2 + this.colVal;
        this.lightArr.forEach(light => { light.intensity = lightIntVal; });

        if (this.colVal < 0.8) this.colVal = 0.8;

        jQuery("#colorShadow").css("opacity", this.colVal);
 
        self.lineMat.color.setRGB(0 * self.colVal, 0.38 * self.colVal, 0.81 * self.colVal);

      self.lineMat.color.setRGB(0 * self.colVal, 0.38 * self.colVal, 0.81 * self.colVal);
    }
  }
  loadCube() {
    var envMapLoader = new THREE.CubeTextureLoader();
    var envMap = envMapLoader.load( [ envFRImg, envBKImg, envLFImg, envRTImg, envUPImg, envDNImg ] );
    this.lineMat = new THREE.MeshBasicMaterial({color:0x0072FF});
    this.blackMat = new THREE.MeshBasicMaterial({color:0x070707,width:5.0});
   
    this.boardMat = new THREE.MeshPhongMaterial({color:0x070707, envMap:envMap, reflectivity:0.8});

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
    var self = this;
    setTimeout(() => {
      self.setCanvasSize();
      // self.setMenuClass("Home");
      if (self.device == "web") {
        self.init();
        self.animate();
      }
      else {
        jQuery("#container").addClass("show-img");
        jQuery("#colorShadow").addClass("show-img");
        jQuery(".menuA").css("display", "none");
        jQuery(".menuB").css("display", "block");
        self.setLoading();
        
      }
    }, 0);
    window.addEventListener('resize', this.windowResize);
    window.addEventListener('scroll', this.windowScroll, true);
  }
  mapStyles() {
    return [
      { elementType: "geometry", stylers: [{ color: "#000000" }] },
      { elementType: "labels.icon", stylers: [{ color: "#FF0000" }] },
    ];
  }

  render() {
    return (
      <div>
        <div className="main-wrap" style={{backgroundColor:"#1a1a1a"}}> 
            <HomeHeader />
            <Home />
            <Services />
            <Yolo />
            <Effcient />
            <Map />
          <div className="Main-footer">
              <Footer />
            </div>
        </div> 
      </div>
    );
  }
}

export default HomePage;
