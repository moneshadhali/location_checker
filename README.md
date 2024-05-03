# IP Geolocation LookUp

## Table of Contents
1. [Introduction](#introduction)
2. [Installation Instruction](#installation)
3. [Tech Stack](#tech-stack)
4. [Wireframe](#wireframe)
5. [Component Diagram](#component-diagram)

<a id="introduction"></a>
### Introduction
This React website displays information about the geolocation of a given IP address.

The following are the information displayed on the website:
- **IP Address:** 86.6.69.183
- **ISP Name:** Virgin Media
- **City:** Waltham Forest
- **Region:** England
- **Country:** United Kingdom
- **Continent:** Europe
- **Time:** 17:21:39 (BST)
- **Currency:** Sterling - GBP
- And a Map of the IP location

<a id="installation"></a>
### Installation Instruction
1. Clone the repository to your local machine  `git clone project_link`.
2. Navigate to the project directory (in the terminal).
3. Create a `.env` file inside the project file structure.
4. Obtain an API key from [Abstract API](https://app.abstractapi.com).
5. Paste this command in the `.env` file: `REACT_APP_API_KEY = Your_API_key`.
6. Replace `Your_API_key` with your own unique key.
7. Install dependencies using `npm install`.
8. Run the application using `npm start`.
9. Access the website in your browser.

<a id="tech-stack"></a>
## Tech Stack
This Project was build using the following technologies:
- **JavaScript + React**: For building interactive UIs and managing state.
- **HTML**: The standard markup language for creating web pages.
- **CSS**: For styling and presenting the content elegantly.

And used the API from this website [Abstract API](https://app.abstractapi.com).

## Dependencies
This React application uses the following packages:
- leaflet: "^1.9.4"
- react: "^18.3.1"
- react-dom: "^18.3.1"
- react-leaflet: "^4.2.1"
- react-scripts: "5.0.1"

<a id="wireframe"></a>
### Wireframe 
![image](https://github.com/moneshadhali/location_checker/assets/99983599/172e99e6-ded9-412c-89c6-430b076f63cd)

<a id="component-diagram"></a>
### Component Diagram 
![image](https://github.com/moneshadhali/location_checker/assets/99983599/6cf4b9e1-4dca-4c5a-987c-b9cfa3924366)

