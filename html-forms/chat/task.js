const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const time = new Date;
let hour = time.getHours();
let minute = time.getMinutes();
const minutes = (minute < 10) ? '0' + minute : minute;
const hours = (hour < 10) ? '0' + hour : hour;

array = [
    'Добрый день! До свидания!',
    'Убирайтесь',
    'Кто тут?',
    'Мы ничего не будем вам продавать!',
    'Где ваша совесть?!',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше.'
];

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

input.addEventListener('input', () => {
    if(input.value.charAt(0) === ' ') {
        input.value = '';
      }
})

input.addEventListener('keydown', (e) => {
    if(input.value.length > 0 && e.keyCode === 13 ){
        let num = (Math.floor (Math.random() * 5));
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${hours}:${minutes}</div>
          <div class="message__text">
            ${input.value}
          </div>
        </div>`;
      input.value = '';
      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${hours}:${minutes}</div>
          <div class="message__text">
            ${array[num]}
          </div>
        </div>`;
}
})
   