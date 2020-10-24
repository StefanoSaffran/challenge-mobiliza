<h1 align="center">
    <img alt="challenge-mobiliza" title="Mobiliza" src="https://res.cloudinary.com/stefanosaffran/image/upload/v1603550837/tests/febt9rckikjixepetfof.svg" width=200px />
</h1>

<h2 align="center">
  Ultra tiny LMS Challenge!
</h2>

<p align="center">
  <img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20?color=15C3D6&labelColor=000000">
</p> 

<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
</p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=mobiliza-test-api&uri=https%3A%2F%2Fraw.githubusercontent.com%2FStefanoSaffran%2Fchallenge-mobiliza%2Fmain%2FInsomnia_2020-10-24%3Ftoken%3DAIDW5Z7ARQ656VNDTPE2EB27SQ56G" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## :computer: Project 

This project was developed for the technical challenge for hiring DEVs at Mobiliza.

The challenge was to build an ultra tiny version of an LMS (Learning Management System).

<p align="center">
  <img alt="Challenge gif" src="https://res.cloudinary.com/stefanosaffran/image/upload/v1603549827/tests/bripihjjh6ghqnicdy1x.gif" width="100%">
</p>

 ## :rocket: Built with

This project was developed with the following technologies:

<details>
  <summary>Backend</summary>

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TypeORM](https://typeorm.io/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
-   [Cors](https://www.npmjs.com/package/cors)
-   [Yup](https://github.com/jquense/yup)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Frontend</summary>

-   [React](https://pt-br.reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Styled Components](https://styled-components.com/)
-   [Context API](https://reactjs.org/docs/context.html)
-   [Framer Motion](https://www.framer.com/motion/)
-   [Polished](https://polished.js.org/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [React Icons](https://react-icons.netlify.com/#/)
-   [Customize cra](https://github.com/arackaf/customize-cra)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

## :information_source: How to run

### Requirements

To run the application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) 

If using docker, follow this steps to install and run the docker image.

```bash
# install Postgres image (if you don't specify an username it will be postgres by default)
$ docker run --name postgresimagename -e POSTGRES_PASSWORD=yourPassword -p 5432:5432 -d postgres

# start Postgres (if needed)
$ docker start postgresimagename

```

### Backend

Now clone the repository and install the dependencies.
```bash
# to clone the repository
$ git clone https://github.com/StefanoSaffran/challenge-mobiliza.git

# go into the backend folder
$ cd challenge-mobiliza/backend

#install the backend dependencies
$ yarn

```
In order to connect to the database, you will need to enter the access informations into a ormconfig.json, based on a ormconfig.example.json file that was provided in the backand folder, change it according to your environment.

```bash
# run migrations
$ yarn typeorm migration:run

# run api
$ yarn dev:server
```

### Frontend

```bash
# in another tab of the terminal install the frontend dependencies and run it 
$ cd frontend
$ yarn
$ yarn start
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/StefanoSaffran/challenge-mobiliza/blob/master/LICENSE) for more information

## :mailbox_with_mail: Get in touch!

<a href="https://stefanosaffran.com" target="_blank" >
  <img alt="Website - Stefano Saffran" src="https://img.shields.io/badge/Website--%23F8952D?style=social">
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/stefanosaffran/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:stefanoas@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee: and ❤️ by Stefano Saffran.


