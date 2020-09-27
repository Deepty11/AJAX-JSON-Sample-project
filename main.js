var pageCounter=1;

var ourRequest=new XMLHttpRequest();
$(document).ready(function(){
    $("#show").click(function(){
        ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
        ourRequest.onload=function(){
            var obj=JSON.parse(ourRequest.responseText);
            renderHtml(obj);
            
        
    };
    ourRequest.send();
    pageCounter++;
    if(pageCounter>3){
        $("#show").hide();
    }
    

    });
});

function renderHtml(data){
    var text="";
    
    for(var i=0;i<data.length;i++){
        text+="<p>"+data[i].name +" is a "+data[i].species +" likes to eat ";
        var likes=data[i].foods.likes;
        for(var j=0;j<likes.length;j++){
            if(j==0){
                text+=likes[j];
            }else{
                text+=" and "+likes[j];

            }
            
        }

        text+=" and dislikes ";
        var dislikes=data[i].foods.dislikes;
        for(var k=0;k<dislikes.length;k++){
            if(j==0){
                text+=dislikes[k];
            }else{
                text+=" and "+dislikes[k];

            }
        }
           

        text+=".</p>";
    }
    //to append the p element inside the div with id="container" element 
    $("#container").append(text);
    $("#container").children("p.first").css({"color":"red"});

}
