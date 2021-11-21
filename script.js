// Index Page //
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

function createSingleIndex() {
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

    const textNode = document.createTextNode(contactList.name)
    


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

// View Page //
