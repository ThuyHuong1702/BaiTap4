// utils.js
export const darkenColor = (hex, amount) => {
    let color = hex.replace('#', '');
    let num = parseInt(color, 16);
  
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
  
    r = Math.max(Math.min(255, r), 0);
    g = Math.max(Math.min(255, g), 0);
    b = Math.max(Math.min(255, b), 0);
  
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
  };
  