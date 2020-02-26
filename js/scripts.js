
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js"></script>

gsap.from('#tree', {
    opacity: 0, 
    delay: 3,
    duration: 2, 
    x:400,
    repeat: -1,
    repeatDelay: 3,});
  
  gsap.from('#background', {
    x: 600,
    y: 0,
    duration: 6,
    repeat: -1,
    ease: "none",
  })
  
  gsap.from('h1', {
    x: 800,
    y: 0,
    duration: 8,
    repeat: -1,
    ease: "none",
  })
  
  gsap.from('#frontlegback', {
    rotate: 30,
    duration: 1,
    repeat: -1,
    ease: "rough",
  })
  
  gsap.from('#backlegback', {
    rotate: -10,
    duration: 1,
    repeat: -1,
    ease: "rough",
    transformOrigin: "right top",
  })
  
  gsap.from('#backlegfront', {
    rotate: -60,
    x: -20,
    duration: 1,
    repeat: -1,
    ease: "rough",
    transformOrigin: "right top",
  })
  
  gsap.from('#frontlegfront', {
    rotate: 70,
    x:-10,
    duration: 1,
    repeat: -1,
    ease: "rough",
  })
  
  gsap.from('#scarf', {
    rotate: -10,
    transformOrigin: "right top",
    duration: 1,
    repeat: -1,
  })
  