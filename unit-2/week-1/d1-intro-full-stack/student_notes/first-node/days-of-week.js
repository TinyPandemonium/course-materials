// module.exports = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
function area(radius) {
    const result = (radius * radius) * Math.PI
    return Number(result);
  }
  
  function circumference(radius) {
    const result = radius * 2 * Math.PI
    return Number(result)
  }
  
  module.exports = {
    area,
    circumference,
  }