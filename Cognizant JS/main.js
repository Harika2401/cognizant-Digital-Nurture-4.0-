// 1. JS Basics & Setup
console.log("Welcome to the Community Portal");
window.addEventListener("load", () => {
    alert("Page fully loaded!");
});

// 2. Syntax, Data Types, and Operators
const eventName = "Music Fest";
const eventDate = "2025-06-20";
let seatsAvailable = 100;
console.log(`Upcoming Event: ${eventName} on ${eventDate} with ${seatsAvailable} seats`);
seatsAvailable--;

// 3. Conditionals, Loops, and Error Handling
const events = [
    { name: "Tech Talk", date: "2025-06-10", seats: 0, category: "Tech" },
    { name: "Book Fair", date: "2025-07-01", seats: 50, category: "Books" }
];
events.forEach(event => {
    if (new Date(event.date) > new Date() && event.seats > 0) {
        console.log(`Event: ${event.name} - Seats: ${event.seats}`);
    }
});
function register(event) {
    try {
        if (event.seats <= 0) throw "No seats left!";
        event.seats--;
    } catch (e) {
        console.error("Registration error:", e);
    }
}

// 4. Functions, Scope, Closures
function addEvent(name, date, category) {
    return { name, date, category, seats: 100 };
}
function registerUser(event) {
    if (event.seats > 0) event.seats--;
}
function filterEventsByCategory(events, category, callback) {
    return events.filter(e => callback(e.category, category));
}
function categoryCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}
const musicCount = categoryCounter();

// 5. Objects and Prototypes
function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}
Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};
const event1 = new Event("Dance Fest", "2025-08-15", 30);
console.log(Object.entries(event1));

// 6. Arrays and Methods
const allEvents = [
    { name: "Tech Talk", category: "Tech" },
    { name: "Music Night", category: "Music" }
];
allEvents.push({ name: "Food Fiesta", category: "Food" });
const musicEvents = allEvents.filter(e => e.category === "Music");
const formatted = allEvents.map(e => `Workshop on ${e.name}`);
console.log(formatted);

// 7. DOM Manipulation
const eventSection = document.querySelector("#events");
allEvents.forEach(e => {
    const div = document.createElement("div");
    div.className = "eventCard";
    div.innerHTML = `<h3>${e.name}</h3>`;
    eventSection.appendChild(div);
});

// 8. Event Handling
document.querySelectorAll(".registerBtn").forEach(btn => {
    btn.onclick = () => alert("Registered!");
});
document.getElementById("filterCategory").onchange = e => {
    const value = e.target.value;
};
document.getElementById("searchBox").addEventListener("keydown", e => {
    console.log("Searching:", e.key);
});

// 9. Async JS, Promises, Async/Await
function fetchEvents() {
    document.getElementById("loading").style.display = "block";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err))
        .finally(() => document.getElementById("loading").style.display = "none");
}
async function fetchAsync() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

// 10. Modern JS Features
function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}
const eventObj = { name: "Food Fest", date: "2025-09-01", seats: 100 };
const { name, date } = eventObj;
const eventClone = [...allEvents];

// 11. Working with Forms
document.querySelector("#eventForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const { name, email, event } = e.target.elements;
    if (!name.value || !email.value) {
        alert("Please fill all fields.");
        return;
    }
    console.log("Registered:", name.value, email.value, event.value);
});

// 12. AJAX & Fetch API
document.querySelector("#eventForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value
    };
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(json => alert("Submitted successfully!"))
        .catch(err => alert("Failed to submit."));
    }, 1000);
});

// 13. Debugging and Testing
console.log("Form submission initiated");
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ test: true }),
    headers: { "Content-Type": "application/json" }
})
.then(response => {
    if (!response.ok) throw new Error("Network response failed");
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error("Error caught:", error));

// 14. jQuery and JS Frameworks
$('#registerBtn').click(() => {
    alert("Registered with jQuery!");
});
$('.eventCard').fadeIn();
console.log("Using frameworks like React or Vue allows component-based architecture, state management, and scalability.");
