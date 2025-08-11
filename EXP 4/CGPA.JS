var subname={
"m1":"Mathmatics-I",
"m2":"Mathematics-II",
"te":"Technical English",
"bce":"Basic Civil Engineering",
"bme":"Basic Mechanical Engineering",
"ec":"Engineering Chemistry",
"psc":"Problem Solving using C",
"beee":"Basic Electrical Engineering",
"beee lab":"Basic Electrical and Electronics Engineering Laboratory",
"ep":"Engineering Physics",
"ep lab":"Engineering Physics Laboratory",
"dt":"Design Thinking",
"ec lab":"Engineering Chemistry Laboratory",
"eg":"Engineering Graphics",
"cm":"Concrete Mathematics",
"evs":"Environment Science",
"os":"Operating Systems",
"cn":"Computer Networks",
"java":"Java Programming",
"dbms":"Database Management Systems",
"os lab":"Operating Systems Lab",
"cn lab":"Computer Networks Lab",
"java lab":"Java Programming Lab",
"dbms lab":"DataBase Management Lab",
"ds":"Data Structures",
"ds lab":"Data Structures Lab",
"toc":"Thory of Computation",
"wt":"Web Technology",
"cd":"Compiler Design",
"dwdm":"Data Warehouse and Data Mining",
"coa":"Computer Organisation and Architecture",
"pp":"Python Programming",
"pp lab":"Python Programming lab",
"uiux":"UI And UX Design",
"bdat":"BigData and Architecture Tools",
"cyber":"Cyber Security",
"iot":"Internet of Things",
"ccc":"Cloud Computing Concepts",
"dv":"Data Visualization",
"dfm":"Digital Forensics Methods",
"bt":"BlockChain Technology",
"cf":"Cyber Forensics",
"ai":"Artificial Intelligence",
"wcn":"Wireless Communication Networks",
"energy":"Energy management"
}
var k,gotsum=0,totsum=0,cgpa=0,oo,ttt;
var names=new Array();
var credit=new Array();
var grade=new Array();
var tot=new Array();
var num=new Array();
var subtot=new Array();
var fname=new Array();
function func(){
k=parseInt(document.getElementById("subcount").value);
for(var i=0;i<k;i++){
 var x = document.createElement("INPUT");
 var y=document.createElement("INPUT");
 var z= document.createElement("INPUT");
 var a = document.createElement("p");
 var b=document.createElement("p");
 var c= document.createElement("p");
 var h="subject"+i;
 var p="credit"+i;
 var j="grade"+i;
x.setAttribute("type", "text");
y.setAttribute("type", "text");
z.setAttribute("type", "text");
x.setAttribute("id",h);
y.setAttribute("id",p);
z.setAttribute("id",j);
x.setAttribute("placeholder","Enter Subject "+(i+1)+" Name");
y.setAttribute("placeholder", "Enter Subject "+(i+1)+" Credits");
z.setAttribute("placeholder", "Enter Subject "+(i+1)+" Grade");
document.getElementById("list").appendChild(x);
document.getElementById("list").appendChild(y);
document.getElementById("list").appendChild(z);
}
var pp=document.createElement("div");
pp.setAttribute("id", "but");
pp.setAttribute("class", "but");
document.getElementById("list").appendChild(pp);
oo=document.createElement("BUTTON");
ttt = document.createTextNode("Calculate");
oo.appendChild(ttt);
oo.setAttribute("value", "calculate");
oo.setAttribute("id", "sub12");
oo.setAttribute("class", "sub12");
oo.setAttribute("onclick", "calc()");
document.getElementById("but").appendChild(oo);
for (var sub in subname){
 var row=document.createElement("tr");
 var c1=document.createElement("td");
 var liyu = document.createTextNode(sub.toUpperCase());
 c1.appendChild(liyu);
 var c2=document.createElement("td");
 liyu=document.createTextNode(subname[sub]);
 c2.appendChild(liyu);
 row.appendChild(c1);
 row.appendChild(c2);
 document.getElementById("subtable").appendChild(row);
}
}
function calc(){
 for (var i=0;i<k;i++){
     names[i]=((document.getElementById("subject"+i).value).toLowerCase());
 credit[i]=document.getElementById("credit"+i).value;
 grade[i]=document.getElementById("grade"+i).value;
 tot[i]=parseInt(credit[i])*10;
 if(grade[i]=='o'||grade[i]=='O')
{
 num[i]=10;
}
else if(grade[i]=='a+'||grade[i]=='A+')
{
 num[i]=9;
}
 else if(grade[i]=='a'||grade[i]=='A')
{
 num[i]=8;
}
else if(grade[i]=='b+'||grade[i]=='B+')
{
 num[i]=7;
}
else if(grade[i]=='b'||grade[i]=='B')
{
 num[i]=6;
}
else if(grade[i]=='c'||grade[i]=='C')
{
 num[i]=5; }
 else
{
 num[i]=0;
 }
 subtot[i]=parseInt(credit[i])*num[i];
 tot[i]=10*parseInt(credit[i]);
 }
 for(var i=0;i<k;i++){
 gotsum=subtot[i]+parseInt(gotsum);
 totsum=tot[i]+parseInt(totsum);
 }
 cgpa=(parseInt(gotsum)*10/parseInt(totsum)).toFixed(2);
 oo.removeChild(ttt);
 ttt = document.createTextNode("Your CGPA is "+cgpa);
 oo.appendChild(ttt);
 for(var itr=0;itr<k;itr++){
 for (var subu in subname){
 if(names[itr]===subu){
 fname[itr]=subname[subu];
 } } }
 for(var itr1=0;itr1<k;itr1++){
 var row=document.createElement("tr");
 var c1=document.createElement("td");
 var liyu = document.createTextNode(fname[itr1]||(names[itr1].toUpperCase()));
 c1.appendChild(liyu);
 var c2=document.createElement("td");
 liyu=document.createTextNode(credit[itr1]);
 c2.appendChild(liyu);
 var c3=document.createElement("td");
 liyu=document.createTextNode(grade[itr1].toUpperCase());
 c3.appendChild(liyu);
 row.appendChild(c1);
 row.appendChild(c2);
 row.appendChild(c3);
 document.getElementById("rtable").appendChild(row);
 }
 var foot=document.createElement("td");
 foot.setAttribute("colspan","3");
 foot.setAttribute("class","cap");
 foot.setAttribute("id","cap");
 var tn=document.createTextNode("Your CGPA Is "+cgpa);
 foot.appendChild(tn);
 document.getElementById("rtable").appendChild(foot);
 var element = document.getElementById("list");
 element.classList.add("hide");
 element = document.getElementById("result");
 element.classList.remove("hide");
}
$(document).ready(function(){
 $("#sub").click(function(){
 $(".main").addClass("hide");
 $(".list").removeClass("hide");
 });
 $(".sub9").click(function(){
 $(".codes").removeClass("hide");
 });
 $(".close").click(function(){
 $(".codes").addClass("hide");
 });
 $(".sub12").click(function(){
    $(".list").addClass("hide");
 $(".result").removeClass("hide");
 });
});