# Yu-Gi-Oh! deck browser app

A single-page React application with yu-gi-oh cards. When the user selects a card-name from the sidebar list,the selected card's detailed content and image are displayed on the main view.

## App Overview and development proccess

Initial app's setup was done using [webpack](https://github.com/webpack/webpack) , [babel](https://github.com/babel/babel) and [react packages](https://www.npmjs.com/package/react-dom/v/15.6.0-rc.1). In order to get all deck cards info from the beginning, we made multiple fetch requests, using the Promise.all method. All the data returned from fetch requests were pushed to the main deck array. Deck array is passed via props to from parent Main component to children components, so the desired content is displayed accordingly. We keep the state info that changes inside Main, so every time there is a user interaction, children component's content changes in real time.
Version-control tool:git.

## Table of Contents

1.  [Getting Started](#getting_Started)
2.  [Prerequisites](#prerequisites)
3.  [Demo](#demo)
4.  [Installing](#installing)
5.  [Dependencies](#dependencies)
6.  [API](#api)
7.  [Licence](#licence)

## Getting Started

Clone the repository or download the zip-file of the master branch.

### Prerequisites

_npm_ :
If you don't have npm installed, navigate to npm's [website](https://www.npmjs.com/get-npm) to download and install the software.

## Demo

_coming soon_

NOTE!:App was initially hosted with firebase, but due to mixed-content-blocking error,it could not properly fetch the info. For now, there isn't an HTTPS api version. We are working on an alternative hosting method.

### Installing

To get started developing right away:
Using your terminal/command line, get inside the folder where these project files are kept: cd /path/to/the/project.

- install all project dependencies with `npm install`

#### To run in developer mode

- start the development server with `npm start`

### Dependencies

Packages used:

- [react react-dom](https://www.npmjs.com/package/react-dom/v/15.6.0-rc.1)
- [proptypes](https://www.npmjs.com/package/prop-types)

### API

This project fetches card data from [yugioh-api](http://52.57.88.137/)

**[Back to top](#table-of-contents)**

## License

#### (The MIT License)

Copyright (c) 2018 Foteini Kollia

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[Back to top](#table-of-contents)**
