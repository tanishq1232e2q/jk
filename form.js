const firebaseConfig = {
    apiKey: "AIzaSyArLwrcqc3FxpQLpX2_b3sBk6I2Mdgp_bk",
    authDomain: "form-c5d3e.firebaseapp.com",
    databaseURL: "https://form-c5d3e-default-rtdb.firebaseio.com",
    projectId: "form-c5d3e",
    storageBucket: "form-c5d3e.appspot.com",
    messagingSenderId: "458178200657",
    appId: "1:458178200657:web:3f4591dd2f6806b2622470"
  };
  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("form");
  
  document.getElementById("form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name1");
    // var address=getElementVal("address");
    var phone=getElementVal("phone");
  
    var emailid = getElementVal("email");
    var name1 = getElementVal("name2");
  
    saveMessages(name,phone, emailid,name1);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("form").reset();
  }
  
  const saveMessages = (name,phone, emailid, name1) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      // address:address,
      phone:phone,
      emailid: emailid,
      name1: name1,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };



  
  
  
  
  