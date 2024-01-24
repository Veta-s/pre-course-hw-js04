let timerId; // переменная, которая будет хранить ID таймера
let timerOn = false;

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
	if (timerOn) {
		return;
	}
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setlInterva
	timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду

	timerOn = true
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
	if (!timerOn) {
		return; // Если таймер не работает, ничего не делаем
	}
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
	clearInterval(timerId); // останавливаем таймер
	timerOn = false
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}