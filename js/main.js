const workCurrent = document.getElementById("time-work-current");
const workLast = document.getElementById("time-work-last");
const playCurrent = document.getElementById("time-play-current");
const playLast = document.getElementById("time-play-last");
const studyCurrent = document.getElementById("time-study-current");
const studyLast = document.getElementById("time-study-last");
const exerciseCurrent = document.getElementById("time-exercise-current");
const exerciseLast = document.getElementById("time-exercise-last");
const socialCurrent = document.getElementById("time-social-current");
const socialLast = document.getElementById("time-social-last");
const selfcareCurrent = document.getElementById("time-selfcare-current");
const selfcareLast = document.getElementById("time-selfcare-last");

const allLi = document.querySelectorAll("li");
const dailyLink = document.getElementById("daily");
const weeklyLink = document.getElementById("weekly");
const monthlyLink = document.getElementById("monthly");

let timeframe = "weekly";
renderTimes();

let displayCurrentText = "";
let displayPreviousText = "";


async function getTimes() {
    try {
        const response = await fetch("./data/data.json");
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data.");
    }
}

function highlightTimeframe() {
    allLi.forEach((item) => {
        item.classList.remove("highlight");
    });

    switch(timeframe) {
        case "daily":
            dailyLink.classList.add("highlight");
            break;
        case "weekly":
            weeklyLink.classList.add("highlight");
            break;
        case "monthly":
            monthlyLink.classList.add("highlight");
            break;
    }
}


function renderTimes() {
    highlightTimeframe();
    
    let prefix;
    switch (timeframe) {
        case "daily":
            prefix = "Yesterday - ";
            break;
        case "weekly":
            prefix = "Last Week - ";
            break;
        case "monthly":
            prefix = "Last Month - ";
            break;
    }
    
    const times = getTimes();
    
    times.then((data) => {
        data.forEach((item) => {
            switch (item.title) {
                case "Work":
                    displayCurrentText = item["timeframes"][timeframe]["current"];
                    displayPreviousText = item["timeframes"][timeframe]["previous"];
                    displayCurrentText += "hrs";
                    displayPreviousText = prefix + displayPreviousText + "hrs";
                    workCurrent.innerText = displayCurrentText;
                    workLast.innerText = displayPreviousText;
                    break;
    
                case "Play":
                    displayCurrentText = item["timeframes"][timeframe]["current"];
                    displayPreviousText = item["timeframes"][timeframe]["previous"];
                    displayCurrentText += "hrs";
                    displayPreviousText = prefix + displayPreviousText + "hrs";
                    playCurrent.innerText = displayCurrentText;
                    playLast.innerText = displayPreviousText;
                    break;
    
                case "Study":
                    displayCurrentText = item["timeframes"][timeframe]["current"];
                    displayPreviousText = item["timeframes"][timeframe]["previous"];
                    displayCurrentText += "hrs";
                    displayPreviousText = prefix + displayPreviousText + "hrs";
                    studyCurrent.innerText = displayCurrentText;
                    studyLast.innerText = displayPreviousText;
                    break;
    
                case "Exercise":
                    displayCurrentText = item["timeframes"][timeframe]["current"];
                    displayPreviousText = item["timeframes"][timeframe]["previous"];
                    displayCurrentText += "hrs";
                    displayPreviousText = prefix + displayPreviousText + "hrs";
                    exerciseCurrent.innerText = displayCurrentText;
                    exerciseLast.innerText = displayPreviousText;
                    break;
    
                case "Social":
                    displayCurrentText = item["timeframes"][timeframe]["current"];
                    displayPreviousText = item["timeframes"][timeframe]["previous"];
                    displayCurrentText += "hrs";
                    displayPreviousText = prefix + displayPreviousText + "hrs";
                    socialCurrent.innerText = displayCurrentText;
                    socialLast.innerText = displayPreviousText;
                    break;
    
                case "Self Care":
                    displayCurrentText = item["timeframes"][timeframe]["current"];
                    displayPreviousText = item["timeframes"][timeframe]["previous"];
                    displayCurrentText += "hrs";
                    displayPreviousText = prefix + displayPreviousText + "hrs";
                    selfcareCurrent.innerText = displayCurrentText;
                    selfcareLast.innerText = displayPreviousText;
                    break;
    
                default:
                    break;
            }
        })
    });
}

allLi.forEach((item) => {
    item.addEventListener('click', (e) => {
        timeframe = e.target.id;
        renderTimes();
    })
});