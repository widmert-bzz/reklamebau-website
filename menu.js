/*--
  (c) copyright 2016 Reklamebau GmbH
*/

const homePage = document.getElementById('home');
const historyPage = document.getElementById('history');
const contactPage = document.getElementById('contact');
const locationPage = document.getElementById('location');

function toggleButton(x) {
    x.classList.toggle("change");

    var elemt = document.getElementById("small");
    if (elemt.className.indexOf("show") === -1) {
        elemt.className += " show";
    } else {
        elemt.className = elemt.className.replace(" show", "");
    }
}

function selectMenuItem(href) {
    var svgDoc = document.getElementById('banner').contentDocument;
    if (svgDoc !== undefined) {
        var layer2 = svgDoc.getElementById('layer2');
        var visible = layer2.getAttributeNS(null, "visibility") === "visible";

        if (href === "history") {
            if (!visible) {
                layer2.setAttributeNS(null, "visibility", "visible")
            }
        } else {
            if (visible) {
                layer2.setAttributeNS(null, "visibility", "hidden")
            }
        }
    }

    homePage.classList.add("inactive");
    historyPage.classList.add("inactive");
    contactPage.classList.add("inactive");
    locationPage.classList.add("inactive");

    switch (href) {
        case 'home':
            homePage.classList.remove("inactive")
            break;
        case 'history':
            historyPage.classList.remove("inactive")
            break;
        case 'contact':
            contactPage.classList.remove("inactive")
            break;
        case 'location':
            locationPage.classList.remove("inactive")
            break;
    }

    var menuItems = document.getElementsByClassName("menu-item");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].className = menuItems[i].className.replace(" light-blue-bk", "");
        if (menuItems[i].href === href)
            menuItems[i].className += " light-blue-bk";
    }
}