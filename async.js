let names = 'hamid'
var age = 33
let stock = {
    fruits:['apple','banana','orange']
}

//------Start of callback hell example
{
    // let production=()=>{
    //     setTimeout(()=>{
    //         console.log(`Production has started`)
    //         setTimeout(()=>{
    //             console.log(`Food has been chopped`)
    //             setTimeout(()=>{
    //                 console.log(`Water and ice added`)
    //             },1000)
    //         },1000)
    //     },1000)
    // }

    // let order=(call_production,fruit)=>{
    //     setTimeout(()=>{
    //         console.log(`Order has been placed`)
    //         call_production()
    //     },1000)
    // }

    // order(production)
    // console.log('In global execution context')
}
//-------End of Callback hell----------------------


//------Start of Promise-----------------
    let isPromise = false;
    let order = (work,time)=>{

        return new Promise((resolve,reject)=>{
            if(isPromise){
                setTimeout(()=>{
                    resolve(work())
                },time)
            }else{
                reject(console.log('Sorry cannot serve'))
            }
        })

        
    }
    order(()=>console.log('order has been placed'),2000)
    .catch(()=>{console.log('Error in code')})
    .finally(()=>{console.log('Finally promise closed')})

//---------End of Promise-----------------