let hrs=document.querySelector(".hrs");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");
let format=document.querySelector(".format");
let background=document.querySelector(".container");
let wishes=document.querySelector("h1")



setInterval(()=>{
    let currentTime=new Date();
   let h=currentTime.getHours()
   let m=currentTime.getMinutes()
    let s=currentTime.getSeconds()
    let hour_timig="";
    let wish1="Good Morning";
    let wish2="Good Afternoon";
    let wish3="Good Evening";
    let wish4="Good Night";
   
   
    if(h>=12){
     hour_timig="PM";
 
    }
    else{
     hour_timig="AM";
    }

    if(h>=4 && h<12){
        
        background.style.backgroundImage='url("https://www.igp.com/blog/wp-content/uploads/2022/11/good-morning-pic.jpg")'
        wishes.innerText=`Happy to wish you ${wish1}`;
    }
    else if(h>=12 && h<15){
        background.style.backgroundImage='url("https://cdn.pixabay.com/photo/2021/11/01/22/10/night-6761907_640.jpg")'
        wishes.innerText=`Happy to wish you ${wish2}`;
    }
    else if(h>=15 && h<20){
        background.style.backgroundImage='url("https://cdn.pixabay.com/photo/2021/11/01/22/10/night-6761907_640.jpg")'    
       wishes.innerText=`Happy to wish you ${wish3}`;

    }
    else{
        background.style.backgroundImage='url("https://cdn.pixabay.com/photo/2021/11/01/22/10/night-6761907_640.jpg")'
        wishes.innerText=`Happy to wish you ${wish4}`;

    }
    format.innerText=`${hour_timig}`;
    if(h>=12){
        h=h-12;
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s; 
    }
    hrs.innerText=h;
    min.innerText=m;
    sec.innerText=s;


    
},1000 );






