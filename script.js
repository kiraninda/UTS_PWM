if("serviceworker" in navigator){
    navigator.serviceworker.register("sworker.js").then(registration=>{
        console.log("Service worker registered")
        console.log(registration);
    }).catch(error=>{
        console.log("Service worker error")
        console.log(error)
    })
} 
else{
    alert("Service worker not working")
}