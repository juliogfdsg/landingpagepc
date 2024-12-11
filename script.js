const carouselTrack = document.querySelector('.carousel-track');
const testimonialGroups = document.querySelectorAll('.testimonial-group');

let currentIndex = 0;
const totalGroups = testimonialGroups.length;
const intervalTime = 5000; // 5 segundos

// Função para mover o carrossel
function moveCarousel() {
  currentIndex = (currentIndex + 1) % totalGroups; // Vai para o próximo grupo, e volta ao início
  const offset = -currentIndex * 100; // Move o carrossel horizontalmente
  carouselTrack.style.transform = `translateX(${offset}%)`;
}

// Configurar o intervalo automático
setInterval(moveCarousel, intervalTime);

// Para adicionar funcionalidade de deslizar com o dedo (opcional)
let startX = 0;
let isDragging = false;

carouselTrack.addEventListener('mousedown', (e) => {
  startX = e.pageX;
  isDragging = true;
});

carouselTrack.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const moveX = e.pageX - startX;
    carouselTrack.style.transform = `translateX(calc(${moveX}px - ${currentIndex * 100}%))`;
  }
});

carouselTrack.addEventListener('mouseup', () => {
  isDragging = false;
});



document.addEventListener('DOMContentLoaded', () => {
  // Configurações do carrossel
  const images = document.querySelectorAll('.testimonialaaas img');
  let currentImageIndex = 0;
  const zoomDuration = 1000;  // Duração do zoom em cada imagem (1 segundo)
  const zoomInterval = 2000;  // Intervalo entre os zooms (2 segundos)
  
  function applyZoom() {
    // Remove o zoom de todas as imagens
    images.forEach((img) => img.style.transform = 'scale(1)');
    
    // Aplica o zoom na imagem atual
    images[currentImageIndex].style.transform = 'scale(1.2)';
    
    // Avança para a próxima imagem
    currentImageIndex = (currentImageIndex + 1) % images.length;  // Vai de 0 ao número total de imagens
  }
  
  // Inicia o efeito de zoom na primeira imagem e repete automaticamente
  setInterval(applyZoom, zoomInterval);
  
  // Aplica o zoom na primeira imagem logo ao carregar
  applyZoom();
});


