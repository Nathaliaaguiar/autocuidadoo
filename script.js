document.addEventListener('DOMContentLoaded', () => {
  const days = [
    { number: 1, activity: 'Ligue para um amigo', icon: 'https://img.icons8.com/ios-filled/50/000000/phone.png' },
    { number: 2, activity: 'Agradeça uma conquista', icon: 'https://img.icons8.com/ios-filled/50/000000/thank-you.png' },
    { number: 3, activity: 'Faça meditação', icon: 'https://img.icons8.com/ios-filled/50/000000/meditation.png' },
    { number: 4, activity: 'Beba mais água', icon: 'https://img.icons8.com/ios-filled/50/000000/water.png' },
    { number: 5, activity: 'Faça uma playlist', icon: 'https://img.icons8.com/ios-filled/50/000000/music.png' },
    { number: 6, activity: 'Leia um livro', icon: 'https://img.icons8.com/ios-filled/50/000000/book.png' },
    { number: 7, activity: 'Arrume a casa', icon: 'https://img.icons8.com/ios-filled/50/000000/cleaning.png' },
    { number: 8, activity: 'Pense positivo', icon: 'https://img.icons8.com/ios-filled/50/000000/positive.png' },
    { number: 9, activity: 'Ligue para seus pais', icon: 'https://img.icons8.com/ios-filled/50/000000/parents.png' },
    { number: 10, activity: 'Durma cedo', icon: 'https://img.icons8.com/ios-filled/50/000000/sleep.png' },
    { number: 11, activity: 'Coma algo gostoso', icon: 'https://img.icons8.com/ios-filled/50/000000/food.png' },
    { number: 12, activity: 'Faça uma caminhada', icon: 'https://img.icons8.com/ios-filled/50/000000/walking.png' },
    { number: 13, activity: 'Aprenda algo novo', icon: 'https://img.icons8.com/ios-filled/50/000000/learning.png' },
    { number: 14, activity: 'Cozinhe uma nova receita', icon: 'https://img.icons8.com/ios-filled/50/000000/cooking.png' },
    { number: 15, activity: 'Elogie alguém', icon: 'https://img.icons8.com/ios-filled/50/000000/compliment.png' },
    { number: 16, activity: 'Adote uma planta', icon: 'https://img.icons8.com/ios-filled/50/000000/plant.png' },
    { number: 17, activity: 'Tome sol', icon: 'https://img.icons8.com/ios-filled/50/000000/sun.png' },
    { number: 18, activity: 'Tire um dia para você', icon: 'https://img.icons8.com/ios-filled/50/000000/relax.png' },
    { number: 19, activity: 'Conheça um lugar novo', icon: 'https://img.icons8.com/ios-filled/50/000000/travel.png' },
    { number: 20, activity: 'Abrace seu pet', icon: 'https://img.icons8.com/ios-filled/50/000000/pet.png' },
    { number: 21, activity: 'Agende uma massagem', icon: 'https://img.icons8.com/ios-filled/50/000000/massage.png' },
    { number: 22, activity: 'Coma um docinho', icon: 'https://img.icons8.com/ios-filled/50/000000/candy.png' },
    { number: 23, activity: 'Assista um filme', icon: 'https://img.icons8.com/ios-filled/50/000000/movie.png' },
    { number: 24, activity: 'Tome banho quentinho', icon: 'https://img.icons8.com/ios-filled/50/000000/bath.png' },
    { number: 25, activity: 'Faça exercícios', icon: 'https://img.icons8.com/ios-filled/50/000000/exercise.png' },
    { number: 26, activity: 'Escute uma música especial', icon: 'https://img.icons8.com/ios-filled/50/000000/music.png' },
    { number: 27, activity: 'Pense positivo', icon: 'https://img.icons8.com/ios-filled/50/000000/positive.png' },
    { number: 28, activity: 'Confie em você', icon: 'https://img.icons8.com/ios-filled/50/000000/confidence.png' },
    { number: 29, activity: 'Seja feliz', icon: 'https://img.icons8.com/ios-filled/50/000000/happy.png' },
    { number: 30, activity: 'Faça algo que ama', icon: 'https://img.icons8.com/ios-filled/50/000000/love.png' },
  ];

  const container = document.querySelector('.grid-container');

  days.forEach(day => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${day.icon}" alt="Icone de ${day.activity}">
      <h2>Dia ${day.number}</h2>
      <p>${day.activity}</p>
      <img src="https://img.icons8.com/ios-filled/50/000000/checkmark.png" class="checkmark" alt="Checkmark">
    `;
    container.appendChild(card);

    card.querySelector('.checkmark').addEventListener('click', () => {
      card.classList.toggle('checked');
    });
  });
});
