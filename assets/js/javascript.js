//check if the document has loaded correctly
var htmlLoaded = false;
document.addEventListener("DOMContentLoaded", () => {
  htmlLoaded = true;
});
document.querySelector("#load_js").addEventListener("click", () => {
    event.target.parentNode.querySelector("#loadP_js").innerText = htmlLoaded;
  });
//change HTML in one click
var buttonToclick_js=document.querySelector("#clickButton_js");
buttonToclick_js.addEventListener("click", function () {
    buttonToclick_js.innerHTML="clicked";
});

//change HTML in two clicks
var buttonToDoubleClick_js=document.querySelector("#DoubleClickButton_js");
buttonToDoubleClick_js.addEventListener("dblclick", function () {
    buttonToDoubleClick_js.innerHTML="double-clicked";
});

//print key on button
var buttonToKey_js=document.querySelector("#pressKey_js");
buttonToKey_js.addEventListener("keypress", function () {
    buttonToKey_js.innerHTML=event.key;
});

//print "moved cursor" on button
var buttonMovedCursor_js=document.querySelector("#hoverButton_js");
buttonMovedCursor_js.addEventListener("mousemove", function () {
    buttonMovedCursor_js.innerHTML="Moved cursor";
});

//Change input text value
var input_js=document.querySelector("#inputText_js");
var inputButton_js=document.querySelector("#inputButton_js");
input_js.addEventListener("input", function () {
    inputButton_js.innerHTML="I caught you";
});

//Load image
var image_js=document.querySelector("#javascript_img");
var imageLoadBtn_js=document.querySelector("#imageLoadBtn_js");
image_js.addEventListener("load", function () {
    imageLoadBtn_js.innerHTML="Image loaded";
});

//Image fails to load
var imageFail_js=document.querySelector("#javascript_img_fail");
var imageLoadBtnFail_js=document.querySelector("#imageLoadBtnFail_js");
imageFail_js.addEventListener("error", function () {
    imageLoadBtnFail_js.innerHTML="Image not loaded";
});

//When a form is submitted
var form_js=document.querySelector("#form_js");
var submit_js=document.querySelector("#submitButton_js");
form_js.addEventListener("submit", function () {
    event.preventDefault();
    submit_js.innerHTML="Submitted!";
});

//When the user changes the option of a select element
var select_js=document.querySelector("#select_js");
var selectButton_js=document.querySelector("#selectButton_js");
select_js.addEventListener("change", function () {
    selectButton_js.innerHTML="Changed!";
});

//When the user moves the mouse cursor
var mouseBtn_js=document.querySelector("#mouseBtn_js");
document.addEventListener("mousemove", function (){
    mouseBtn_js.innerHTML="Mouse moving";
});

//When a checkbox is checked or unchecked
var select_js=document.querySelector("#checkbox_js");
var checkButton_js=document.querySelector("#checkButton_js");
checkbox_js.addEventListener("change", function () {
    if (event.target.checked){
    checkButton_js.innerHTML="Checked!";}
    else{
    checkButton_js.innerHTML="Unchecked!";
    }
});


//When a ul list item is clicked, show the item that was clicked
var ul=document.querySelector("#uList_js");
var children=ul;
children.addEventListener("click", function (e) {
    e.target.style.color="blue";
});

//Create an HTML element with any text value
var createButton_js=document.querySelector("#createButton_js");
var div1_js=document.querySelector("#creationDiv");
createButton_js.addEventListener("click", function () {
    var newElement1_js=document.createElement("p");
    newElement1_js.innerHTML="Hello";
    div1_js.appendChild(newElement1_js);
});

//Remove an HTML element with any text value
var removeButton_js=document.querySelector("#removeButton_js");
removeButton_js.addEventListener("click",function () {
    var elementToRemove_js=document.querySelector("#remove_js");
    elementToRemove_js.remove();
});

//Append an HTML element with any text value to a parent element
var appendButton_js=document.querySelector("#appendButton_js");
appendButton_js.addEventListener("click",function () {
    var elToAppend_js=document.createElement("p");
    elToAppend_js.innerHTML="Hello";
    Div_js=document.querySelector("#appendDiv")
    Div_js.appendChild(elToAppend_js);
});


//Prepend an HTML element with any text value to a parent element
prependButton_js.addEventListener("click",function () {
    var elToPrepend_js=document.createElement("p");
    elToPrepend_js.innerHTML="Hello";
    prepDiv_js=document.querySelector("#prependDiv")
    prepDiv_js.prepend(elToPrepend_js);
    
})

//Create and add an HTML element with any text value after another element
var createAdd_js=document.querySelector("#createAdd_js");
createAdd_js.addEventListener("click",function () {
    var elToAdd_js=document.createElement("p");
    elToAdd_js.innerHTML="Hello";
    divAdd_js=document.querySelector("#divAdd")
    divAdd_js.append(elToAdd_js);
})
//Clone an HTML element within other element  '''''''   
var cloneButton_js=document.querySelector("#cloneButton_js");
cloneButton_js.addEventListener("click",function () {
    var ElToClone_js=document.querySelector("#CloneMe_js");
    let clone=ElToClone_js.clone(true);
    parentNode.append(clone);
})

//Add a class to an HTML item
var addClassButton_js=document.querySelector("#addClassButton_js");
addClassButton_js.addEventListener("click", function () {
    var newClassEl_js=document.querySelector("#classElement_js");
    console.log(newClassEl_js);
    newClassEl_js.classList.add("bold");
})

//Remove a class to an HTML item incomplete
var removeclassButton_js=document.querySelector("#removeclassButton_js");
removeClassButton_js.addEventListener("click",function () {
    var remClassEl=document.querySelector("#remClassEl_js");  
    remClassEl.removeAttribute('class','bold');
})


//Toggle a class of an HTML item
var toggleClassButton_js=document.querySelector("#toggleClassButton_js");
toggleClassButton_js.addEventListener("click",function () {
    var togElement=document.querySelector("#toggleClassEl_js");
    togElement.classList.toggle("bold");
})

//Add a disabled attribute to an HTML button
var attributeButton_js=document.querySelector("#attributeButton_js");
attributeButton_js.addEventListener("click",function () {
    console.log(1);
    attributeButton_js.setAttribute("disabled", "true")})
    

//Remove the disabled attribute of an HTML button
var remAttributeButton_js=document.querySelector("#remAtrributeButton_js");
remAttributeButton_js.addEventListener("click",function () {
    var buttonToFree_js=document.querySelector("#opressedButton_js");
    buttonToFree_js.removeAttribute("disabled")})

//Set a data-src attribute to a img element
var changeImgButton_js=document.querySelector("#changeImgButton_js");
changeImgButton_js.addEventListener("click",function () {
    console.log(1);
    var imgToChange_js=document.querySelector("#imgToChange_js");
    imgToChange_js.src="assets/images/jquery.png"})

//Remove the data-src attribute of the img element
var srcRemButton_js=document.querySelector("#remImgButton_js");
srcRemButton_js.addEventListener("click",function () {
    var imgToRemove_js=document.querySelector("#imgToRem_js");
    imgToRemove_js.removeAttribute("src")})

//Hide an HTML element on click (display: none)
var hideButton_js=document.querySelector("#hideButton_js");
hideButton_js.addEventListener("click",function () {
    hideButton_js.style.display="none"})

//Show an HTML element on click (display: block)
var showButton_js=document.querySelector("#showButton_js");
var surpriseButton_js=document.querySelector("#surpriseButton_js");
showButton_js.addEventListener("click",function () {
    surpriseButton_js.style.display="block"})

//Fade in an HTML element using jQuery '''''''''''
var fadeInButton_js=document.querySelector("#fadeInButton_js");
fadeInButton_js.addEventListener("click", function () {   
    newElement.textContent("Hello");
    classButton.setAttribute("display", "none")})

//Fade out an HTML element using jQuery''''''''''''''''''''''''
var fadeOutButton_js=document.querySelector("#fadeOutButton_js");
fadeOutButton_js.addEventListener("click", function () {
    var newElement=document.createElement("p");
    newElement.textContent("Hello");
    classButton.setAttribute("display", "none")})

//Iterate a collection of elements and apply a change of style on them
var iterateButton_js=document.querySelector("#iterateButton_js");
iterateButton_js.addEventListener("click", function () {
    var iterableList_js=document.querySelector("#iterableList_js")
    var iterableChildren_js=iterableList_js.children;
    for (var i=0; i<iterableChildren_js.length; i++){
        iterableChildren_js[i].style.color="red";
    }
})

//Get the parent element of a certain element and change its font weight
var ParentButton_js=document.querySelector("#ParentButton_js");
ParentButton_js.addEventListener("click", function () { 
    var parent_js=document.querySelector("#iterableParent_js").parentElement;
    parent_js.style.fontWeight="bold";
    })

//Get the collection of children of a certain element and change its font weight
var iterateButton2_js=document.querySelector("#ParentButton2_js");
iterateButton2_js.addEventListener("click", function () {
    var iterableList2_js=document.querySelector("#iterableParent2_js")
    var iterableChildren2=iterableList2_js.children;
    for (var i=0; i<iterableChildren2.length; i++){
        iterableChildren2[i].style.fontWeight="bold";
    }
})


//Get all the elements that have a certain class and change their font weight
var sameClassButton_js=document.querySelector("#sameClass_js");
sameClassButton_js.addEventListener("click", function () {
    document.querySelectorAll(".button").forEach((element)=>{
        element.style.fontWeight="bold";
})})

//Get an item by id and change its font weight
var fontChangeButton_js=document.querySelector("#fontChangeButton_js");
fontChangeButton_js.addEventListener("click", function () {
    fontChangeButton_js.style.fontWeight="bold";
})

//Get all the elements that have a certain class and the display property of none and change their font color'''''
var ColorChangeButton_js=document.querySelector("#sameClassButton_js");
ColorChangeButton_js.addEventListener("click", function () {
    })

//Get the options of a select element that are selected (attribute selected)
document.querySelector("#vanilla-selector-07 select").addEventListener("change", (e) => {
    let $selectValue = document.querySelector("#vanilla-selector-07 select").value;
    let $paragraph = document.querySelector("#vanilla-selector-07 .code-example__try p");
    $paragraph.innerText = "Selected " + $selectValue;
   });

//Change the href attribute of the first element (You have to create several elements)
var hrefButton_js=document.querySelector("#hrefButton_js");
hrefButton_js.addEventListener("click", function () {
    var newElement=document.createElement("p");
    newElement.textContent("Hello");
    classButton.setAttribute("display", "none")})

//Show an alert with the value of the first input of the page (Create an input element to test this case) ''' first input??
var alertButton_js=document.querySelector("#alertButton_js");
alertButton_js.addEventListener("click", function () {
    let value=document.querySelector("#inputEl_js").value
    alert(value);
    })

//Remove all items from a specific selector  ''''all items form a specific selector?'''
var remSelButton_js=document.querySelector("#remSelButton_js");
remSelButton_js.addEventListener("click", function () {

    })

//Animate an item after 2 seconds from the initial page load
var animButton_js=document.querySelector("#animButton_js");
animButton_js.addEventListener("click", function () {
    let id = null;
    const elem = document.getElementById("animate");   
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