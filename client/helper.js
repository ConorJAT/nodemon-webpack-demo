const handleResponse = async (response) => {
    const content = document.getElementById('content');
    
    switch(response.status) {
      case 200:
        content.innerHTML = `<b>Success</b>`;
        break;
      case 400:
        content.innerHTML = `<b>Bad Request</b>`;
        break;
      case 404:
        content.innerHTML = `<b>Not Found</b>`;
        break;
      default:
        content.innerHTML = `<p>Status Code not Implemented By Client</p>`;
        break;
    }
  
    const resObj = await response.json();
    content.innerHTML += `<p>${resObj.message}</p>`;
};

const sendFetch = async (url) => {
    const response = await fetch(url);
    handleResponse(response);
};

module.exports = {
    handleResponse,
    sendFetch,
};