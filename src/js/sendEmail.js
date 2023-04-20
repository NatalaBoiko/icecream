const formBtn = document.querySelector('.form__btn');

const sendEmail = () => {
  const templateParams = {
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

  for (const key in templateParams) {
    console.log(templateParams[key]);
    templateParams[key] = '';
    console.log(templateParams[key]);
  }
  templateParams.from_name = '';
  console.log(templateParams);
};

formBtn.addEventListener('click', () => {
  sendEmail();
});
