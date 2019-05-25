//get feedback
function getDetails() {
	jQuery
			.ajax({
				url : "localhost:8090/products/reviews/"
						+ $("#id").val(),
				type : "GET",
				contentType : "application/json",
				dataType : 'json',
				success : function(data, textStatus, errorThrown) {
					// here is your json.
					// process it
					$("#title").text(data.title);
					$("#description").text(data.feedback);

				},
				error : function(jqXHR, textStatus, errorThrown) {
					$("#title").text("Sorry! feedback not found!");
					$("#description").text("");
				},
				timeout : 120000,
			});
};

//add feedback
function addFeedBack() {
	jQuery.ajax({
		url : "localhost:8090/products/reviews/" + $("#newId").val() + "/" + $("#newTitle").val() + "/" + $("#newPrice").val(),
		type : "POST",
		contentType : "application/json",
		dataType : 'json',
		success : function(data, textStatus, errorThrown) {
			// here is your json.
			// process it
			$("#addResult").text("feedback added sucessfully");
		},
		error : function(jqXHR, textStatus, errorThrown) {
			$("#addResult").text("Sorry! feedback not added!");
		},
		timeout : 120000,
	});
};

//delete feedback
function removefeedback() {
	jQuery.ajax({
		url : "localhost:8090/products/reviews/" + $("#deleteId").val(),
		type : "DELETE",
		contentType : "application/json",
		dataType : 'json',
		success : function(data, textStatus, errorThrown) {
			$("#deleteResult").text("feedback deleted sucessfully!");
		},
		error : function(jqXHR, textStatus, errorThrown) {
			$("#deleteResult").text("Sorry! feedback not deleted!");
		},
		timeout : 120000,
	});
};