function Next_img_change() {
    var sFirstValue;
    var sSecondValue;
    var sSrcUrl;

    var img101Src = document.getElementById('img101');
    sSecondValue = (img101Src.src.split('_')[img101Src.src.split('_').length - 1]).split(".png")[[0]]; //0.05
   
    sSecondValue = parseFloat(sSecondValue)+ 0.15 ;
    sSecondValue= parseFloat(sSecondValue.toFixed(2))
    
   
    
    // if (parseInt(sSecondValue) == 5) {
    //     sSecondValue = '05';
    // }
        
    sFirstValue = img101Src.src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
  

    // if (parseFloat(sSecondValue) >= 0.001) {
         Bind100SrcURL(sSrcUrl);
         document.getElementById("Display").value = sSecondValue + " " + "LogCS";
    // }

    sFirstValue = document.getElementById('img81').src.split('_')[0]
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';

   
    
    // if (parseFloat(sSecondValue) >= 0.01) {
      
         Bind80SrcURL(sSrcUrl);
    // }

    sFirstValue = document.getElementById('img41').src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    // if (parseFloat(sSecondValue) >= 0.1) {
        Bind40SrcURL(sSrcUrl);
    // }

    sFirstValue = document.getElementById('img21').src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    // if (parseFloat(sSecondValue) >= 0.1) {
        Bind20SrcURL(sSrcUrl);
    // }
}

// function go_radio() {

//     var path = document.location.pathname
    
//     if (document.getElementById('rd1').checked) {
//         //console.log(location.pathname);
//         location.href = 'EyeProject1.html';
//     }
//     else if (document.getElementById('rd2').checked) {
// 		location.href = 'EyeProject2.html';
// 	}
// }


function Previous_img_change() {
    var sFirstValue;
    var sSecondValue;
    var sSrcUrl;

    var img101Src = document.getElementById('img101');
    sSecondValue = (img101Src.src.split('_')[img101Src.src.split('_').length - 1]).split('.png')[0];
    sSecondValue = parseFloat(sSecondValue) - 0.15;
    sSecondValue= parseFloat(sSecondValue.toFixed(2))
    // if (parseInt(sSecondValue) == 105) {
    //     sSecondValue = 101;
    // }
    
    sFirstValue = img101Src.src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    // if (parseInt(sSecondValue) <= 100) {
        Bind100SrcURL(sSrcUrl);
       document.getElementById("Display").value = sSecondValue + " "+ "LogCS";
    // }

    sFirstValue = document.getElementById('img81').src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    // if (parseInt(sSecondValue) <= 100) {
        Bind80SrcURL(sSrcUrl);
    // }

    sFirstValue = document.getElementById('img41').src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    // if (parseInt(sSecondValue) <= 100) {
        Bind40SrcURL(sSrcUrl);
    // }

    sFirstValue = document.getElementById('img21').src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    // if (parseInt(sSecondValue) <= 100) {
        Bind20SrcURL(sSrcUrl);
    // }
}

function rotateRandom() {
    var min = 1 
    var max = 4
    var val = Math.floor(Math.random() * (+max - +min));
    return val*90
}

function Bind100SrcURL(sSrcUrl) {
    var img101Src = document.getElementById('img101');
    var img102Src = document.getElementById('img102');
    var img103Src = document.getElementById('img103');
    // var img104Src = document.getElementById('img104');
    // var img105Src = document.getElementById('img105');

    img101Src.src = sSrcUrl;
    img102Src.src = sSrcUrl;
    img103Src.src = sSrcUrl;
    // img104Src.src = sSrcUrl;
    // img105Src.src = sSrcUrl;

    img101Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img102Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img103Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    // img104Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    // img105Src.style.transform = "rotate(" + rotateRandom() + "deg)"

}
function Bind80SrcURL(sSrcUrl) {
    var img81Src = document.getElementById('img81');
    var img82Src = document.getElementById('img82');
    var img83Src = document.getElementById('img83');
    var img84Src = document.getElementById('img84');
    var img85Src = document.getElementById('img85');

    img81Src.src = sSrcUrl;
    img82Src.src = sSrcUrl;
    img83Src.src = sSrcUrl;
    img84Src.src = sSrcUrl;
    img85Src.src = sSrcUrl;

    img81Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img82Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img83Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img84Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img85Src.style.transform = "rotate(" + rotateRandom() + "deg)"
}
function Bind40SrcURL(sSrcUrl) {
    var img41Src = document.getElementById('img41');
    var img42Src = document.getElementById('img42');
    var img43Src = document.getElementById('img43');
    var img44Src = document.getElementById('img44');
    var img45Src = document.getElementById('img45');

    img41Src.src = sSrcUrl;
    img42Src.src = sSrcUrl;
    img43Src.src = sSrcUrl;
    img44Src.src = sSrcUrl;
    img45Src.src = sSrcUrl;

    img41Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img42Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img43Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img44Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img45Src.style.transform = "rotate(" + rotateRandom() + "deg)"
}
function Bind20SrcURL(sSrcUrl) {
    var img21Src = document.getElementById('img21');
    var img22Src = document.getElementById('img22');
    var img23Src = document.getElementById('img23');
    var img24Src = document.getElementById('img24');
    var img25Src = document.getElementById('img25');

    img21Src.src = sSrcUrl;
    img22Src.src = sSrcUrl;
    img23Src.src = sSrcUrl;
    img24Src.src = sSrcUrl;
    img25Src.src = sSrcUrl;

    img21Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img22Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img23Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img24Src.style.transform = "rotate(" + rotateRandom() + "deg)"
    img25Src.style.transform = "rotate(" + rotateRandom() + "deg)"
}

document.onkeydown = function (e) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch (e.keyCode) {
        case 37:
            //alert('left');
            if (page == 'eye.html') { Previous_img_change(); }
            else if (page == 'eye.html') { Previous_background_change(); }
            break;
        case 38:
            //alert('up');
            if (page == 'eye.html') { Previous_img_change(); }
            else if (page == 'eye.html') { Previous_background_change(); }
            break;
        case 39:
            //alert('right');
            if (page == 'eye.html') { Next_img_change(); }
            else if (page == 'eye.html') { Next_background_change(); } break;
        case 40:
            //alert('down');
            if (page == 'eye.html') { Next_img_change(); }
            else if (page == 'eye.html') { Next_background_change(); }
            break;
    }
};

function Next_background_change() {
    var r; var b; var g;

    var bg_color = document.body.style.backgroundColor;

    let sep = bg_color.indexOf(",") > -1 ? "," : " ";
    bg_color = bg_color.substr(4).split(")")[0].split(sep);
    r = parseInt(bg_color[0]);
    g = parseInt(bg_color[1]);
    b = parseInt(bg_color[2]);

    if (r<242){
        if(r == 26|| r == 77 || r == 128 || r == 179 || r == 230){
            r += 12; b += 12; g += 12;
        }
        else{
            r += 13; b += 13; g += 13;
        }
    

    //console.log(RGBToHSL(r, g, b));
        document.body.style.backgroundColor = RGBToHSL(r, g, b)

        var color_pct = (RGBToHSL(r, g, b)).split(",")[2].replace("%)", "");
        //console.log(color_pct);
        document.getElementById("Display").value = 100 - Math.round(color_pct) + '%';

    var sFirstValue;
    var sSecondValue;
    var sSrcUrl;

    var img101Src = document.getElementById('img101');

    sSecondValue = (img101Src.src.split('_')[img101Src.src.split('_').length - 1]).split('.')[0];
    sFirstValue = img101Src.src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    Bind100SrcURL(sSrcUrl);

    sFirstValue = document.getElementById('img81').src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    Bind80SrcURL(sSrcUrl);


    sFirstValue = document.getElementById('img41').src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    Bind40SrcURL(sSrcUrl);
    
    sFirstValue = document.getElementById('img21').src.split('_')[0];
    sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
    Bind20SrcURL(sSrcUrl);
    }
    
}

function Previous_background_change() {
    var r; var b; var g;

    var bg_color = document.body.style.backgroundColor;

    let sep = bg_color.indexOf(",") > -1 ? "," : " ";
    bg_color = bg_color.substr(4).split(")")[0].split(sep);
    r = parseInt(bg_color[0]);
    g = parseInt(bg_color[1]);
    b = parseInt(bg_color[2]);

    if (r > 0) {
        if (r == 38 || r == 89 || r == 140 || r == 191 || r == 242) {
            r -= 12; b -= 12; g -= 12;
        }
        else {
            r -= 13; b -= 13; g -= 13;
        }


        //console.log(RGBToHSL(r, g, b));
        document.body.style.backgroundColor = RGBToHSL(r, g, b)

        var color_pct = (RGBToHSL(r, g, b)).split(",")[2].replace("%)","");
        document.getElementById("Display").value = 100 - Math.round(color_pct) + '%';

        var sFirstValue;
        var sSecondValue;
        var sSrcUrl;

        var img101Src = document.getElementById('img101');

        sSecondValue = (img101Src.src.split('_')[img101Src.src.split('_').length - 1]).split('.')[0];
        sFirstValue = img101Src.src.split('_')[0];
        sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
        Bind100SrcURL(sSrcUrl);

        sFirstValue = document.getElementById('img81').src.split('_')[0];
        sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
        Bind80SrcURL(sSrcUrl);


        sFirstValue = document.getElementById('img41').src.split('_')[0];
        sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
        Bind40SrcURL(sSrcUrl);

        sFirstValue = document.getElementById('img21').src.split('_')[0];
        sSrcUrl = sFirstValue + '_' + sSecondValue + '.png';
        Bind20SrcURL(sSrcUrl);
    }

}

// function RGBToHSL(r, g, b) {
//     // Make r, g, and b fractions of 1
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest channel values
//     let cmin = Math.min(r, g, b),
//         cmax = Math.max(r, g, b),
//         delta = cmax - cmin,
//         h = 0,
//         s = 0,
//         l = 0;

//     // Calculate hue
//     // No difference
//     if (delta == 0)
//         h = 0;
//         // Red is max
//     else if (cmax == r)
//         h = ((g - b) / delta) % 6;
//         // Green is max
//     else if (cmax == g)
//         h = (b - r) / delta + 2;
//         // Blue is max
//     else
//         h = (r - g) / delta + 4;

//     h = Math.round(h * 60);

//     // Make negative hues positive behind 360°
//     if (h < 0)
//         h += 360;
//     // Calculate lightness
//     l = (cmax + cmin) / 2;

//     // Calculate saturation
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
//     // Multiply l and s by 100
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);

//     return "hsl(" + h + "," + s + "%," + l + "%)";
// }

//document.onkeydown = function (evt) {
//    evt = evt || window.event;
//    var isEscape = false;
//    if ("key" in evt) {
//        isEscape = (evt.key === "Escape" || evt.key === "Esc");
//    } else {
//        isEscape = (evt.keyCode === 27);
//    }
//    if (isEscape) {
//        alert("Escape");
//    }
//};

//document.onkeydown = function (evt) {
//    evt = evt || window.event;
//    if (evt.keyCode == 27) {
//        alert('Esc key pressed.');
//    }
//};

//window.addEventListener('keydown', function (e) {
//    if (e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) {
//        e.preventDefault();
//        return false;
//    }
//}, true);