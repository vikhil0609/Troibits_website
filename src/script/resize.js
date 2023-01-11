function windowResize() {
    if (checkResize == false) {
        checkResize = true;
        if (cube) {
            cube.rotation.y = Math.PI/4;
            lineArr.forEach(item => {
                item.material.color.setHex(0x003991);
            });
            jQuery("#colorShadow").css("background", "radial-gradient(closest-side, #0066D0, #003991, #000000)");// 1C1D28
        }
    }
    setCanvasSize();
}

function setCanvasSize() {
    device = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )?"mobile":"web";

    showMenu("menuA");
    var topBarTop, logoLeft;
    if (window.innerWidth > window.innerHeight) {
        topBarTop = (window.innerHeight < 600)?5:70;
        logoLeft = (window.innerWidth < 1024)?50:112;
    }
    else {
        topBarTop = (window.innerWidth < 600)?20:70;
        logoLeft = (window.innerWidth < 1024)?30:112;
    }
    
    jQuery(".home .top-bar-wrap").css("top", topBarTop + "px");
    jQuery(".home .logo-img").css("left", logoLeft + "px");
    jQuery(".home .logo-label").css("left", parseInt(logoLeft + 65).toString() + "px");

    var menuRight, menuAFontSize, menuAItemRight;
    if (window.innerWidth >= 1024) {
        menuRight = 100;
        menuAFontSize = 20;
        menuAItemRight = 30;
    }
    else {
        menuRight = 20;
        menuAFontSize = 17;
        menuAItemRight = 20;
    }
    jQuery(".home .menu").css("right", menuRight + "px");
    jQuery(".home .menu-item").css({"font-size": menuAFontSize + "px", "margin-right":menuAItemRight+"px"});
    if (window.innerWidth < 750) { showMenu("menuB"); }

    if (window.innerWidth > window.innerHeight) {
        if (device == "web") {
            cWidth = Math.round(Math.min(window.innerWidth / 1.5, window.innerHeight/1));
            cHeight = cWidth;
            var cLeft = Math.round(window.innerWidth * 3 / 4 - cWidth/2);
            var cTop = Math.round(window.innerHeight / 2 - cWidth / 2) - 30;
            jQuery("#container").css({"width":cWidth+"px", "height":cHeight+"px", "left":cLeft+"px", "top":cTop+"px"});
     
            var sWidth = cWidth * 0.4;
            var sHeight = sWidth / 2;
            var sLeft = cLeft + (cWidth - sWidth) / 2;
            var sTop = cTop + cHeight - cHeight * 0.3;
            jQuery("#colorShadow").css({"width":sWidth+"px", "height":sHeight+"px", "left":sLeft+"px", "top":sTop+"px"});
                if (window.innerWidth < 750) { showMenu("menuB"); }
        }
        else {
            cWidth = Math.round(Math.min(window.innerWidth / 2.5, window.innerHeight/1.6));
            cHeight = cWidth;
            var cLeft = Math.round(window.innerWidth * 3 / 4 - cWidth/2);
            var cTop = Math.round(window.innerHeight / 2 - cWidth / 2);
            jQuery("#container").css({"width":cWidth+"px", "height":cHeight+"px", "left":cLeft+"px", "top":cTop+"px"});
     
            var sWidth = cWidth * 0.6;
            var sHeight = sWidth / 2;
            var sLeft = cLeft + (cWidth - sWidth) / 2;
            var sTopDelta = (device == "web")?1:1.5;
            var sTop = cTop + cHeight - cHeight * 0.1 * sTopDelta;
            jQuery("#colorShadow").css({"width":sWidth+"px", "height":sHeight+"px", "left":sLeft+"px", "top":sTop+"px"});
                if (window.innerWidth < 750) { showMenu("menuB"); }
        }


        if (window.innerWidth < 1500) {
            var wRatio = window.innerWidth/1500;
            var contentLeft = Math.round(wRatio * 260 * 0.9);
            var contentTop = Math.round(window.innerHeight/2 - wRatio * 200);
            var titleFontSize = Math.round(wRatio * 40);
            if (titleFontSize < 20) titleFontSize = 20;
            var successFontSize = Math.round(wRatio * 140);
            var desFontSize = Math.round(wRatio * 20);
            // var desFontSize = (window.innerWidth < 1000)?16:18;
            if (desFontSize < 14) desFontSize = 14;
            var desWidth = Math.round(wRatio * 530);
            var chatFontSize = Math.round(wRatio * 33);
            var chatWidth = Math.round(wRatio * 280);
            var chatHeight = Math.round(wRatio * 60);
            var chatPadding = Math.round(wRatio * 20);
            // var showDes = (window.innerHeight < 450)?"none":"block";
            var showDes = "block";
            jQuery(".home .content").css({"left":contentLeft+"px", "top":contentTop+"px"});
            jQuery(".home .content .title").css("font-size", titleFontSize+"px");
            jQuery(".home .content .success").css("font-size", successFontSize+"px");
            jQuery(".home .content .description").css({"font-size": desFontSize+"px", "width":desWidth+"px", "display":showDes});
            jQuery(".home .content .chat-btn").css({"font-size": chatFontSize+"px", "width": chatWidth+"px", "height": chatHeight+"px", "padding-top": chatPadding+"px"});
        }
    }
    else {
        cWidth = Math.round(Math.min(window.innerWidth * 0.8, 600));
        cHeight = cWidth;
        var cLeft = Math.round(window.innerWidth / 2 - cWidth/2);
        var cTop = topBarTop + 60;
        jQuery("#container").css({"width":cWidth+"px", "height":cHeight+"px", "left":cLeft+"px", "top":cTop+"px"});
 
        var sWidth = cWidth * 0.6;
        var sHeight = sWidth / 2;
        var sLeft = cLeft + (cWidth - sWidth) / 2;
        var sTopDelta = (device == "web")?1:1.5;
        var sTop = cTop + cHeight - cHeight * 0.1 * sTopDelta;
        jQuery("#colorShadow").css({"width":sWidth+"px", "height":sHeight+"px", "left":sLeft+"px", "top":sTop+"px"});

        var wRatio = Math.min(window.innerWidth/1000, 1);
        var contentLeft = Math.round(wRatio * 260 * 0.9);
        var contentTop = sTop + sHeight + 20;
        var titleFontSize = Math.round(wRatio * 40);
        if (titleFontSize < 17) titleFontSize = 17;
        var successFontSize = Math.round(wRatio * 140);
        var desFontSize = Math.round(wRatio * 20);
        // var desFontSize = (window.innerWidth < 1000)?16:18;
        if (desFontSize < 14) desFontSize = 14;
        var desWidth = Math.round(wRatio * 530);
        var chatFontSize = Math.round(wRatio * 33);
        var chatWidth = Math.round(wRatio * 280);
        var chatHeight = Math.round(wRatio * 60);
        var chatPadding = Math.round(wRatio * 20);
        // var showDes = (window.innerHeight < 450)?"none":"block";
        var showDes = "block";
        jQuery(".home .content").css({"left":contentLeft+"px", "top":contentTop+"px"});
        jQuery(".home .content .title").css("font-size", titleFontSize+"px");
        jQuery(".home .content .success").css("font-size", successFontSize+"px");
        jQuery(".home .content .description").css({"font-size": desFontSize+"px", "width":desWidth+"px", "display":showDes});
        jQuery(".home .content .chat-btn").css({"font-size": chatFontSize+"px", "width": chatWidth+"px", "height": chatHeight+"px", "padding-top": chatPadding+"px"});

    }

    var pWidth = Math.round(window.innerWidth * 0.25);
    document.getElementById("homeBack").style.width = pWidth * 2 + "px";
    document.getElementById("homeBack").style.left = window.innerWidth/2 - pWidth + "px";
    if (renderer && camera) {
       renderer.setSize(cWidth, cHeight);
       camera.aspect = cWidth/cHeight;
    }
}
