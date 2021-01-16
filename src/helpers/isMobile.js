export const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Windows Phone debe ir primero porque su UA tambien contiene "Android"
  if (/windows phone/i.test(userAgent)) {
    return true;
  }

  if (/android/i.test(userAgent)) {
    return true;
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }
  return false;
}