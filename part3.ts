import { TodoInterface } from './interface';

class Todo implements TodoInterface {
    myArray: Array<string> = [];
    addTask(task: string): number {
        this.myArray.push(task);
        console.log("Task " + task + " added to array");
        return this.myArray.length;

    }


    listAllTasks(): void {
        //for (let i=0;i<myArray.length;i++){
        // console.log("List of items in array: " );
        //}
        console.log("items in array: ");
        this.myArray.forEach(function (item) {
            console.log(item);
        })
    }


    DeleteTask(task: string): number {
        let index: number;
        index = this.myArray.indexOf(task);
        if (index > -1) {
            this.myArray.splice(index, 1);
            console.log("Task deleted " + task);
        } else {
            console.log("Item is not in array");

        }
        return this.myArray.length;
    }
}
let todo1 = new Todo();
todo1.addTask("part a");
todo1.listAllTasks();
todo1.DeleteTask("part b");