var color = "";

var rand = Math.floor((Math.random() * 5) + 1);

switch(rand)
{
    case 0:
        color = "pink";
        break;
    case 1:
        color = "purple";
        break;
    case 2:
        color = "green";
        break;
    case 3:
        color = "orange";
        break;
    case 4:
        color = "red";
        break;
}

var link1 = document.getElementById("colorBasic");
link1.setAttribute("href", "../css/"+ color +"/basic.css");

var link1 = document.getElementById("colorLayout");
link1.setAttribute("href", "../css/"+ color +"/layout.css");

var link1 = document.getElementById("colorBlogs");
link1.setAttribute("href", "../css/"+ color +"/blogs.css");

var link1 = document.getElementById("colorIon");
link1.setAttribute("href", "../css/"+ color +"/ionicons.css");

var link1 = document.getElementById("colorPopup");
link1.setAttribute("href", "../css/"+ color +"/magnific-popup.css");

var link1 = document.getElementById("colorAnimate");
link1.setAttribute("href", "../css/"+ color +"/animate.css");