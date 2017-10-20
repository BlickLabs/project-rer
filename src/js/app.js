
$('form[name="contact-form"]').validate({
  // required fields
  contactname: 'required',
  contactlastname: 'required',
  contactemail: 'required',
  contactcompany: 'required',
  contactmessage: 'required',
  messages: {
   contactname: "Por favor, introduce tu Nombre.",
   contactlastname: "Por favor, introduce tu Apellido.",
   contactemail: "Por favor, introduce un Correo o Teléfono.",
   contactcompany: "Por favor, introduce tu Compañia u Organización",
   contactmessage: "Por favor, escriba su Mensaje"
  },
  submitHandler: function(form) {
   var data = $('form[name="contact-form"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/rer/email/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Correo enviado, gracias por contactarte con nosotros.");
       $('form[name="contact-form"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});

$('form[name="candidate-form"]').validate({
  // required fields
  candidatename: 'required',
  candidateemail: 'required',
  candidatemessage: 'required',
  messages: {
   candidatename: "Por favor introduce tu Nombre.",
   candidateemail: "Por favor, introduce un Correo o Teléfono.",
   candidatemessage: "Por favor, escriba su Mensaje"
  },
  submitHandler: function(form) {
   var data = $('form[name="candidate-form"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/rer/candidate/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Correo enviado, gracias por contactarte con nosotros.");
       $('form[name="candidate-form"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});
