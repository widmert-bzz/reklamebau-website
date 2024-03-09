/*--
  (c) copyright 2016 Reklamebau GmbH
*/
function toggleButton(x) {
    x.classList.toggle("change");

    var elemt = document.getElementById("small");
    if( elemt.className.indexOf("show")===-1 ) {
        elemt.className += " show";
    }
    else {
        elemt.className = elemt.className.replace(" show", "");
    }
}

function selectMenuItem(evt) {
    var href = evt.currentTarget.href;

    var svgDoc = document.getElementById('banner').contentDocument;
    if( svgDoc!==undefined ) {
        var layer2 = svgDoc.getElementById('layer2');
        var visible = layer2.getAttributeNS(null, "visibility")==="visible";

        if( href.search('#history')!==-1 ) {
            if( !visible ) {
                layer2.setAttributeNS(null, "visibility", "visible")
            }
        }
        else {
            if( visible ) {
                layer2.setAttributeNS(null, "visibility", "hidden")
            }
        }
    }

    var menuItems = document.getElementsByClassName("menu-item");
    for( var i=0; i<menuItems.length; i++) {
        menuItems[i].className = menuItems[i].className.replace(" light-blue-bk", "");
        if( menuItems[i].href===href )
            menuItems[i].className += " light-blue-bk";
    }
}

window.onload = function () {
    if( document.URL.indexOf('#')===-1 ) {
        document.getElementById('default').click();
    }
    else {
        var menuItems = document.getElementsByClassName("menu-item");
        for( var i=0; i<menuItems.length; i++ ) {
            if( menuItems[i].href===document.URL )
                menuItems[i].click();
        }
    }
}