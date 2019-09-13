let app = {
  // ----------------------------------------------------------------------------------------------------------------
  // MANIPULATION DU DOM DE L'APPLICATION
  // ----------------------------------------------------------------------------------------------------------------
  dom: {},

  // ----------------------------------------------------------------------------------------------------------------
  // ARCHITECTURE MVC DE L'APPLICATION
  // ----------------------------------------------------------------------------------------------------------------
  mvc: {
    router: null,
    dispatchRoute(controllerInstance) {
      if (!controllerInstance.hasOwnProperty('url') || !controllerInstance.executeHttpRequest) {
        throw new Error(` Le controlleur ${controllerInstance.constructor.name} est invalide`)
      }
      fetch(controllerInstance.url).then(response => response.text())
      .then(htmlContent =>{
        document.querySelector('main.container').innerHTML = htmlContent
      });
      controllerInstance.executeHttpRequest();
    }
  }
}

// L'application est exportée afin d'être accessible par d'autres modules.
export default app