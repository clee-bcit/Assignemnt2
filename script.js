/* Index Page */
function cleanUpIndex() {
    const cleanUp = document.querySelectorAll('.contact');
    cleanUp.remove;
    for(let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove();}
}

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

function createSingleIndex(contact) {
    let contactList = [
        {
          name: "Roberta Dobbs",
          phone: "778-555-1234",
          address: "101 Main St, Anytown, USA",
          email: "subgenius@slack.example.com",
        }, 
        {
          name: "Bugs Bunny",
          phone: "123-867-5309",
          address: "Warner Brothers Animation Lot",
          email: "whatsup@doc.example.com",
        },
      ]
    
    const main = document.querySelectorAll('.main');
    const aNode = document.createElement('a');
    const divNode = document.createElement('div');
    const pTag = document.createElement('p');

    const textNode = document.createTextNode(contact.name)
    


    divNode.className = 'contact';
    divNode.appendChild(pTag);
    aNode.appendChild(divNode);
    aNode.href = 'page3.html';
    aNode.appendChild(pTag);
    divNode.appendChild(textNode);
    main[0].appendChild(aNode);

    }


function renderIndex() {

    let contactList = [
        {
          name: "Roberta Dobbs",
          phone: "778-555-1234",
          address: "101 Main St, Anytown, USA",
          email: "subgenius@slack.example.com",
        }, 
        {
          name: "Bugs Bunny",
          phone: "123-867-5309",
          address: "Warner Brothers Animation Lot",
          email: "whatsup@doc.example.com",
        },
    ]

    const main = document.querySelectorAll('.main');
    
    for(let i = 0; i < contactList.length; i++) { 
    const aNode = document.createElement('a');
    const divNode = document.createElement('div');
    const pTag = document.createElement('p');

    pTag.append(contactList[i].name);
    divNode.className = 'contact';
    divNode.appendChild(pTag);
    aNode.appendChild(divNode);
    aNode.href = 'page3.html';
    main[0].appendChild(aNode);
    };
}

/* View Page */
function cleanUpView() {
    const cleanUp = document.querySelectorAll('.contactinfo');
    cleanUp.remove;
    for(let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove();}
}

function renderView(contact) {
    const main = document.querySelectorAll('.main');
    const divContactinfoNode = document.createElement('div');
    const divConstactnameNode = document.createElement('div')
    const divContactemailNode = document.createElement('div')
    const divContactphoneNode = document.createElement('div')
    const divContactaddressNode = document.createElement('div')
    const divButtonsNode = document.createElement('div')
    const nameNode = document.createTextNode(contact.name);
    const imgNode = document.createElement('img');
    imgNode.src = "./img/profile.jpg"
    const emailNode = document.createTextNode(contact.email);
    const phoneNode = document.createTextNode(contact.phone);
    const addressNode = document.createTextNode(contact.address);
    const editNode = document.createElement('button');
    const editButton = document.createTextNode('Edit')
    const closeNode = document.createElement('button');
    const closeButton = document.createTextNode('Close');


    divContactinfoNode.className = 'contactinfo'

    divConstactnameNode.className = 'contactname';
    divConstactnameNode.appendChild(nameNode);
    divConstactnameNode.append(nameNode);
    divConstactnameNode.appendChild(imgNode); 
    imgNode.className = 'profilepic'
    divContactinfoNode.appendChild(divConstactnameNode);

    divContactemailNode.className = 'contactemail';
    divContactemailNode.appendChild(emailNode);
    divContactinfoNode.appendChild(divContactemailNode);

    divContactphoneNode.className = 'contactphone';
    divContactphoneNode.appendChild(phoneNode);
    divContactinfoNode.appendChild(divContactphoneNode);

    divContactaddressNode.className = 'contactaddress';
    divContactaddressNode.appendChild(addressNode);
    divContactinfoNode.appendChild(divContactaddressNode);

    divButtonsNode.className = 'buttons';
    divButtonsNode.appendChild(editNode)
    editNode.appendChild(editButton);
    editNode.className = 'button edit';
    divButtonsNode.appendChild(closeNode);
    closeNode.appendChild(closeButton);
    closeNode.className = 'button close';
    divContactinfoNode.appendChild(divButtonsNode);

    main[0].appendChild(divContactinfoNode);
}

/* Create Page */

function cleanUpCreate() {
    const cleanUp = document.querySelectorAll('.contactedit');
    cleanUp.remove;
    for(let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove();}
}

function renderCreate() {
    const main = document.querySelectorAll('.main');
    const divContactedit = document.createElement('div');
    const divContactimg = document.createElement('div');
    const divForm = document.createElement('div');
    const divInputName = document.createElement('div');
    const divInputPhone = document.createElement('div');
    const divInputAddress = document.createElement('div');
    const divInputEmail = document.createElement('div');
    const divInputButtons = document.createElement('div');

    const imgNode = document.createElement('img');
    imgNode.src = "./img/profile.jpg"

    const formNode = document.createElement('form');

    const inputName = document.createElement('input')
    const inputPhone = document.createElement('input')
    const inputAddress = document.createElement('input')
    const inputEmail = document.createElement('input')

    const buttonName = document.createElement('button')
    const buttonPhone = document.createElement('button')
    const buttonAddress = document.createElement('button')
    const buttonEmail = document.createElement('button')
    const buttonSave = document.createElement('button')
    const buttonCancel = document.createElement('button')

}