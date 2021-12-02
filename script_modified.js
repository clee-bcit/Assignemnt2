// /* Index Page */
// let contactList = [
//     {
//       name: "Roberta Dobbs",
//       phone: "778-555-1234",
//       address: "101 Main St, Anytown, USA",
//       email: "subgenius@slack.example.com",
//     }, 
//     {
//       name: "Bugs Bunny",
//       phone: "123-867-5309",
//       address: "Warner Brothers Animation Lot",
//       email: "whatsup@doc.example.com",
//     },
//   ]
  
//   function cleanUpIndex() {
//       const cleanUp = document.querySelectorAll('.contact');
  
  
//       cleanUp.remove;
//       for(let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove();}
//   }
  

//   function renderIndex() {
//       const main = document.querySelectorAll('.main');
      
//       for(let i = 0; i < contactList.length; i++) { 
//       const aNode = document.createElement('a');
//       const divNode = document.createElement('div');
//       const pTag = document.createElement('p');
  
//       pTag.append(contactList[i].name);
//       divNode.className = 'contact';
//       divNode.appendChild(pTag);
//       aNode.appendChild(divNode);
//       aNode.href = 'page3.html';
//       main[0].appendChild(aNode);
//       };
//   }
  
  
//   /* View Page */
//   function cleanUpView() {
//       const cleanUp = document.querySelectorAll('.contactinfo');
//       cleanUp.remove;
//       for(let i = 0; i < cleanUp.length; i++) { 
//         cleanUp[i].remove(); }
//   }
  
  

//   /* Create Page */
  
//   function cleanUpCreate() {
//       const cleanUp = document.querySelectorAll('.contactedit');
//       cleanUp.remove;
//       for(let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove();}
//   }
  
//   function renderCreate() {
//       const main = document.querySelectorAll('.main');
//       const divContactedit = document.createElement('div');
//       const divContactimg = document.createElement('div');
//       const divForm = document.createElement('div');
//       const divInputName = document.createElement('div');
//       const divInputPhone = document.createElement('div');
//       const divInputAddress = document.createElement('div');
//       const divInputEmail = document.createElement('div');
//       const divInputButtons = document.createElement('div');
  
//       const imgNode = document.createElement('img');
//       imgNode.src = "./img/profile.jpg"
  
//       const formNode = document.createElement('form');
  
//       const inputName = document.createElement('input')
//       const inputPhone = document.createElement('input')
//       const inputAddress = document.createElement('input')
//       const inputEmail = document.createElement('input')
  
//       const buttonName = document.createElement('button')
//       const buttonPhone = document.createElement('button')
//       const buttonAddress = document.createElement('button')
//       const buttonEmail = document.createElement('button')
//       const buttonSubmit = document.createElement('button')
//       const buttonReset = document.createElement('button')
//       const namePlus = document.createTextNode('+')
//       const phonePlus = document.createTextNode('+')
//       const addressPlus = document.createTextNode('+')
//       const emailPlus= document.createTextNode('+')
//       const saveText = document.createTextNode('Save Contact')
//       const cancelText = document.createTextNode('Cancel')
  
  
//       divContactedit.className = 'contactedit';
  
//       divContactimg.className = 'contactimg';
//       divContactimg.appendChild(imgNode);
//       imgNode.className = 'profilepic';
//       imgNode.alt = 'Profile picture';
//       divContactedit.appendChild(divContactimg);
  
//       divForm.className = 'form';
  
//       divInputName.className = 'inputcontainer';
//       inputName.type = 'text';
//       inputName.id = 'contactname';
//       inputName.name = 'contactname';
//       inputName.placeholder = 'Contact Name';
//       divInputName.appendChild(inputName);
//       buttonName.className = 'extrafield';
//       buttonName.id = 'extranamefiled';
//       buttonName.name = 'extranamefield';
//       buttonName.appendChild(namePlus);
//       divInputName.appendChild(buttonName);
//       formNode.appendChild(divInputName);
  
//       divInputPhone.className = 'inputcontainer';
//       inputPhone.type = 'tel';
//       inputPhone.id = 'contactphone';
//       inputPhone.name = 'contatphone'
//       inputPhone.placeholder = 'Contact Address';
//       divInputPhone.appendChild(inputPhone);
//       buttonPhone.className = 'extrafield';
//       buttonPhone.id = 'extraphonefield';
//       buttonPhone.name = 'extraphonefield';
//       buttonPhone.appendChild(phonePlus);
//       divInputPhone.appendChild(buttonPhone);
//       formNode.appendChild(divInputPhone);
  
//       divInputAddress.className = 'inputcontainer';
//       inputAddress.type = 'text'
//       inputAddress.id = 'contactaddress';
//       inputAddress.name = 'contactaddress';
//       inputAddress.placeholder = 'Contact Address';
//       divInputAddress.appendChild(inputAddress);
//       buttonAddress.className = 'extrafield';
//       buttonAddress.id = 'extraaddressfield';
//       buttonAddress.name = 'extraaddressfield';
//       buttonAddress.appendChild(addressPlus);
//       divInputAddress.appendChild(buttonAddress)
//       formNode.appendChild(divInputAddress);
  
//       divInputEmail.className = 'inputcontainer';
//       inputEmail.type = 'email';
//       inputEmail.id = 'contactemail';
//       inputEmail.name = 'contactemail';
//       inputEmail.placeholder = 'Contact Email';
//       divInputEmail.appendChild(inputEmail);
//       buttonEmail.className = 'extrafield';
//       buttonEmail.id = 'extraemailfield';
//       buttonEmail.name = 'extraemailfield';
//       buttonEmail.appendChild(emailPlus);
//       divInputEmail.appendChild(buttonEmail)
//       formNode.appendChild(divInputEmail);
  
//       divInputButtons.className = 'buttons';
//       buttonSubmit.type = 'submit';
//       buttonSubmit.className = 'button save';
//       buttonSubmit.id = 'savecontact';
//       buttonSubmit.name = 'savecontact';
//       buttonSubmit.appendChild(saveText)
//       divInputButtons.appendChild(buttonSubmit);
//       buttonReset.type = 'reset';
//       buttonReset.className = 'button cancel'
//       buttonReset.id = 'cancel';
//       buttonReset.name = 'cancel';
//       buttonReset.appendChild(cancelText);
//       divInputButtons.appendChild(buttonReset);
//       formNode.appendChild(divInputButtons);
      
//       divContactedit.appendChild(formNode);
  
//       main[0].appendChild(divContactedit)
  
//   }
  

//   // #2
//   function diableHref() {
//     document.getElementById("contactshome").removeAttribute("href")
//   }
  
//   document.querySelector('#contactshome').addEventListener('click', () => {
//     cleanUpIndex();
//     cleanUpCreate();
//     renderIndex();
//     diableHref();
  
//   })
  
//   // #3
//   function createNewContact() {
//     // const cleanMain = document.querySelectorAll('.main');
//       // for(let i = 0; i < cleanMain.length; i++) { cleanMain[i].remove();}
//       document.getElementById("newcontact").removeAttribute("href")
  
  
//     // document.getElementsByClassName('main').removeAttribute("div")
//     // document.querySelector('#newcontact').removeAttribute('.main');
//   }
  
//   document.querySelector('#newcontact').addEventListener('click', () => {
//     cleanUpIndex();
//     cleanUpCreate();
//     renderCreate();
//     createNewContact();
  
//   })
  
// // #4

// function createSingleIndex(contact) {    
//     const main = document.querySelectorAll('.main');
//     const aNode = document.createElement('a');
//     const divNode = document.createElement('div');
//     const pTag = document.createElement('p');
//     const textNode = document.createTextNode(contact.name);

//     divNode.className = 'contact';
//     divNode.appendChild(pTag);
//     aNode.appendChild(divNode);
//     aNode.href = 'page3.html';
//     pTag.appendChild(textNode);
//     main[0].appendChild(aNode);
    
//     var handler = function() {alert('clicked')};
//     element.onclick = handler;
//     console.log(element.onclick);

//     document.querySelector('div').addEventListener('click', () => {
//         createSingleIndex();
//     }
//     )}

//     // let allElement = document.querySelectorAll('.main');
    



// // #5
//   // renderView(contactList[0]) //
//   function renderView(contact) {
//     const main = document.querySelectorAll('.main');
//     const divContactinfoNode = document.createElement('div');
//     const divConstactnameNode = document.createElement('div')
//     const divContactemailNode = document.createElement('div')
//     const divContactphoneNode = document.createElement('div')
//     const divContactaddressNode = document.createElement('div')
//     const divButtonsNode = document.createElement('div')
//     const nameNode = document.createTextNode(contact.name);
//     const imgNode = document.createElement('img');
//     imgNode.src = "./img/profile.jpg"
//     const emailNode = document.createTextNode(contact.email);
//     const phoneNode = document.createTextNode(contact.phone);
//     const addressNode = document.createTextNode(contact.address);
//     const editNode = document.createElement('button');
//     const editButton = document.createTextNode('Edit')
//     const closeNode = document.createElement('button');
//     const closeButton = document.createTextNode('Close');


//     divContactinfoNode.className = 'contactinfo'

//     divConstactnameNode.className = 'contactname';
//     divConstactnameNode.appendChild(nameNode);
//     divConstactnameNode.append(nameNode);
//     divConstactnameNode.appendChild(imgNode); 
//     imgNode.className = 'profilepic'
//     divContactinfoNode.appendChild(divConstactnameNode);

//     divContactemailNode.className = 'contactemail';
//     divContactemailNode.appendChild(emailNode);
//     divContactinfoNode.appendChild(divContactemailNode);

//     divContactphoneNode.className = 'contactphone';
//     divContactphoneNode.appendChild(phoneNode);
//     divContactinfoNode.appendChild(divContactphoneNode);

//     divContactaddressNode.className = 'contactaddress';
//     divContactaddressNode.appendChild(addressNode);
//     divContactinfoNode.appendChild(divContactaddressNode);

//     divButtonsNode.className = 'buttons';
//     divButtonsNode.appendChild(editNode)
//     editNode.appendChild(editButton);
//     editNode.className = 'button edit';
//     divButtonsNode.appendChild(closeNode);
//     closeNode.appendChild(closeButton);
//     closeNode.className = 'button close';
//     divContactinfoNode.appendChild(divButtonsNode);

//     main[0].appendChild(divContactinfoNode);

//     document.querySelector('.close').addEventListener('click', () => {
//         console.log('testing 123');
//         cleanUpCreate();
//         cleanUpIndex();
//         cleanUpView();
//     })

// }
