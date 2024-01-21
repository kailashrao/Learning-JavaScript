const cities = [
    ["sf", "America/Los_Angeles"],
    ["ny", "America/New_York"],
    ["lo", "Europe/London"],
    ["du", "Asia/Dubai"],
    ["ba", "Asia/Kolkata"],
    ["si", "Asia/Singapore"],
    ["to", "Asia/Tokyo"],
    ["sy", "Australia/Sydney"],
]

for(let i = 0; i < cities.length; i++){
    document.getElementById(cities[i][0]).innerHTML = new Date().toLocaleString({}, {hour: "2-digit", minute: "2-digit", timeZone: cities[i][1]});
}


