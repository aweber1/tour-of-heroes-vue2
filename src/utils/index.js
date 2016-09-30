export const delay = ms =>
  new Promise(resolve => setTimeout(() => resolve(true), ms));
