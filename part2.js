var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("Task " + task + " added to array");
    return myArray.length;
}
function listAllTasks() {
    //for (let i=0;i<myArray.length;i++){
    // console.log("List of items in array: " );
    //}
    console.log("items in array: ");
    myArray.forEach(function (item) {
        console.log(item);
    });
}
function DeleteTask(task) {
    var index;
    index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Task deleted " + task);
    }
    else {
        console.log("Item is not in array");
    }
    return myArray.length;
}
addTask(" Complete part A ");
var itemsInArray = addTask(" Complete part B ");
console.log("Number of items in array " + itemsInArray);
listAllTasks();
//DeleteTask("Tasks deleted");
var count = DeleteTask(" Complete part A ");
console.log("Number of items in array " + count);
