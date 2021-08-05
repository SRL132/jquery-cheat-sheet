//Check if document loaded successfully
var wasLoaded = false;
$(document).ready(function () {
  wasLoaded = true;
});
$("#load").click(() => {
  $("#loadP", $(event.target).parent()).text(wasLoaded);
});

//Change HTML in one click
var buttonToclick=$("#clickButton");
buttonToclick.on("click", function () {
    this.innerHTML="clicked"
});

//Print "moved cursor" on button
var buttonMovedCursor=$("#hoverButton");
buttonMovedCursor.mousemove(function () {
    this.innerHTML="Moved cursor";
});

//Change HTML in two clicks
var buttonToDoubleClick=$("#doubleClickButton");
buttonToDoubleClick.on("dblclick", function () {
    this.innerHTML="double-clicked"
});

//print key on button
var buttonToKey=$("#pressKey");
buttonToKey.on("keypress", function () {
    this.innerHTML=event.key;
});

//change when input text
var input=$("#inputText");
var inputButton=$("#inputButton");
input.on("input",function () {
    console.log(1);
    inputButton.html("I caught you!");
});

//Load image
var image=$("#jquery_img");
var imageLoadBtn=$("#imageLoadBtn");
image.on("load", function () {
    imageLoadBtn.html("Image loaded");
});

//image fails to load
var imageFail=$("#jquery_img_fail");
var imageLoadBtnFail=$("#imageLoadBtnFail");
imageFail.on("error",function () {   
    imageLoadBtnFail.html("Image not loaded");
});

//When a form is submitted
var submitButton=$("#submitButton");
var form=$("#form");
form.on("submit", function () {
    event.preventDefault();
    submitButton.html("Submitted!");
});

//When a selector is changed
var selector=$("#select");
var selectButton=$("#selectButton");
selector.on("change", function () {
    selectButton.html("Changed!");
});

//When the user moves the mouse cursor

var mouseBtn=$("#mouseBtn");
$(document).mousemove(function (){
    mouseBtn.html("Mouse moving");
});


//When a checkbox is checked
var checkbox=$("#checkbox");
var checkButton=$("#checkButton");
checkbox.change(function() {
    if ($(event.target).is(":checked")) {
        checkButton.html("Checked!");;
      } else {
        checkButton.html("Unchecked!");;
      }
    });


//When a ul list item is clicked, show the item that was clicked
var ul=$("#uList");
var children=ul;
children.on("click", function (e) {
    e.target.style.color="blue";
});


//Create an HTML element with any text value
var createButton=$("#createButton");
var div1=$("#creationDiv");
createButton.on("click", function () {
    var newElement1=$("<p>Hello</p>");
    div1.append(newElement1);
});
//Remove an HTML element with any text value
var removeButton=$("#removeButton");
removeButton.on("click",function () {
    var elementToRemove=$("#remove");
    elementToRemove.remove();
});

//Append an HTML element with any text value to a parent element
var appendButton=$("#appendButton");
appendButton.on("click",function () {
    var elToAppend=$("<p>Hello</p>");
    Div=$("#appendDiv");
    Div.append(elToAppend);
});


//Prepend an HTML element with any text value to a parent element
var prependButton=$("#prependButton");
prependButton.on("click",function () {
    var elToPrepend=$("<p>Hello</p>");
    prepDiv=$("#prependDiv")
    prepDiv.prepend(elToPrepend);
    
})

//Create and add an HTML element with any text value after another element '''SAME'''''''''
var createAdd=$("#createAdd");
createAdd.on("click",function () {
    var elToAdd=$("<p>Hello<p/>");
    divAdd=$("#divAdd");
    divAdd.append(elToAdd); 
})
//Clone an HTML element within other element     NOIDEA   
var cloneButton=$("#cloneButton");
cloneButton.on("click",function () {
    var ElToClone=$("#CloneMe");
    let clone=ElToClone.clone(true);
    parentNode.append(clone);
})

//Add a class to an HTML item
var addClassButton=$("#addClassButton");
addClassButton.on("click", function () {
    var newClassEl=$("#classElement");
    newClassEl.addClass("bold");
})

//Remove a class to an HTML item incomplete
var removeClassButton=$("#removeClassButton");
removeClassButton.on("click",function () {
    var remClassEl=$("#remClassEl");  
    remClassEl.removeClass('bold');
})


//Toggle a class of an HTML item
var toggleClassButton=$("#toggleClassButton");
toggleClassButton.on("click",function () {
    var togElement=$("#toggleClassEl");
    togElement.toggleClass("bold");
})

//Add a disabled attribute to an HTML button
var attributeButton=$("#attributeButton");
attributeButton.on("click",function () {
    attributeButton.prop("disabled", "true");
})
    

//Remove the disabled attribute of an HTML button
var remAttributeButton=$("#remAtrributeButton");
remAttributeButton.on("click",function () {
    var buttonToFree=$("#opressedButton");
    buttonToFree.removeAttr("disabled");
})

//Set a data-src attribute to a img element
var changeImgButton=$("#changeImgButton");
changeImgButton.on("click",function () {
    console.log(1);
    var imgToChange=$("#imgToChange");
    imgToChange.attr("src","assets/images/jquery.png");
})

//Remove the data-src attribute of the img element
var srcRemButton=$("#remImgButton");
srcRemButton.on("click",function () {
    var imgToRemove=$("#imgToRem");
    imgToRemove.removeAttr("src");
})

//Hide an HTML element on click (display: none)
var hideButton=$("#hideButton");
hideButton.on("click",function () {
    hideButton.hide();
})

//Show an HTML element on click (display: block)
var showButton=$("#showButton");
var surpriseButton=$("#surpriseButton");
showButton.on("click",function () {
    surpriseButton.show();
})

//Fade in an HTML element using jQuery ''''''''''''
var fadeInButton=$("#fadeInButton");
fadeInButton.on("click", function () {   
    newElement.textContent("Hello");
    classButton.setAttribute("display", "none")
})

//Fade out an HTML element using jQuery''''''''''''''''''''''''
var fadeOutButton=$("#fadeOutButton");
fadeOutButton.on("click", function () {
    var newElement=$("<p>Hello<p/>");
    classButton.setAttribute("display", "none")
})

//Iterate a collection of elements and apply a change of style on them
var iterateButton=$("#iterateButton");
iterateButton.on("click", function () {
    var iterableList=$("#iterableList");
    var iterableChildren=iterableList.children();
    iterableChildren.each(function (index, element) {
        $(element).css("color","red");
    })
})

//Get the parent element of a certain element and change its font weight
var ParentButton=$("#ParentButton");
ParentButton.on("click", function () { 
    var parent=$("#iterableParent").parent();
    parent.css("fontWeight","bold");
    })

//Get the collection of children of a certain element and change its font weight'''SAME''''''
var iterateButton2=$("#ParentButton2");
iterateButton2.on("click", function () {
    var iterableList2=$("#iterableParent2");
    var iterableChildren2=iterableList2.children();
    iterableChildren2.each(function (index, element) {
        $(element).css("color","red");
    })
})


//Get all the elements that have a certain class and change their font weight
var sameClassButton=$("#sameClass");
sameClassButton.on("click", function () {
    $("button").css("fontWeight","bold");
})

//Get an item by id and change its font weight
var fontChangeButton=$("#fontChangeButton");
fontChangeButton.on("click", function () {
    fontChangeButton.style.fontWeight="bold";
})

//Get all the elements that have a certain class and the display property of none and change their font color'''''
var ColorChangeButton=$("#sameClassButton");
ColorChangeButton.addEventListener("click", function () {
    })

//Get the options of a select element that are selected (attribute selected)


//Change the href attribute of the first element (You have to create several elements)''''''''''
var hrefButton=$("#hrefButton");
hrefButton.on("click", function () {
    var newElement=$("<p>Hello<p/>");
    classButton.setAttribute("display", "none")
})

//Show an alert with the value of the first input of the page (Create an input element to test this case) ''' first input??
var alertButton=$("#alertButton");
alertButton.on("click", function () {
    let value=$("#inputEl").value
    alert(value);
    })

//Remove all items from a specific selector  ''''all items form a specific selector?'''
var remSelButton=$("#remSelButton");
remSelButton.on("click", function () {

    })

//Animate an item after 2 seconds from the initial page load
var animButton=$("#animButton");
animButton.on("click", function () {
    let id = null;
    const elem = $("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (pos == 350) {
    clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
          }
        }
    })