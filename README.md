# Netflix-MERN
> The project for Web Application Developement course.
You are the ![](https://visitor-badge.glitch.me/badge?page_id=Nguyenle23.netflix-mern)!

# Introduction
<h2> Netflix Clone from <strong>N.N.S</strong></h2>
<h4>Member</h4>

| Number | ID | Name | Task allocation | 
| ----- | ----- | --------- | --------- | 
| 1  | ITITIU19169 | Lê Nguyễn Bình Nguyên | API + Database | 
| 2 | ITITWE19024 | Dương Minh Nhựt | React User Interface |
| 3  |  ITITIU19067 | Lê Hữu Sỹ | React Dashboard Interface |

<h4>Motivation</h4> 
<p>Our team originally planned to implement an issues tracker project to create a website to track the progress of a job or a project. However, the project was put on a hold since we did not found it captivating and that we wanted a more practical web application.
In the end, we decied on out commom interest, a very popular movie site: Netflix. Not only that it gave us inspiration when implementing since the whole team has the same hobby of watching movies. And at the same time, the project has more opportunities for each member to develop programming skills to guide the career path as well as its practical usage.</p>
<p>Thanks to the analysis of Netflix's website, every member on the team can recognize and understand its operation and implement it with small inputs, or make up the basic website under other frameworks and libraries together.</p>

<h2 id="table-of-contents"> :book: Table of Contents</h2>
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#general-information">General Information</a></li>
    <li><a href="#features">Features</a></li>
    <li>
      <a href="#setup">Setup</a>
       <ul>
        <li><a href="https://github.com/Nguyenle23/netflix-mern/tree/main/APIs">APIs</a></li>
        <li><a href="https://github.com/Nguyenle23/netflix-mern/tree/main/Dashboard">Dashboard</a></li>
        <li><a href="https://github.com/Nguyenle23/netflix-mern/tree/main/UI-UX">Client</a></li>
       </ul>
    </li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#screenshot">Screenshot</a></li>
    <li><a href="#acknowledge">Acknowledge</a></li>
  </ol>
</details>

<h2 id="general-information"> 🧮 General Information</h2>

- **Server** : Contains an API for netflix, created by Node.js, Express and MongoDB. Using RESTful APIs.
- **Dashboard** : The management admin page, created with React, and Material UI.
- **Client** : The client for user, built with React, and Material UI.

<h2 id="features"> 📋 Features</h2>

List the ready features here:

| Field | Client | Dashboard | 
| ----- | ----- | --------- | 
| User  | Register - Login - Logout - Forget account | Login - Update - Delete - Statis - Logout account |
| Movie | Watch - Random - Filter type of video - Search - Subtitles - Speed up movie | Create - Update - Delete - Random movie |
| List  | Watch trailer - Filter genre of list | Create - Update - Delete - Random list |

<h2 id="setup"> 🧰 Setup</h2>

  <ul>
    <li><a href="https://github.com/Nguyenle23/netflix-mern/tree/main/APIs">APIs</a></li>
    <li><a href="https://github.com/Nguyenle23/netflix-mern/tree/main/Dashboard">Dashboard</a></li>
    <li><a href="https://github.com/Nguyenle23/netflix-mern/tree/main/UI-UX">Client</a></li>
  </ul>

<h2 id="technologies"> 🖥️ Technologies</h2>

### - Server
| Plugin | README |
| ------ | ------ |
| bcryptjs | [plugins/bcryptjs/README.md](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md) |
| express | [plugins/express/README.md](https://github.com/expressjs/express/blob/master/Readme.md) |
| jsonwebtoken | [plugins/jsonwebtoken/README.md](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md) |
| mongoose | [plugins/mongoose/README.md](https://github.com/Automattic/mongoose/blob/master/README.md) |
| nodemon | [plugins/nodemon/README.md](https://github.com/remy/nodemon/blob/master/README.md) |
| cloudinary | [plugins/cloudinary/README.md](https://github.com/cloudinary) |

### - Dashboard 

| Plugin | README |
| ------ | ------ |
| axios | [plugins/axios/README.md](https://github.com/axios/axios/blob/master/README.md) |
| material-ui | [plugins/material-ui/README.md](https://github.com/mui-org/material-ui/blob/next/README.md) |
| react | [plugins/react/README.md](https://github.com/facebook/react/blob/master/README.md) |
| react-router-dom | [plugins/react-router/README.md](https://github.com/ReactTraining/react-router/blob/master/README.md) |
| recharts | [plugins/recharts/README.md](https://github.com/recharts/recharts/blob/master/README.md) |

### - Client

| Plugin | README |
| ------ | ------ |
| axios | [plugins/axios/README.md](https://github.com/axios/axios/blob/master/README.md) |
| react | [plugins/react/README.md](https://github.com/facebook/react/blob/master/README.md) |
| react-router-dom | [plugins/react-router/README.md](https://github.com/ReactTraining/react-router/blob/master/README.md) |
| sass | [plugins/sass/README.md](https://github.com/sass/sass/blob/main/README.md) |

<!-- FOLDER STRUCTURE -->
<h2 id="folder-structure"> 🗺️ Folder Structure</h2>
   
    ├── APIs
    │   ├── src
    │   │   ├── config
    │   │   ├── controllers
    │   │   ├── middlewares
    │   │   ├── models
    │   │   ├── routes
    │   │   ├── server.js
    │   
    ├── Dashboard
    │   ├── src
    │   │   ├── actions
    │   │   ├── components
    │   │   ├── context
    │   │   ├── pages
    │   │   ├── App.js
    │   │   ├── index.js
    │   
    ├── UI-UX
    │   ├── src
    │   │   ├── actions
    │   │   ├── authContext
    │   │   ├── components
    │   │   ├── pages
    │   │   ├── App.js
    │   │   ├── index.js
    
<h2 id="diagram"> 🖥 Diagrams </h2>

<h3> Use case diagram </h3> 

![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Diagram/usecase.png)

<h3> Sequence diagram </h3> 

|                                        Register                                        |                                        Watch                                |                                        Subcribe                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Diagram/sequence1.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Diagram/sequence2.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Diagram/sequence3.png) |


<h2 id="screenshot"> 📸 Screenshots </h2>

### Client
|                                        Login                                        |                                        Register                                |                                        Forget Password                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/login.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/register.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/forgetPass.png) |

|                                        Home Page                                        |                                        Profile                                |                                        Payment                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/home.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/profile.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/paid.png) |

|                                        List Movie                                        |                                        Info UI                                |                                        Watch UI                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/listMovie.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/infoUI.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Client/watchUI.png) |

### Admin
|                                        Login                                        |                                        Home Page                              |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/login.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/home.png) | 

|                                        User List                                        |                                        Update User                                |                                        User Statistics                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/userList.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/userEdit.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/statisticUser.png) |

|                                        Movie List                                        |                                        Update Movie                                |                                        Create Movie                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/movieList.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/movieEdit.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/createMovie.png) |

|                                        List List                                        |                                        Update List                                |                                        Create List                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/listList.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/listEdit.png) | ![](https://github.com/Nguyenle23/netflix-mern/blob/main/Images/Admin/createList.png) |

<h2 id="acknowledge"> 💼 Acknowledgement </h2>

- This project was based on [this tutorial](https://www.youtube.com/watch?v=tsNswx0nRKM&t=9099s&ab_channel=LamaDev).
### Future Features
- Creating features My List
- Improving search movies and developing search list 
- Building quickly change user
- Implement a recommendation system
