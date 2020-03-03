var topics = ["airplane", "helicopter", "spaceship", "glider", "f-16", "f-22", "f-35", "p51 Mustang", "cessna", "cirrus", "boeing", "falcon-9", "starship", "falcon heavy"];

for (var i = 0; i < topics.length; i++) {
    aircraftBtn = $("<button type='button' class='btn btn-primary aircraft'>")
    aircraftBtn.attr("data-aircraft", topics[i]);
    aircraftBtn.text(topics[i]);
    $(".aircraft-buttons").append(aircraftBtn);
}

$(".aircraft").on("click", function() {
    var aircraft = $(this).attr("data-aircraft");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      aircraft + "&api_key=yWGuBvlaHmB4UaZ5SAJlstG7bG6D5gMN&limit=10";

      console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        
        for(var j = 0; j < results.length; j++) {
            var gDiv = $("<div class='gif-images'>");
            var rating = results[j].rating;
            var par = $("<div>").text("Rating: " + rating);
            var aircraftImage = $("<img>");
            aircraftImage.attr("src", results[j].images.fixed_height.url);
            gDiv.prepend(par);
            gDiv.append(aircraftImage);
            $(".gifs").prepend(gDiv);
        }


    });
});