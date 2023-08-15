class Api{
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    //checkError

    _checkError(res){
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    //GET Project

    getProjects() {
        return fetch('https://api.github.com/users/MKudina/repos', {
            method:'GET',
          })
          .then(this._checkError)
    }
}

const api = new Api ({
  baseUrl:'https://api.github.com/users/MKudina/repos',
})

export {api};