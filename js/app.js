$(document).ready(function () {



function main () {
	$.ajax({
		url: "http://127.0.0.1:8000/book/"
	}).done(function(json) {

			var $section = $('#books-list').detach();	// wyciagamy <section> 

			for(var i=0; i<json.length; i++) {								//
				var $book = $("<p>");
				$book.html("<strong>" + json[i].title + "</strong>");		// obrabiamy wyciagniete <section>
				$section.append($book);
				$section.append($("<div class='book-details'>"));								//
			}

			$('h1#title').after($section);		// wrzucamy spowrotem <section> dajemy after zeby bylo po h1

		});

		$(".book-title").on("click", ".book-title", function(event) {
			alert("click");
		});




	}
	
main();


});



