var topics = ["airplane", "helicopter", "spaceship", "glider", "f-16", "f-22", "f-35", "p-51", "cessna", "cirrus", "boeing", "falcon-9", "starship", "falcon heavy"];

for (var i = 0; i < topics.length; i++) {
    aircraftBtn = $("<button type='button' class='btn btn-primary aircraft'>")
    aircraftBtn.attr("data-aircraft", topics[i]);
    aircraftBtn.text(topics[i]);
    $(".aircraft-buttons").append(aircraftBtn);
}