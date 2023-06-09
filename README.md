<a name="readme-top"></a> 
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
 
<br />
<div align="center">
  <a href="https://github.com/bratz89/GPT-Chat"> 
  </a>

  <h3 align="center">GPT-Chat</h3>

  <p align="center">
    Chat GPT Template
    <br />  
    <br />
    <a href="https://danielbratz.no/">View Demo</a>
    ·
    <a href="https://github.com/bratz89/GPT-Chat/issues">Report Bug</a>
    ·
    <a href="https://github.com/bratz89/GPT-Chat/issues">Request Feature</a>
  </p>
</div>
 
## About The Project
A template to kickstart your chat GPT app!
   <br />
   <br /> 
[![PGT-CHAT][product-screenshot]](https://github.com/Bratz89/GPT-CHAT/blob/main/images/ss.png) 
  <br />
  <br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>

 
### Built With
  
[React][React-url] and [Node][Node-url] 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
### Prerequisites
* [Git](https://git-scm.com/)
* [OpenAI API key](https://platform.openai.com)
* [Node.js](https://nodejs.org/)

### Installation
Frontend: 
1. Clone the repo
   ```sh
   git clone https://github.com/bratz89/GPT-CHAT.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the app
   ```sh
   npm start
   ```

Backend
1. Get OpenAI API Key at [https://platform.openai.com/](https://platform.openai.com)
2. Clone the repo
   ```sh
   git clone https://github.com/bratz89/GPT-CHAT-API.git
   ```
3. Install NPM packages
   ```sh
   npm install
4. Change .env file with your API key:
   ```sh
   OPENAI_API_KEY="YOUR_KEY_HERE"
   ```
5. Start the API
   ```sh
   npm start
   ``` 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
### Customization
GPT-CHAT:
1. In ChatConfig.js you can add or configure "rulesets" for the Ai assistant. Changes here will change the dropdown menu.
 
2. In ChatConfig.js "Endpoint" can be changed if you want to host the API part somewhere else.
   ```sh
    const endpoint = 'http://api.yoursite.com'
   ```

   Cors settings in the API part must be changed in app.js:
    ```sh
     const allowedOrigins = ['https://yourfrontend.com'];
    ``` 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Roadmap and known issues
- [ ] Fix special characters bug. 

See the [open issues](https://github.com/bratz89/GPT-Chat/issues) for a full list of proposed features (and known issues). 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## License 
Distributed under the MIT License.  
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## Contact 
Daniel Bratz - daniel.bratz@live.com  
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## Acknowledgments 
* [React Icons](https://react-icons.github.io/react-icons/search)
* [othneildrew's Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
* [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
[contributors-shield]: https://img.shields.io/github/contributors/bratz89/GPT-Chat.svg?style=for-the-badge
[contributors-url]: https://github.com/bratz89/GPT-Chat/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/bratz89/GPT-Chat.svg?style=for-the-badge
[forks-url]: https://github.com/bratz89/GPT-Chat/network/members
[stars-shield]: https://img.shields.io/github/stars/bratz89/GPT-Chat.svg?style=for-the-badge
[stars-url]: https://github.com/bratz89/GPT-Chat/stargazers
[issues-shield]: https://img.shields.io/github/issues/bratz89/GPT-Chat.svg?style=for-the-badge
[issues-url]: https://github.com/bratz89/GPT-Chat/issues
[license-shield]: https://img.shields.io/github/license/bratz89/GPT-Chat.svg?style=for-the-badge
[license-url]:  https://github.com/Bratz89/GPT-CHAT/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/daniel-bratz-7959b722a/
[product-screenshot]:  /images/ss.png
[React-url]: https://reactjs.org/
[Node-url]: https://nodejs.org/ 
