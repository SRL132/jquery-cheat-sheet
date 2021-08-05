var ol1 = document.getElementById("left_ol1");
var ol2 = document.getElementById("left_ol2");
//allow user to select the data by clicking on the menu
const selectData =(e)=>{
    console.log(e.target);
    //activate modal for the selected data
    displayModal(e.target);
}

const displayModal = (e) =>{
    document.querySelector(".ini").style.display="none";
    let centerDivs=document.querySelector(".center_div");
    centerDivs.style.display="none";
    for (i in centerDivs){
    if (e.index===i.index){
        centerDivs[i].syle.display="block"
    }
    }
}

ol1.addEventListener("click", selectData);
ol2.addEventListener("click", selectData);

modals_list=[];
selector_list=document.querySelector("li");


