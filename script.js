function confetes(){
    const tipo = Math.random() < 0.5 ? 'confete' : 'streamer'
    const confete = document.createElement('div')

    if(tipo === 'confete'){
        confete.classList.add('confete')

        const tamanho = 8 + Math.random() * 6
        confete.style.width = `${tamanho}px`
        confete.style.height = `${tamanho}px`

    } else{
        confete.classList.add('streamer')
        confete.style.height = `${30 + Math.random() * 30}px`
    }

    confete.style.left = `${Math.random() * window.innerWidth}px`;
    confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confete.style.animationDuration = `${3 + Math.random() * 2}s`;

    document.body.appendChild(confete)

    setTimeout(() =>{
        confete.remove()
    }, 5000)
}

setInterval(confetes, 200);