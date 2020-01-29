export interface TodoInterface{
    addTask(task: string): number;
    listAllTasks(): void;
    DeleteTask(task: string): number ;
    myArray: Array<string>
}