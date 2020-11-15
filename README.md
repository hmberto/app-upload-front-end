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

Thank you!