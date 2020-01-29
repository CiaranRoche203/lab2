"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.myArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log("Task " + task + " added to array");
        return this.myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        //for (let i=0;i<myArray.length;i++){
        // console.log("List of items in array: " );
        //}
        console.log("items in array: ");
        this.myArray.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.DeleteTask = function (task) {
        var index;
        index = this.myArray.indexOf(task);
        if (index > -1) {
            this.myArray.splice(index, 1);
            console.log("Task deleted " + task);
        }
        else {
            console.log("Item is not in array");
        }
        return this.myArray.length;
    };
    return Todo;
}());
var todo1 = new Todo();
todo1.addTask("part a");
todo1.listAllTasks();
todo1.DeleteTask("part b");
