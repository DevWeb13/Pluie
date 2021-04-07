const body = document.body;

setInterval(rainFall, 10);/*Tous les centièmes de seconde active la function rainFall qui crée une goutte d'eau.*/ 

function rainFall(){
    const waterDrop = document.createElement('i');/* i pour 'icone'.*/

    waterDrop.classList.add('fas');
    waterDrop.classList.add('fa-tint');/*Intégre dans notre element 'i' le visuel des gouttes.*/
    waterDrop.style.fontSize = Math.random() * 7 + 'px';/*Modifie aléatoirement la taille de chaque goutte entre 1 et 7 px.*/
    waterDrop.style.animationDuration = Math.random() * 2 + 's';/*Temps de l'animation aléatoire.*/
    waterDrop.style.opacity = Math.random() + 0.3;/*Pour éviter d'avoir des gouttes invisible on rajoute '0.3'.*/
    waterDrop.style.left = Math.random() * window.innerWidth + 'px';/*Etale les gouttes sur toute la largeur de l'écran.*/

    body.appendChild(waterDrop);/*Crée un enfant de body qui est donc une goutte.*/

    setTimeout(() => {
        waterDrop.remove();/*1er paramètre: Détruire la goutte*/
    }, 2000)/*2eme paramètre: Le temps= 6s.*/
}