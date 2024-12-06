<a id="readme-top"></a>

<div align="center">

  <img src="public/github/logo.png" alt="logo" width="200" height="auto" />
  <h1>Portify</h1>
  
  <p>
    A simple portfolio generator
  </p>

  
<!-- Badges -->
<p>
  <a href="https://github.com/pietropeerani/portify/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/pietropeerani/portify" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/pietropeerani/portify" alt="last update" />
  </a>
  <a href="https://github.com/pietropeerani/portify/network/members">
    <img src="https://img.shields.io/github/forks/pietropeerani/portify" alt="forks" />
  </a>
  <a href="https://github.com/pietropeerani/portify/stargazers">
    <img src="https://img.shields.io/github/stars/pietropeerani/portify" alt="stars" />
  </a>
  <a href="https://github.com/pietropeerani/portify/issues/">
    <img src="https://img.shields.io/github/issues/pietropeerani/portify" alt="open issues" />
  </a>
  <a href="https://github.com/pietropeerani/portify/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/pietropeerani/portify.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/pietropeerani/portify/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/pietropeerani/portify/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/pietropeerani/portify/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
- [License](#warning-license)


## <a name="star2-about-the-project">About the project</a>
Welcome to the Dynamic Portfolio Generator repository! This project enables you to create a fully customizable portfolio website by simply configuring a JSON file. The generator automates the process, making your portfolio available online with minimal effort.

### <a name="space_invader-tech-stack">Tech stack</a>
- React
- GitHub
- Tailwind CSS

### <a name="dart-features">Tech stack</a>
- **JSON-based Configuration**: Define your portfolio content easily in a single JSON file.
- **Dynamic Web Generation**: Automatically generates a responsive portfolio website.
- **Ease of Deployment**: Your portfolio is deployed to the web seamlessly.
- **Customizable Design**: Tailor the appearance and structure to suit your needs.


## <a name="toolbox-getting-started">Getting Started</a>
1. Create a GitHub repository.

2. Inside the repository, create a file named portify.config.json.

3. Add your portfolio configuration in portify.config.json. Here's an example:
```JSON
{
  "name": "Peter",
  "lastname": "Parker",
  "roles": ["UX designer", "UI senior"],
  "description": "Lorem ipsum description",
  "mail": "example@example.com",
  "avaible-for-works": true,
  "contacts": [
    {
      "label": "GitHub",
      "href": "example.com"
    },
    {
      "label": "Mail",
      "href": "mailto:example@example.com"
    }
  ],
  "works-history": [
    {
      "position": "UX/UI designer senior",
      "period": ["2023", "now"],
      "company": "GitHub"
    },
    {
      "position": "UX/UI designer senior",
      "period": ["2022", "2023"],
      "company": "Apple"
    },
    {
      "position": "UX/UI designer junior",
      "period": ["2020", "2022"],
      "company": "Google"
    }
  ]
}
```
4. Save and commit the file to your repository.

5. Visit the following URL to view your portfolio:
```
https://pietropeerani.github.io/portify/#/<profile-name>/<repository-name>
```

### <a name="bangbang-prerequisites">Prerequisites</a>
- [Node.js](https://nodejs.org/en)
- GitHub account.

### <a name="gear-installation">Installation</a>
1. Clone the repository:
```shell
git clone https://github.com/pietropeerani/portify.git
cd portify
```
2. Install the dependencies:
```shell
npm i
```

### <a name="running-run-locally">Run locally</a>
```
npm run dev

npm run dev -- --host# host development server on local network
```



## License
Distributed under the MIT License. See `LICENSE` for more information.


## Contact
- [Project Link](https://github.com/pietropeerani/portify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>