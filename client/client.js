const helper = require('./helper.js');
const _ = require('underscore');

const init = () => {
    const successButton = document.querySelector("#success");
    const badRequestButton = document.querySelector("#badRequest");
    const notFoundButton = document.querySelector("#notFound");
  
    const success = () => helper.sendFetch('/success');
    const badRequest = () => helper.sendFetch('/badRequest');
    const notFound = () => helper.sendFetch('/somethingUnhandled');
  
    successButton.addEventListener('click', success);
    badRequestButton.addEventListener('click', badRequest);
    notFoundButton.addEventListener('click', notFound);
};

window.onload = init;