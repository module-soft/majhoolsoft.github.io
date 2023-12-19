function CarAnimations(carId, rearWheelId, frontWheelId, step, maxStep) {
  // Rotate the wheels
  const angle = (step / maxStep) * 360;
  document.querySelector(rearWheelId).style.transform = `rotate(${angle}deg)`;
  document.querySelector(frontWheelId).style.transform = `rotate(${angle}deg)`;
  // Move the car
  const distance = (step / maxStep) * 3000;
  document.querySelector(carId).style.transform = `translateX(${distance}px)`;
  document.querySelector(beamId).style.transform = `translateX(${distance}px)`;
}

export default CarAnimations;
