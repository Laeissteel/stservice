export const modalInit = () => {

  const openModalBtn = document.querySelector('.open-modal')
  const modal = document.querySelector('.modal')




  const getScrollbarWidth = () => {
    let div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollbarWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollbarWidth;

  };

  const scroll = getScrollbarWidth();

  const toggleCart = (isActive) => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    document.body.style.paddingRight = isActive ? `${scroll}px` : `0px`;
  };


  if (!openModalBtn && !modal) return

  const openedModal = (e) => {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
    toggleCart(true)
  }


  const closeModal = (e) => {
    const target = e.target
    if (target.closest('.modal__cancel') || target.classList.contains('modal') )
    document.body.classList.remove('body--opened-modal')
    toggleCart(false)
  }

  openModalBtn.addEventListener('click', openedModal)
  modal.addEventListener('click', closeModal)


  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal')) {
      document.body.classList.remove('body--opened-modal')
    }
  })



}