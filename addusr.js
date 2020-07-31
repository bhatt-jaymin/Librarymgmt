//Drop down function
function ShowHideDiv()
{
   
    var ddlPassport = document.getElementById("enroll_usr");
    var dvPassport = document.getElementById("docsnametxt");
    dvPassport.style.display = ddlPassport.value == "Y" ? "block" : "none";

    var disptxt=ddlPassport.options[ddlPassport.selectedIndex].text;
    document.getElementById("docsnametxt").value=" Enter valid " + disptxt;
   
}


    //Date format
$(document).ready(function () {
    $("#txtdate").datepicker({
        maxDate: 0,
        minYear:'1900',
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true
           });
});

//burger menu
$(document).ready(function(){
    $(".sidebar-btn").click(function(){
    $(".wrapper").toggleClass("collapse");    
    }); 
    }); 
    


  
    



