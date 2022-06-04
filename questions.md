# Front End Web Developer - Technical Test

The test is divided into two parts:
• Part 1 is a set of 6 questions worth 12 marks in total.
• Part 2 is a practical exercise worth 30 marks in total.
You may use any web sources you wish but this should be your OWN work and you should be able to justify/explain your answers.

## Part 1. Questions on Web Development

### Programming (general)

Q1. Write pseudocode OR describe the key steps for printing the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
(4 marks)

### HTML/CSS

Q2. You have an application where every user has an image avatar that is displayed when they post a comment. You want to style these images differently from other images. Create a CSS class named avatar that fulfils the following requirements:
• The avatar's border is rounded, so that it appears as a circle.
• The avatar's width and height are both 150px.
• The avatar has a solid border, has a width of 2px, and be coloured grey.
(4 marks)

Q3. In HTML what is the difference between an ID and Class
(1 mark)

### JavaScript

Q4. What is the value of foo?
(1 mark)
let foo = 10 + '20';

Q5. What value is returned from the following statement?
(1 mark)
"i'm a lasagna hog".split("").reverse().join("");

Q6. In JavaScript, what is the difference between == and ===
(1 mark)

## Part 2. Practical Exercise

The following practical exercise is worth 30 marks in total.
You may use any web sources you wish but this should be your OWN work.

Objective of this exercise
In this exercise you are being asked to develop a simple but functional Web application using JavaScript, HTML5 and CSS.
The web application will perform a basic book search and display the results. The application should display well in a web browser on a mobile device.
Please take your time to read through the guidelines, specification and API details before you begin.
We hope that the specification will give you a clear idea of what we are looking for, but if you have any questions please contact us via email at robert.greer@strath.ac.uk and we will try our best to answer them.
We expect this would take around 4 hours to complete.
Once you are finished, please return your project code to us as single zip file that includes all html, JavaScript and CSS.

Implementation Guidelines
The Web app should make use of the OpenLibrary APIs. Details of these are in the API Details section in this document below.
For API calls we suggest you use the XMLHttpRequest object supported by all modern browsers, however feel free to use some other method you are more familiar with.
We suggest creating the application in a single folder with the following files
• demo.html
• demo.js
• demo.css
We have allocated 20 marks to the implementation of the Search Page functionality and 10 marks to the Detail Page functionality. Use these as a rough guide as to how much effort to spend on each.
We suggest you focus your efforts on functionality, so if you are pushed for time you should leave any visual improvements until the end.
Don’t worry too much about incomplete functionality, we will look through your code to see how close you got.
Good Luck!

Wireframes
Below is a set of wireframe mock-ups of a Library Web app we want you to develop.
It comprises of

1. A Search Page, which functions as both a search page and a results page
2. A Detail Page, which presents details of the particular book result that the user clicks on

Specification

1. Search Page
   (20 marks)
   1.1 Search Form
   Should present a HTML form with just the following input elements
   • A text input field
   • A dropdown select
   • A search button
   Dropdown select should include the following 2 values “By Title” “By ISBN”
   • When “By title” is selected from the dropdown, clicking Search should do the following:
1. Make an AJAX call to the Search API to get the first 10 items matching the queried title
1. Display the search Results (as a scrollable list of DIVs as pictured in middle wireframe)
    For each book returned by the Search API present title, year and ISBN.
    Note: books can have more than one ISBN. Only present the first one.
1. Display indication of which records are displayed (e.g. 1-10 of 432) based on values for “numFound” and “start” returned by Search API
    Note: we are not asking you to fully implement pagination so no need to add next/previous results buttons to the UI.

• When “By ISBN” is selected from the dropdown, clicking Search should do the following:

1. Make an AJAX call to the Books API to get the item matching the queried ISBN
2. Display the “detail” page (as shown in the right wireframe)
   1.2 Search Results
   • When user clicks on a Result that has an ISBN number
   o Make an AJAX call to the Books API to get the item matching this ISBN
   o present the Detail Page for the selected book.
   • If user clicks on a Result that has no ISBM number, present an alert with the message “This book has no ISBN”

3. Detail Page
   (10 mark)
   The Detail Page should include the following elements returned from Books API for a given ISBN
   • Title
   • Author (use value from the “by_statement” element in the JSON)
   • Publisher (use 1st value from “publishers” JSON element)
   • Year
   • ISBN
   • Medium sized image of the book’s cover
   Include a button or link with the text “View full details” that navigates to the URL for that book.
   Include a back button or link to allow navigation back to the Search Page.

API Details

The Library Web app should make use of 2 APIs from OpenLibrary.
Full documentation (should you need to refer to it) is at https://openlibrary.org/developers/api
The APIs you should use are the Search API and Books API. Examples of calls to these are given below.

Search API
Purpose: Search results for books, authors, and more
Endpoint: http://openlibrary.org/search.json
Example: a HTTP Get request to the following URL returns first 10 books matching text ‘the lord of the rings’
http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=1&limit=10
JSON response (showing only the elements we are interested in):
{
"numFound": 538,
"start": 0,
"numFoundExact": true,
"docs": [
{
"title": "The Lord of the Rings",
"first_publish_year": 1954,
"isbn": [
"9785878600132",
"9785768402112",
"4566023699",
"0261102303"
]
}
]
}

Books API
Purpose: Retrieve a specific work or edition by identifier
Endpoint: https://openlibrary.org/api/books
Example: a HTTP Get request to the following URL would return details for ISBN 0451526538
https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&jscmd=data&format=json

JSON response (showing only the elements we are interested in)
"ISBN:0451526538" : {
"url":"https://openlibrary.org/books/OL1017798M/The_adventures_of_Tom_Sawyer",
"title":"The adventures of Tom Sawyer",
"by_statement":"Mark Twain; with an introduction by Robert S. Tilton.",
"publishers":[
{
"name":"Signet Classic"
}
],
"publish_date":"1997",
"cover":{
"small":"https://covers.openlibrary.org/b/id/11403183-S.jpg",
"medium":"https://covers.openlibrary.org/b/id/11403183-M.jpg",
"large":"https://covers.openlibrary.org/b/id/11403183-L.jpg"
}
}
