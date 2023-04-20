const formBtn = document.querySelector('.form__btn');
// const form = document.querySelector('.modal__form');

// console.log(form);

// form.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target.nodeName);
// });

const sendEmail = e => {
  var templateParams = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_cknjun9', 'template_bllpisk', templateParams).then(
    function (response) {
      console.log('SUCCESS!' + response.status + response.text);
    },
    function (error) {
      console.log('FAILED...', error);
    }
  );
};

formBtn.addEventListener('click', () => {
  sendEmail();
});
