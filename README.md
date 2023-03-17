# PWA Text Editor Application

This application is a text editor that runs in the browser. It is a single-page application that meets the PWA (progressive web application) criteria. 

Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.

The application is deployed in Heroku cloud.


## Description

This text editor application features progressive web application technology, which allows to install it locally and run in the offline mode using a service worker. Service worker allows to support the offline mode of the application by allowing to cache the internet requests and re-apply these once the internet connection is restored.

The app also uses IndexedDB - transactional database system, like an SQL-based RDBMS. However, unlike SQL-based RDBMSes, which use fixed-column tables, IndexedDB is a JavaScript-based object-oriented database. IndexedDB is an almost ideal solution to store the large amounts of the structured data on a client-side storage.

Progressive Web Application relies on the browsers, such as Google Chrome, to support the locally installed application.

If the older versions of the browsers are still the requirement to be used, the backward compatibility is supported for these users with the Babel compiler. No additional steps are required to run the application in these older environments.

## Table of Contents

  [Title](#title)

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Questions](#questions)

## Installation

This application is hosted in Heroku cloud and requires no initial installation to use it.

Should the user wish to install the application locally (which is a very much recommended option), they would need to click on the "install" button of the menu or click the special install sign at the end of the URL line of the browser. The prompt will appear and once the user confirms the installation, the application will be installed locally and will be ready to be used without a need to bookmark the URL and revisit the web page every time the app would need to be used.

## Usage

Please run use the following link to run it in the browser (Google Chrome browser is recommended):

https://t-editor.herokuapp.com/

## Credits

Node.js and Express
IndexedDB to save the client structured data
WebPack to package the application
Service Worker with WorkBox to cache the static assets
PWA to offer the local installation of the application
Babel for the backward compatibility


## License

MIT License

Copyright (c) 2023 Vasily Likhovaydo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing

vl1
  
## Questions

My GitHub name is vl1. Most of the answers to the questions can be found there, here is the link to my profile at GitHub:

https://github.com/vl1

For additional questions please e-mail to likhovaido@gmail.com

Thank you for your interest in this app.
