/* Practice Problem-2:
Getting out of school in a hurry, but when crossing the road, the traffic signal is red. In this case, if you try to cross the road, it can be dangerous. If it is yellow then you should stop. And if the traffic signal is green then you should cross the road. So write a code. Where we have a variable called signal. Its value can be green, yellow, or red. Different work will be done accordingly. So, write that code quickly. */



let trafficSignal=prompt("Now if you want to cross the road, write the name of any of the colors from green, yellow, or red?")

trafficSignal=trafficSignal.toLowerCase();

if(trafficSignal=="green"){
    // console.log("You can cross the road now");
    document.write("You can cross the road now")
}
else if(trafficSignal=="red"){
    // console.log("You can't cross the road now");
    document.write("You can't cross the road now")

}else if(trafficSignal=="yellow"){
    // console.log("You can cross the road now");
    document.write("You can cross the road now");
}else{
    // console.log("You give the right value");
    document.write("You give the right value");
}