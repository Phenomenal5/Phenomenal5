var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibraryMaterial = /** @class */ (function () {
    function LibraryMaterial(id, title, year) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.id = id;
        this.title = title;
        this.year = year;
    }
    LibraryMaterial.prototype.getInfo = function () {
        return "Id: ".concat(this.id, ", Title: ").concat(this.title, ", Year: ").concat(this.year);
    };
    return LibraryMaterial;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, title, year, author) {
        var _this = _super.call(this, id, title, year) || this;
        _this.author = author;
        return _this;
    }
    Book.prototype.borrow = function () {
        console.log("Borrowing book ".concat(this.title, " by ").concat(this.author));
    };
    return Book;
}(LibraryMaterial));
var DVD = /** @class */ (function (_super) {
    __extends(DVD, _super);
    function DVD(id, title, year, duration) {
        var _this = _super.call(this, id, title, year) || this;
        _this.duration = duration;
        return _this;
    }
    DVD.prototype.borrow = function () {
        console.log("Borrowing DVD ".concat(this.title, " for ").concat(this.duration, " in minutes"));
    };
    return DVD;
}(LibraryMaterial));
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItems = function (item) {
        this.items.push(item);
    };
    Library.prototype.listItems = function () {
        console.log(this.items);
    };
    Library.prototype.findItemsById = function (id) {
        var val = this.items.filter(function (item) { return item.id === id; })[0] || null;
        if (val) {
            console.log(val);
            return val;
        }
        else {
            console.log('item not found');
        }
    };
    return Library;
}());
var library = new Library();
var dvd1 = new DVD(2, "you", 2025, 10);
var book1 = new Book(1, "Type", 2024, "Abdullahi");
library.addItems(dvd1);
library.addItems(book1);
library.listItems();
library.findItemsById(2);
library.findItemsById(5);
