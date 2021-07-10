class Book{
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}

let book=new Book("Algoritmos para viver","Brian",500);
let otherBook=new Book("Messias de Duna: 2","Frank Herbert",272);
console.log(book.read());
console.log(otherBook.read());
console.log(book, otherBook);

class ITBook extends Book{
    constructor(title,author,pages,technology){
        super(title,author,pages);
        this.technology=technology;
    }
}

let itBook=new ITBook("Algoritmos para viver","Brian",500,"Algoritmos");
console.log(itBook)

class Person{
    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name=value;
    }
}

let person = new Person("Jorge")
person.name="Obrecht";
console.log(person.name)