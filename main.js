menu_list_array = ["Veg Margherita Pizza","Peppy Paneer","Veg Extravaganza","Farm House"];
                    

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
          
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata='"<section class=cards">'
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'"<div class=card">'
    +menu_list_array[i] +'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;


        htmldata="section class=menulist"
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
