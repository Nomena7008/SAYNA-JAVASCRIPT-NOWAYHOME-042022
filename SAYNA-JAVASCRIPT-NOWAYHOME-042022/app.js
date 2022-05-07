   // ANIMATION GENERALE
   const myBtn = document.getElementById('button');

   button.addEventListener('mouseenter', () => {
       myBtn.style.backgroundColor = "#ffffff";
       myBtn.style.color = "#b11313";
       myBtn.style.fontWeight = "bold";
       myBtn.style.boxShadow = "5px 5px 35px white";
   });

   button.addEventListener('mouseleave', () => {
       myBtn.style.backgroundColor = "transparent";
       myBtn.style.color = " #ffffff";
       myBtn.style.boxShadow = "none";
   });


   //  button blanc
   let btnInverse = document.getElementsByClassName("btninverse");
   console.log(btnInverse);

   for (let i = 0; i < btnInverse.length; i++) {
       btnInverse[i].addEventListener('mouseover', () => {
           btnInverse[i].style.backgroundColor = "#b11313";
           btnInverse[i].style.color = "#ffffff";
           btnInverse[i].style.fontWeight = "bold";
           btnInverse[i].style.boxShadow = "5px 5px 35px white";
       })
       btnInverse[i].addEventListener('mouseout', () => {
           btnInverse[i].style.backgroundColor = "#ffffff";
           btnInverse[i].style.color = "#b11313";
           btnInverse[i].style.boxShadow = "none";
       })
   };


   // icon FOOTER
   let mediaIcon = document.getElementsByClassName("icon");
   console.log(mediaIcon);

   for (let i = 0; i < mediaIcon.length; i++) {
       const element = mediaIcon[i];
       element.addEventListener('mouseover', () => {
           element.style.color = "white";
       })
       element.addEventListener('mouseout', () => {
           element.style.color = "black";
       })

   };