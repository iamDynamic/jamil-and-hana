var q = document.getElementById("q")
var imgq = document.getElementById("imgq")
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var a4 = document.getElementById("a4")
var return1 = document.getElementById("returndiv")

function getParameter(x){
    params= window.location.href.split("?")[1].split("&"); 
    for(i=0;i<params.length;i++){
        // ["id","example"]
     e = params[i].split("=");
     if(e[0] == x){
     return e[1];
    }
    }
}
var id = getParameter("id")

const GameData = {
    "l1":{
        "q":"how much the episode of jamil and hana seson 1",
        "a1": 37,
        "a2": 42,
        "a3": 34,
        "a4": 40,
    },
    "l2":{
        "q":"how much the episode of jamil and hana seson 2",
        "a1": 31,
        "a2": 34,
        "a3": 33,
        "a4": 32,
    },
    "l3":{
        "q":"what are the first loking for jamil father",
        "a1": "alo jamil alo hana",
        "a2": "yawmyaat gamil w hanaa",
    } ,
    "l4":{
        "q":"in wich episode in alo jamil alo hana did mom mohmoud be the neighbor of jamil hana",
        "a1":"ep1",
        "a2":"ep2",
        "a3":"ep3",
        "a4":"none of them",
    },
    "l5":{
        "q":"who saleem does love in season 2",
        "a1":"jaza",
        "a2":"jana",
    },
    "l6":{
        "q":" من كان اسمح اركيلة",
        "a1":"saleem",
        "a2":"tarek",
    },
    "l7":{
        "q":"WHO IS NORMAN AS3AD",
        "a1":"hana",
        "a2":"mom tahseen",
        "a3":"mom tahseen son"
    }
}
var IDOFLEVLS1 = "0b943a24-74c8-4ea1-Ab2c-3227224d8f18"
var IDOFLEVLS2 = "0079013d-Bc13-490f-A9fc-258c96d15b16"
var IDOFLEVLS3 = "5fb73d1c-A0c2-4edf-A2e4-39819e5e63eb"
var IDOFLEVLS4 = "20beb0c4-D3e2-48e6-Bb28-4dd3e719dc41"
var IDOFLEVLS5 = "5f645717-0a01-4bad-94c4-6487a925e517"
var IDOFLEVLS6 = "3bfefaa4-3748-4b22-9bbe-428496830cce"
var IDOFLEVLS7 = "32169472-7fe9-49d6-80c9-Aa42d263e257"
var finisPageId = 43434
// Page Not Found   
// l1
if( id === IDOFLEVLS1)
{
    console.log("your id is : " + id)
    q.innerHTML = GameData.l1.q
    a1.innerHTML = GameData.l1.a1
    a2.innerHTML = GameData.l1.a2
    a3.innerHTML = GameData.l1.a3
    a4.innerHTML = GameData.l1.a4
    function red(){
        this.style.backgroundColor = "red"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS2}`
        },2000)
    }
    function blue(){
        this.style.backgroundColor = "#0077b7"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS2}`
        },2000)
    }
    a1.addEventListener("click",blue)
    a2.addEventListener("click",red)
    a3.addEventListener("click",red)
    a4.addEventListener("click",red)
}  
// l2
if(id ===  IDOFLEVLS2){
    console.log("your id is : " + id)
    q.innerHTML = GameData.l2.q
    a1.innerHTML = GameData.l2.a1
    a2.innerHTML = GameData.l2.a2
    a3.innerHTML = GameData.l2.a3
    a4.innerHTML = GameData.l2.a4
    function red(){
        this.style.backgroundColor = "red"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS3}`
        },2000)
    }
    function blue(){
        this.style.backgroundColor = "#0077b7"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS3}`
        },2000)
    }
    a1.addEventListener("click",red)
    a2.addEventListener("click",red)
    a3.addEventListener("click",blue)
    a4.addEventListener("click",red)
}
// l3
if(id === IDOFLEVLS3){
    console.log("this id "+id)
    q.innerHTML = GameData.l3.q
    a1.innerHTML = GameData.l3.a1
    a2.innerHTML = GameData.l3.a2
    function red(){
        this.style.backgroundColor = "red"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS4}`
        },2000)
    }
    function blue(){
        this.style.backgroundColor = "#0077b7"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS4}`
        },2000)
    }
    a1.addEventListener("click",blue)
   a2.addEventListener("click",red)
}
// l4
if(id ===  IDOFLEVLS4){
    console.log("your id is : " + id)
    q.innerHTML = GameData.l4.q
    a1.innerHTML = GameData.l4.a1
    a2.innerHTML = GameData.l4.a2
    a3.innerHTML = GameData.l4.a3
    a4.innerHTML = GameData.l4.a4
    function red(){
        this.style.backgroundColor = "red"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS5}`
        },2000)
    }
    function blue(){
        this.style.backgroundColor = "#0077b7"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS5}`
        },2000)
    }
    a1.addEventListener("click",red)
    a2.addEventListener("click",blue)
    a3.addEventListener("click",red)
    a4.addEventListener("click",red)
}
// l5
if(id == IDOFLEVLS5){
    console.log("your id is : " + id)
    q.innerHTML = GameData.l5.q
    a1.innerHTML = GameData.l5.a1
    a2.innerHTML = GameData.l5.a2
    function red(){
        this.style.backgroundColor = "red"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS6}`
        },2000)
    }
    function blue(){
        this.style.backgroundColor = "#0077b7"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS6}`
        },2000)
    }
    a1.addEventListener("click",blue)
    a2.addEventListener("click",red)
}
//  l6
if(id == IDOFLEVLS6){
    console.log("your id is : " + id)
    q.innerHTML = GameData.l6.q
    a1.innerHTML = GameData.l6.a1
    a2.innerHTML = GameData.l6.a2
    function red(){
        this.style.backgroundColor = "red"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS7}`
        },2000)
    }
    function blue(){
        this.style.backgroundColor = "#0077b7"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=${IDOFLEVLS7}`
        },2000)
    }
    a1.addEventListener("click",blue)
    a2.addEventListener("click",red)
}
// l7
if(id == IDOFLEVLS7){
    console.log("your id is : " + id)
    q.innerHTML = GameData.l7.q
    a1.innerHTML = GameData.l7.a1
    a2.innerHTML = GameData.l7.a2
    a3.innerHTML = GameData.l7.a3
    function red(){
        this.style.backgroundColor = "red"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=43434`
        },2000)
    }
    function blue(){
        this.style.backgroundColor = "#0077b7"
        this.style.color = "#fff"
        setTimeout(()=>{
           location.href = `/index.html?id=43434`
        },2000)
    }
    a1.addEventListener("click",blue)
    a2.addEventListener("click",red)
    a3.addEventListener("click",red)
}
// finish page
if(id===finisPageId){
      q.innerHTML = "You Have Finised"
}