
const fs = require('fs'); 
const addperson = (fname,lname,age,city,id) =>{ 
    const allData = loadInfo()

    const duplicatedData = allData.filter((obj) => { 
        return obj.id ===id 
    })
    if (duplicatedData.length == 0){ 
    allData.push ({
        id: id,
        fname : fname,
        lname: lname , 
        age : age ,
        city : city ,
       

    } ) 

    saveallData (allData)
} else{      
    console.log("ERROR DUPLICATED DATA")
}
}
                                     // ------------loadInfo Logic-----------------//

const loadInfo = () =>{
    
    try{
        const dataJson = fs.readFileSync("data5.json").toString()
        return JSON.parse (dataJson)
    }catch{
        return []
    } 
}
                              //------------------------savealldata Logic ---------------------//
 const saveallData = (allData) =>{
    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync("data5.json",saveallDataJson) 
 }
                           //--------------------------Deleted Data--------------------------//
   const DeletedData = (id) =>{     
    const allData = loadInfo()              
    const dataToKeep =allData.filter((obj) => {   
         return obj.id !== id         
    })         
     
    saveallData(dataToKeep)
    console.log("you have successfully deleted the item" )
    console.log(dataToKeep)    
   }                     
   
                                          ///-------------- Logic for read data --------------///

const readData = (id) => {
    const allData = loadInfo()
    const itemNeeded = allData.find((obj) =>{
        return obj.id == id    
    })
    console.log(itemNeeded)


                           // ---------------the logic for the case when the item is not exist------------// 
    if (itemNeeded){     
        console.log(itemNeeded.id)
    } else {
         console.log("id needed not found")
    }
}

                                                   ///---------------- logic for list data-------------//

const listData = () =>{
    const allData = loadInfo() 
    allData.forEach((x) =>{
        console.log(x.fname , x.age , x.city);
    })
}
                             //----------------exports !!!---------//
 module.exports= {
    addperson,
    DeletedData,
    readData, 
    listData
 }