document.addEventListener("mousemove", movement);
  function movement(e) {
  this.querySelectorAll('.shapes').forEach(shape => {
    const speed = shape.getAttribute('data-speed');
    const xAxis = (window.innerWidth - e.pageX * speed);
    const yAxis = (window.innerHeight - e.pageY * speed);

    shape.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
  });
}