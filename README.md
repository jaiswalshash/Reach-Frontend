# Welcome to Harmony Pages!

Hi! Welcome to **Harmony Pages**, your personalized gateway to the perfect literary escape! Harmony Pages is a unique web application designed to harmonize your personality with literature genres and recommend specific book that resonate with your individuality. Say goodbye to the struggle of finding the ideal book—Harmony Pages simplifies the process by utilizing a sophisticated algorithm that matches your personality traits with the enchanting world of literature. 


# **How It Works:**

At the core of [Harmony Pages](https://reach-frontend.vercel.app/) is a user-friendly form that requires just two thoughtfully crafted questions. These questions are designed to delve into the depths of your preferences and characteristics, capturing the essence of what makes you unique. 

## Front-end

The **[Harmony page's frontend](https://github.com/jaiswalshash/Reach-Frontend)** is meticulously crafted with the end user at the forefront of design considerations. Drawing from the perspective of an **avid reader**, the interface is intuitively structured with two straightforward `select fields`, prompting users to engage with **thoughtfully curated questions**. To elevate the user experience, a **dark mode option** has been seamlessly integrated, providing users with a visually comfortable and customizable environment, (PS: It's **not Black**). Taking user accessibility to the next level, the Harmony page boasts impeccable `mobile responsiveness`, ensuring a seamless and enjoyable experience across various devices. This commitment to adaptability reflects our dedication to making the platform accessible anytime, anywhere. Furthermore, we've incorporated a convenient feature that allows users to conduct a **Google search for recommended book** directly within the application. This integration not only streamlines the process of discovering new reads but also enhances the Harmony page's functionality as a comprehensive tool for **literary exploration**.. 

### TechStack:

 - **ReactJS:**  Harmony Pages is built on the ReactJS library, the reason is for its flexibility, efficiency, and seamless user experience. React's component-based architecture allows for the creation of reusable UI components, promoting a modular and maintainable codebase. This not only facilitates development but also enhances the scalability of the application as it continues to evolve.
 
 - **Tailwind CSS:** Tailwind CSS was chosen as the styling framework for Harmony Pages due to its utility-first approach and flexibility. Tailwind allows for the rapid development of a visually appealing and responsive user interface without the need to write custom CSS. The extensive set of pre-built utility classes eliminates the need for creating a large stylesheet, contributing to a more lightweight application.

## Back-end
The [Harmony Page backend](https://github.com/jaiswalshash/Reach-Backend) serves as the engine powering the book matching functionality. Designed with efficiency and flexibility in mind, the backend leverages a combination of technologies to ensure a seamless experience for users seeking personalized book recommendations.
The Books Database is created with the help of [Google Books API](https://developers.google.com/books).
User's input is quantified on two parameters and so does the book is quantified on two parameters. The vector of two values is calculated using Euclidean distance between two vectors.

`
function calculateDifference(vector1, vector2) { 
return Math.sqrt(Math.pow(vector1[0] - vector2[0], 2) + Math.pow(vector1[1] - vector2[1], 2)); 
}` 

### TechStack:

 - **NodeJS:** NodeJS was chosen because of it's low complexity and fast server-side JavaScript development, and it boasts a vast npm ecosystem for streamlined package management and cross-platform compatibility.

 - **MongoDB:** MongoDB was preferred for its flexible NoSQL architecture, facilitating dynamic data storage, scalability, and seamless integration with NodeJS.

## Why I chose Book Matching Web Application?

Choosing this project was not a tough decision for me because I am a book lover myself. It provided me with the freedom to build the application the way I envisioned it. The design reflects my personality—colorful and elegant. Building this application was both fun and challenging, especially when working on it alongside other commitments. I learned so many things during the process.

### How to use the application?

Fill out the form, select the appropriate answers for yourself, and submit the form. If you're using the application for the first time, kindly wait for some time as I'm using a free hosting service, and it takes a moment to spin up the server.

### How to setup this project locally?

The application has two parts: client and server. Due to hosting reasons, I have two different repositories for the application. Clone the [client](https://github.com/jaiswalshash/Reach-Frontend) repository and run the `npm install` command. After the installation is done, run the `npm start` command in your terminal. 