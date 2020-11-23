# Upload App — Front-end

### You can also access the Back-end of the application by [clicking here](https://github.com/hmberto/app-upload-back-end).

![ScreenShot](https://github.com/hmberto/app-upload-front-end/blob/master/img/img01.png)
### React App: An image upload interface. Node.JS v14.4.0.

## How it Works
First of all, using NodeJs v14.4.0 run **npm install** to install dependencies. Now navigate to the path **/src/services/api.js** and change the domain and port to your back-end environment.
~~~
const api = axios.create({
  baseURL: 'http://192.168.15.9:3000',
})
~~~

You can now start your application using **npm start**. After that it will be able to access your application in the browser through the address **http://localhost:3001** (if you have not changed).

## Resources
- Upload and store new images;
- Copy a link to share your uploaded image;
- Delete uploaded images;

## Cypress e2e tests
~~~
npm run tests
~~~
To change the URL of your application on Cypress go to cypress.json then update it.
~~~
{
  "baseUrl": "http://192.168.15.3:3001"
}
~~~

To change the folder of your tests on Cypress go to cypress.json then update it.
~~~
{
  "integrationFolder": "tests"
}
~~~

## Important
By default the Back-end only accepts **image files** with a maximum size of **2MB**. If you want to change it you can take a look at the repository by clicking [here](https://github.com/hmberto/app-upload-back-end).

To change the type of file that can be accepted on the **front-end** you can navigate to **/src/components/upload** and change the **index.js** file.

~~~
<Dropzone accept="image/*" onDropAccepted={onUpload}>
~~~

All uploaded files will be stored in /tmp/uploads. Data such as name, size, id and URL are stored in an online non-relational database. We used mongoDB Atlas for this project. More details can be found in the [back-end repository](https://github.com/hmberto/app-upload-back-end).

## Why?
This project is part of my personal portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: [humbertoodantas@gmail.com](humbertoodantas@gmail.com)

Connect with me at [LinkedIn.](https://www.linkedin.com/in/humbertoodantas/)

Also, you can use this Project as you wish.

It's free!

## Built With:
* [React](https://pt-br.reactjs.org/)

* [axios](https://www.npmjs.com/package/axios) - v0.21.0
* [react](https://www.npmjs.com/package/react) - v17.0.1
* [filesize](https://www.npmjs.com/package/filesize) - v6.1.0
* [lodash](https://www.npmjs.com/package/lodash) - v4.17.20
* [react-dom](https://www.npmjs.com/package/react-dom) - v17.0.1
* [web-vitals](https://www.npmjs.com/package/web-vitals) - v0.2.4
* [react-icons](https://www.npmjs.com/package/react-icons) - v3.11.0
* [react-script](https://www.npmjs.com/package/react-scripts) - v4.0.0
* [react-dropzone](https://www.npmjs.com/package/react-dropzone) - v11.2.4
* [styled-components](https://www.npmjs.com/package/styled-components) - v5.2.1
* [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar) - v2.0.3

Thank you!