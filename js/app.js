$(document).ready(function () {

// TO JEST WERSJA Z ZAJEC NIESKONCZONA!!!

function main () {
	$.ajax({
		url: "http://127.0.0.1:8000/book/"
	}).done(function(json) {

			var $section = $('#books-list').detach();	// wyciagamy <section> 

			for(var i=0; i<json.length; i++) {								//
				var $book = $("<p>", {class: 'book-title', 'data-id': json[i].id});
				$book.html("<strong>" + json[i].title + "</strong>");		// obrabiamy wyciagniete <section>
				$section.append($book);
				$section.append($("<div class='book-details'>"));			//
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













			// for(var i=0; i<json.length; i++) {

			

			

			

			// }









// if ( $( ".book-title" ).length ) { 
//    			 $( ".book-title" ).show(); 
// 		} else {
// 			console.log("nie ma!")
// 		}


// var $test = $("section")
// $test.on("click", function(event) {
// 	alert("nie dotykaj!")
// });

// if ($test.is("#books-list")) {
// 	alert("UDAŁO SIĘ!!!");
// } else {
// 	alert("NIE EEEEE EE EE");
// }



});



