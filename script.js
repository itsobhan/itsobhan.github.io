document.addEventListener('DOMContentLoaded', () => {
    const tapArea = document.getElementById('tap-area');
    const scoreDisplay = document.getElementById('score');
    let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;

    // نمایش امتیاز ذخیره شده
    scoreDisplay.textContent = score;

    tapArea.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        localStorage.setItem('score', score);
    });
});
``