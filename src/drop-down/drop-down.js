import './style.css';

const initialiseDropDowns = () => {
  const showDropDrown = (event) => {
    event.target.nextElementSibling.classList.toggle('visible');
    console.log(event.target.nextElementSibling.classList);
  };

  const hideDropDowns = () => {
    const dropDownContainers = document.querySelectorAll(
      '.drop-down-container'
    );
    dropDownContainers.forEach((dropDownContainer) => {
      dropDownContainer.children[1].classList.remove('visible');
    });
  };
  const dropDownButtons = document.querySelectorAll('.drop-down-button');
  dropDownButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      showDropDrown(event);
      console.log('CLICK');
    });
  });

  window.addEventListener('click', hideDropDowns);
};

// initialiseDropDowns();

export default initialiseDropDowns;
// module.exports = initialiseDropDowns;
