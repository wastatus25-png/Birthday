body {
    margin: 0;
    padding: 0;
    font-family: Arial;

    background-image: url("images/bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    color: white;  /* 🔥 FONT WHITE */
}

/* Center content */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Slides */
.slide {
    display: none;
    text-align: center;
}

.slide.active {
    display: block;
}

/* Button */
button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: linear-gradient(45deg, pink, purple);
    color: white;
    font-size: 16px;
    cursor: pointer;
}

/* Typing effect */
.typing {
    border-right: 3px solid white;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    animation: typing 3s steps(30, end) forwards, blink 0.5s infinite;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink {
    50% { border-color: transparent }
}

/* FINAL BOX (Vertical Center Card) */
.final-box {
    background: rgba(0,0,0,0.6);
    padding: 30px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;  /* 🔥 vertical */
    align-items: center;
    justify-content: center;

    width: 250px;
}
