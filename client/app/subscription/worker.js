self.onmessage = function(event){
    if (event.data.type == "start"){
        process(event.data.value);
    }};

function process(number){

    self.postMessage({
        type: "debug",
        message: "Starting processing..."
    });

    //code

    self.postMessage({
        type: "debug",
        message: "Processing finished"
    });
}