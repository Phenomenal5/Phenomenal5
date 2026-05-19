interface Libraryitem{
    id: number,
    title:string,
    year:number,
    getInfo(): string
}

abstract class LibraryMaterial implements Libraryitem{
    constructor(public id: number,public title:string,public year:number){
        this.id = id;
        this.title = title;
        this.year = year;
    }
    getInfo(): string {
        return `Id: ${this.id}, Title: ${this.title}, Year: ${this.year}`;
    }
    abstract borrow(): void;
}

class Book extends LibraryMaterial{
    constructor(id:number, title:string, year:number, public author:string){
        super(id, title, year);
    }
    borrow(): void {
        console.log(`Borrowing book ${this.title} by ${this.author}`);
    }
}

class DVD extends LibraryMaterial{
    constructor(id:number, title:string, year:number, public duration:number){
        super(id, title, year);
    }
    borrow(): void {
        console.log(`Borrowing DVD ${this.title} for ${this.duration} in minutes`);
    }
}

class Library{
    private items:Libraryitem[] = [];

    addItems(item:Libraryitem){
        this.items.push(item);
    }
    listItems(){
        console.log(this.items);
    }
    findItemsById(id:number){
        let val = this.items.filter(item => item.id === id)[0] || null;
        if(val){
            console.log(val);
            return val;
        }else{
            console.log('item not found');
        }
    }
}


const library = new Library();
const dvd1 = new DVD(2, "you", 2025, 10);
const book1 = new Book(1, "Type", 2024, "Abdullahi");
library.addItems(dvd1)
library.addItems(book1)
library.listItems();
library.findItemsById(2);
library.findItemsById(5);