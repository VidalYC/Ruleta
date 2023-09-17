// ...

// Función para animar la caída de la bola
function animateBallFall() {
    const ball = document.getElementById("ball");
    ball.style.animation = "none"; // Detiene la animación actual de la bola

    // Calcula la posición horizontal actual de la pelota
    const ballPosition = ball.getBoundingClientRect();
    const centerX = ballPosition.left + ballPosition.width / 2;

    // Configura la animación de caída para que la pelota se detenga en su posición actual
    ball.style.left = centerX + "px";
    ball.style.animation = "fall 3s ease-in-out forwards"; // Inicia la animación de caída

    // Calcula la fuerza de rozamiento para detener la pelota gradualmente
    const friction = 0.5; // Ajusta este valor según lo necesario
    const velocity = 10; // Ajusta la velocidad inicial de la pelota
    const acceleration = -2 * friction * velocity; // Calcula la aceleración debido al rozamiento

    // Función para aplicar una pequeña aceleración contraria al movimiento de la pelota en intervalos
    function applyDeceleration() {
        const currentVelocity = parseFloat(getComputedStyle(ball).getPropertyValue("left"));
        const newVelocity = currentVelocity + acceleration;
        ball.style.left = newVelocity + "px";
        
        // Si la velocidad de la pelota es positiva, continúa aplicando la deceleración
        if (newVelocity > 0) {
            requestAnimationFrame(applyDeceleration);
        } else {
            // Detiene la animación cuando la pelota se detiene
            ball.style.animation = "none";
        }
    }

    // Inicia el proceso de deceleración
    requestAnimationFrame(applyDeceleration);
}
