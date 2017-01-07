$(document).ready(function () {

// TO JEST WERSJA Z ZAJEC NIESKONCZONA!!!

function main () {
	$.ajax({
		url: "http://127.0.0.1:8000/book/"
	}).done(function(json) {

			var $section = $('#books-list').detach();	// wyciagamy <section> 

			for(var i=0; i<json.length; i++) {								//
				var $book = $('<div>', {class: 'book-title btn-xs btn-default quarter', 'data-id': json[i].id});
				$book.html("<strong>" + json[i].title + "</strong>");		// obrabiamy wyciagniete <section>
				var $buttonDel = $("<button>", {"data-id": json[i].id, class: "delete btn-xs btn-danger"});
				$buttonDel.text('DELETE')
				$section.append($book);
				$section.append($("<div class='well book-details'>"));
				$section.append($buttonDel)			//
			}

			$('h1#title').after($section);		// wrzucamy spowrotem <section> dajemy after zeby bylo po h1
			
		});
	}
					
main();

$(document).on("click", ".book-title", function(event) {

	var self = this

	$.ajax({
		url: "http://127.0.0.1:8000/book/" + $(this).data("id") + "/" 
	}).done(function(json) {
		
		$(self).next().html("<p>" + json.author + "</p>" + "<p>" + json.title + "</p>" +
		"<p>" + json.isbn + "</p>" + "<p>" + json.publisher + "</p>" + "<p>" + 
		json.genre + "</p>").slideToggle("slow") 
	
	});

});

// function new () {

// 	$.ajax({
// 		url: "http://127.0.0.1:8000/book/" + $(this).last().data(parseInt("id") + 1) + "/",
// 		type: "POST" 
// 	}).done(function(json) {

// 		var $form = $("form")

// 		for (var i=0; i<form.length; i++) {

// 		}
		
// 		// $(self).next().html("<p>" + json.author + "</p>" + "<p>" + json.title + "</p>" +
// 		// "<p>" + json.isbn + "</p>" + "<p>" + json.publisher + "</p>" + "<p>" + 
// 		// json.genre + "</p>").slideToggle("slow") 
	
// 	});

// }

// new();



$("form").on("submit", function(e) {


    

    var $newAuthor = $("input").eq(0).val();
    console.log($newAuthor);
    var $newTitle = $("input").eq(1).val();
    console.log($newTitle);
    var $newISBN = $("input").eq(2).val();
    console.log($newISBN);
    var $newPublisher = $("input").eq(3).val();
    console.log($newPublisher);
    var $newGenre = $("select").val();
    console.log($newGenre);

	var OK = true;


    if ($newTitle.length < 1  || $newAuthor.length < 1  || $newPublisher.length < 1) {
        OK = false;

        alert("FORM ERROR!!! Check length of inputs.");
        }

    if (OK == false) {
    e.preventDefault();
    } else if (OK == true) {

	    $.ajax({
	    url:  "http://127.0.0.1:8000/book/",
	    type: "POST",
	    data: {'author': $newAuthor, 'title': $newTitle, 'isbn': $newISBN, 'publisher': $newPublisher, 'genre': $newGenre}
	    }
	    ).done(function(json) {
         alert("Book added");
	    });
	    
		}

});




$(document).on("click", ".delete", function(event) {

	var self = this

	$.ajax({
		url: "http://127.0.0.1:8000/book/" + $(this).data("id") + "/",
		type: "DELETE" 
	}).done(function(json) {
		
		alert("BOOK HAS BEEN DELETED");
		window.setTimeout(function(){location.reload()},100);
	
	});

});


});





