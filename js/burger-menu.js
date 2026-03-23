export const burgerMenu = () => {

document.addEventListener('click', (e) => {
  const burgerIcon = e.target.closest('.burger-icon')
  const headerLink = e.target.closest('.header__link')
  const headerBtn = e.target.closest('.header__btn')

  if (!burgerIcon && !headerLink && !headerBtn) return;
  if (document.documentElement.clientWidth > 992) return

  document.body.classList.toggle('body--opened-menu')

})


}


