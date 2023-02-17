# Tutorial 3

* Date Created: 02 17 2023
* Last Modification Date: 02 17 2023
* Netlify URL: https://tutorial3-csci5709.netlify.app/
* Git URL: https://git.cs.dal.ca/subham/csci-5709/-/tree/tutorial3

## Authors

* Subham Sharma - subham@dal.ca

## Prerequisites

* Visual Studio code Installation : 'https://code.visualstudio.com/download'

## Installing

- By creating a local folder, clone the project into the folder.
- Open the project in VS Code.
- run npm commands like "npm i react-router-dom" to install npm modules.
- to start the application, run command "npm start"

```
Compiled successfully!
You can now view webproj in the browser.
Local:            http://localhost:3000
On Your Network:  http://your-ip:3000
Note that the development build is not optimized.
To create a production build, use npm run build.
webpack compiled successfully
```
## Deployment

* Pushed code on a Github repository.
* Connected github repository with Netlify account.
* Project is built on Netlify.
* App Successfully Deployed.

## Built With

* React - The web framework used

## Sources Used
### register.js
```
    const handleInput = (e) => {
        console.log(e.target.value);
        if(e.target.value) {
            ALPHABET_REGEX.test(e.target.value) ? setErrorMessage(NO_ERROR) : setErrorMessage(ALPHABET_ONLY);
        }
        else {
            setErrorMessage(EMPTY_FIELD);
        }
        props.setUsername(e.target.value);
    }
```
The code above was created by adapting the code by [Gurleen Kaur Saluja](https://git.cs.dal.ca/gsaluja/tutorial3demo/-/tree/t3v2/src/Components) as shown below: 
```
const validations = (e) => {
    // console.log(e.target.value);
    if (e.target.name === "firstname") {
      if (e.target.value) {
        ALPHABET_REGEX.test(e.target.value)
          ? setFErr(NO_ERROR)
          : setFErr(ALPHABET_ONLY);
      } else {
        setFErr(EMPTY_FIELD);
      }
      setFName(e.target.value);
    } 
}
```
- <!---How---> The code in [Gurleen Kaur Saluja](https://git.cs.dal.ca/gsaluja/tutorial3demo/-/tree/t3v2/src/Components) was implemented by Gurleen kaur saluja for form validations.
- <!---Why---> [Gurleen Kaur Saluja](https://git.cs.dal.ca/gsaluja/tutorial3demo/-/tree/t3v2/src/Components)'s Code was used for understanding the form validation process.
- <!---How---> [Gurleen Kaur Saluja](https://git.cs.dal.ca/gsaluja/tutorial3demo/-/tree/t3v2/src/Components)'s Code was modified by adding own form elements and regexes. 

## Acknowledements

* References
- https://git.cs.dal.ca/gsaluja/tutorial3demo/-/tree/t3v2/src/Components 


