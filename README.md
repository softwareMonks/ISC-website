# Inelectronics Student Club Website

### Task 
Design and Create a website that contain the following functionalities:
1. Login and authentication:
    - Create and account, update account information and login into the website.
2. Database:
    - Contains all the the data needed to run the website including images, users and able to fetch activities from.
3. Admin dashboard:
    - Add new activities, add new form, modify static data (paragraphs, headings and images), delete data from the database.
4. Form Validation:
    - Activity sign up form
    - User sign up form

### Stack Used
Design:
    Figma
Development:
    React
    Node
    Express
    MongoDB
   
### Setup
```
git clone https://github.com/softwareMonks/ISC-website
cd ISC_website
npm install
npm run build
```

## How to Use

#### `npm run build`
This will create minified materialize css & js files. Then it will automatically run a server that renders everything in the `dist/` folder and watch for any changes made in the `src/sass/`, `src/js/`, and in `dist/`. Any change will automatically prompt the browser to reload.

#### `npm run watch`
The same as `npm run build` without the initial part of constructing the minified files. It just launches the browser and watches.

#### `npm run css`
1. Compiles the sass files into a compressed css file.
2. Autoprefixes all rules for Chrome 30+, Firefox 30+, IE 10+, and Safari 8+.
3. Renames the final file into "materialize.min.css".

#### `npm run js`
Transpiles all of the js files with babel, concats them into one file, and then minifies it.
