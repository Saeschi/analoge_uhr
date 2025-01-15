// Remove the existing clock if present
const existingClock = document.querySelector('.outer-clock-face');
if (existingClock) {
    existingClock.parentElement.remove();
}

// Define the new clock structure
const newHTML = `
<div class="container">
  <div class="clock">
    <div class="hand" id="hour" style="--clr:rgb(0, 255, 225); --h: 74px">
      <i></i>
    </div>
    <div class="hand" id="min" style="--clr:rgb(0, 255, 51); --h: 84px">
      <i></i>
    </div>
    <div class="hand" id="sec" style="--clr:rgb(142, 142, 142); --h: 94px">
      <i></i>
    </div>

    <span style="--i: 1"><b>1</b></span>
    <span style="--i: 2"><b>2</b></span>
    <span style="--i: 3"><b>3</b></span>
    <span style="--i: 4"><b>4</b></span>
    <span style="--i: 5"><b>5</b></span>
    <span style="--i: 6"><b>6</b></span>
    <span style="--i: 7"><b>7</b></span>
    <span style="--i: 8"><b>8</b></span>
    <span style="--i: 9"><b>9</b></span>
    <span style="--i: 10"><b>10</b></span>
    <span style="--i: 11"><b>11</b></span>
    <span style="--i: 12"><b>12</b></span>
  </div>
</div>`;

// Add the new clock to the document
const body = document.body;
const container = document.createElement('div');
container.innerHTML = newHTML;
body.appendChild(container);

// Select clock hands
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

// Update clock hands based on the current time
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = 30 * hours + minutes / 2;
    const minuteRotation = 6 * minutes;
    const secondRotation = 6 * seconds;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Start clock updates
setInterval(updateClock, 1000);
updateClock();
