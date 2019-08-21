inlibrary = {
    "books": [
        { "name":"Buku Biologi"},
        { "name":"Buku Fisika"},
        { "name":"Buku Matematika"}
    ]
}

outlibrary = {
    "books": [
    ]
}
function returnBook() {
    var returnID = document.getElementById("input-return-book-id").value
    // back from out library

    // delete from out library

    // save to return bookg
}


function borrowBook() {
    var borrowID = document.getElementById("input-borrow-book-id").value
    
    // Save to temp
    borrowedBook = inlibrary.books[borrowID-1]

    // Delete from inlibrary
    inlibrary.books.splice(borrowID-1, borrowID)

    // Sava to outlibrary
    outlibrary["books"].push(borrowedBook)

    document.getElementById("in-library-book-list").innerHTML = getBookInLibraryList();
    document.getElementById("out-library-book-list").innerHTML = getBookOutLibraryList();
}


function getBookInLibraryList() {
    let inLibraryList = "";
    for (var i = 0; i < inlibrary.books.length; i++) {
        inLibraryList = inLibraryList + (i+1) + ". " + inlibrary.books[i].name + "<br />"
    }
    return inLibraryList
}

function getBookOutLibraryList() {
    let outLibraryList = "";
    for (var i = 0; i < outlibrary.books.length; i++) {
        outLibraryList = outLibraryList + (i+1) + ". " + outlibrary.books[i].name + "<br />"
    }
    return outLibraryList
}