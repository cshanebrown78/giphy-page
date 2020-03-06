// $(document).ready(function() {

    // Array that holds the topics for the gifs
    var topics = ["airplane", "helicopter", "spaceship", "glider", "f-16", "f-22", "f-35", "p51 Mustang", "cessna", "cirrus sr22", "boeing", "falcon-9", "starship", "falcon heavy", "gyrocopter", "hang glider", "f14 tomcat"];

    buttonCreate();

    // Function that initially adds the topic buttons to the page
    function buttonCreate(){ 
        $(".aircraft-buttons").empty();   
        for (var i = 0; i < topics.length; i++) {
            aircraftBtn = $("<button type='button' class='btn btn-primary aircraft'>")
            aircraftBtn.attr("data-aircraft", topics[i]);
            aircraftBtn.text(topics[i]);
            $(".aircraft-buttons").append(aircraftBtn);
        };
    };    
// });

    // Click event that pulls the gifs based on the button clicked
    $(document).on("click",".aircraft",function(){
        $(".gifs").empty();
        var aircraft = $(this).attr("data-aircraft");
        console.log(aircraft);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        aircraft + "&api_key=yWGuBvlaHmB4UaZ5SAJlstG7bG6D5gMN&limit=10";

        console.log(queryURL);
        // jquery ajax call to pull data from API
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            var results = response.data;
            
            // Loop that pulls that pushes the gifs to the html and gives them attributes
            for(var j = 0; j < results.length; j++) {
                var gDiv = $("<div class='gif-images'>");
                var rating = results[j].rating;
                var par = $("<p>").text("Rating: " + rating);
                var aircraftImage = $("<img>");
                // Adds attributes to the images so that they can have still and animate functionality when clicked
                aircraftImage.attr("src", results[j].images.fixed_height_still.url);
                aircraftImage.attr("data-still", results[j].images.fixed_height_still.url);
                aircraftImage.attr("data-animate", results[j].images.fixed_height.url);
                aircraftImage.attr("data-state", "still");
                aircraftImage.addClass("gif");
                gDiv.prepend(par);
                gDiv.prepend(aircraftImage);
                $(".gifs").prepend(gDiv);
            };

            // Click event that animates and stills the gifs
            $(".gif").on("click", function() { 
                var state = $(this).attr("data-state");
                // console.log(state);
                // console.log(this);

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still")
                };
            });

        });
    });

    // Creates the new button based on user input
    $(document).on("click","#add-topic",function(){
        event.preventDefault();
        var newAircraft = $("#add-aircraft").val().trim();
        console.log(newAircraft);
        topics.push(newAircraft);
        console.log(topics);

        buttonCreate();
    });
