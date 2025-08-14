function getData(dataId,getNextData){
    setTimeout(function(){
        console.log("Hello Rishu",dataId);
        if(getNextData){
            getNextData();
        }
    },1000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});
