export function getDateOnly() {
  return new Date().toISOString().slice(0, 10);
}

export function getQuote(x, y) {
  return Math.round(x/y);
}

export function getDeuda(x, y, z) {
  return (x*(1+(y/100))) + z; 
}

export function getLastQuote(x, y, z) {
  return x - (y*(z-1));
}
