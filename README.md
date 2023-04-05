<a name="readme-top"></a>

<div align="center">

  <img src="src/assets/logo/shopcart-logo.svg" alt="logo" width="100" height="auto" />
  <br/>

### ShopCart App
<b>ShopCart App</b> is the MVP of a [SPA](https://en.wikipedia.org/wiki/Single-page_application) application that lets users to:<br>1) Display a Shopping list of items,<br>2) Increase or Decrease the number of each item,<br>3) Remove an item from the list,<br>4) Clear the whole list with the help of the <kbd>CLEAR CART</kbd> button,<br>5) Show a modal screen to confirm the "CLEAR CART" action,<br>6) Shows the total number of items and the total amount of the cart and,<br>7) Retrieves initial data from an API when the App loads.

<sup>This project was built in order to learn how to use Redux in the context of a real application.</sup>

</div>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [🛍️ ShopCart App](#about-project)
    - [Preview ShopCart App](#preview-of-shopcart-app)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo](#live-demo)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Available Scripts](#available-scripts)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [⭐ Show your support ](#-show-your-support-)
  - [📝 License ](#-license-)

---
# 🛍️ ShopCart App <a name="about-project"></a>

*ShopCart App* is the MVP of a [SPA](https://en.wikipedia.org/wiki/Single-page_application) application that lets users display a Shopping list of items, Increase/Decrease the number of each item, Remove an item or the whole list,when the user tries to remove all the items a modal screen is shown to confirm the action, it also shows the total number of items in a badge at the top/right of the screen and the total amount of the cart and an API retrieves the initial data when the App loads.

<div align="center">
<sup>This project was built in order to learn how to use <b>Redux</b> in the context of a real application.</sup>


### Preview of ShopCart App.

<p>
  <img src="src/assets/wireframe/shopcart-wireframe.png" alt="ShopCart App" width="600" height="auto" /><br>
  <sup>This is a screenshot of how the <b>ShopCart App</b> looks at its initial state.</sup><br>
</p>

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠 Built With <a name="built-with"></a>
### Tech Stack <a name="tech-stack"></a>
This project was bootstrapped with:
  <ul>
    <li>
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
      <img align="center" title="ReactJS" alt="react js" width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> React</a>
    </li>
    <li>
      <a href="https://create-react-app.dev/" target="_blank" rel="noopener noreferrer">
      <img align="center" title="Create React App CLI" alt="create react app" width="20px" height="20px" src="https://create-react-app.dev/img/logo.svg" /> Create React App</a>
    </li>
    <li>
      <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
      <img align="center" title="Redux Toolkit" alt="redux toolkit" width="20px" height="20px" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" /> Redux Toolkit</a>
    </li>
  </ul>


### Key Features <a name="key-features"></a>

- *Display a list of items*
- *Increase/Decrease the quantity of each item listed*
- *Remove an item or the whole list*
- *Ask for confirmation with a modal window for deleting the whole list*
- *Show the total of items and the total amount of the ShopCart*
- *Fetch initial data from an API*

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- <a href="https://luigirazum.github.io/mv-reduxtoolkit-shopcartapp/" target="_blank" rel="noopener noreferrer">**ShopCart App - Link**</a>

<div align="center">

### ShopCart Live Demo Preview

<p>
  <sup>This is a <b>Demo</b> for the <b>ShopCart App</b>, click on the link 👆 above and test it.</sup><br>
  <img src="src/assets/demo/shopcart-demo.gif" alt="ShopCart App Demo" width="600" height="auto" /><br>
</p>

</div>
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy of this project up and running, follow these steps.

- ### Prerequisites

   - In order to run this project locally you need `git` installed. Please got to [Getting Started - Installing Git guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and follow the steps described for your system to install `git`.

   - You must have Node installed on our machine to access the NPM (Node Package Manager) tool.
   Run `node -v` and `npm -v` in the terminal to see if you have node and npm installed, respectively. Ensure you have node>=14.0.0 and npm>=5.6\
   If you don’t have them installed, head to [Node](https://nodejs.org/) to download and install the latest stable version.


- ### Setup
    Clone this repository to your desired folder:
    ```sh
    cd my-folder
    git clone git@github.com:luigirazum/mv-reduxtoolkit-shopcartapp.git
    ```
- ### Install
    Install the package dependencies for this project with:
    ```sh
    cd mv-reduxtoolkit-shopcartapp
    npm install
    ```


### Available Scripts
- #### Run
    In the project directory, you can run:

    ```sh
    npm start
    ```

  - Runs the app in the development mode.
    - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - The page will reload when you make changes.
  - You may also see any lint errors in the console.

- #### Test
    ```sh
    npm test
    ```

   - Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- #### Build
    ```sh
    npm run build
    ```

  - Builds the app for production to the `build` folder.
    - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.
  - Your app is ready to be deployed!.

- #### Deploy
    ```sh
    npm run deploy
    ```

  - You can deploy this project using the above.
  - Your app is deployed!\
    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👨‍💻 **Luis Zubia**

- GitHub: <a href="https://github.com/luigirazum" target="_blank" rel="noopener noreferrer">**@luigirazum**</a>
- Twitter: <a href="https://twitter.com/LuigiRazum" target="_blank" rel="noopener noreferrer">**@LuigiRazum**</a>
- LinkedIn: <a href="https://linkedin.com/in/luiszubia" target="_blank" rel="noopener noreferrer">**Luis Zubia**</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

- [ ] *Create a **form** to add new items*
- [ ] *Create a **login page** so users can save their cart*


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

In order to improve this project, contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgments"></a>
- 👏 I would like to thank the support of my partners.
- 👏 Also thanks to [John Smilga](https://github.com/john-smilga) who creates this [👨‍💻 Redux Toolkit Tutorial – JavaScript State Management Library](https://www.youtube.com/watch?v=bbkBuqC1rU4) which I follow in order to learn how [**Redux**](https://redux-toolkit.js.org/) works.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐ Show your support <a name="support"></a>

I really enjoyed making this project, so, if you like it, I appreciate your support giving a ⭐.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--
## ❓ FAQ <a name="faq"></a>

- *Why should you use this project?*

  - Because you can realize what you can achieve using this amazing tool.

- *Why did I make this project?*

  - In order to start putting in practice the use of WebPack, JS ES6 modules and API's.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
