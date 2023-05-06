const fs = require ("fs");
const yargs = require ("yargs");

const data5 = require("./data5") 

                            //-----------yargs for adding data -----------//
yargs.command({
    command : "add",
    describe :"add new items",
    builder:{
        fname: {
            describe:"this is the  first name of items",
            demandOption :true,
            type : "string",

        },
        lname: {
            describe:"this is the last name of items",
            type : "string",
        },
    },
    handler: (x) => {
    console.log(x)
    data5.addperson(x.fname, x.lname , x.age ,x.city , x.id) 
    } 
 
})
// console.log (yargs.argv) ;

yargs.parse() 

                     //---------- yargs command for delete data------------//

yargs.command({
command: "delete",
describe: "to deleted an item",
handler: (x) => {
    data5.DeletedData(x.id)
}

})
console.log(yargs.argv)

               //---------- yargs  command for reading data -------------//
yargs.command({
    command: "read",
    describe:"read data",
    builder: {
        id: {
            describe: "this is id for reading data",
            demandOption: true,
            type: "string"
        }
    },
    handler : (x) => {
        data5.readData (x.id)
    }
})
console.log(yargs.argv)

                //-------------yargs command for the list------------//
yargs.command({
    command: "list",
    describe: "this is a list of items",
    handler: () => {
        data5.listData()  
    }
})

console.log(yargs.argv)

