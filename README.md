# README #

Create a HTML file from an Excel file.

### Prerequisites: ###

Download this repository to your local machine.

### What you must demonstrate: ###

* Generate an **XML file** from the **Excel file** at `src/input.xlsx`  **XML file** (which you should save at `/src/xml.xml`) using any programming 
language(s) of your choice.
* Use [XSLT](https://www.w3schools.com/xml/xsl_intro.asp) to convert the **XML file** into 
a **HTML file**. 
* Your XSLT **(XSL) file** should be created at `src/transform.xsl`
* The **HTML file** must match (_as close as possible_) the markup of the **HTML file** included at 
`src/index.html` - see the expected HTML output in the animation at the bottom of this readme.
* Create a `dist` folder (in the root directory) and store your **HTML file** there.
* Write a primarily technical facing word document at `Documentation.docx` (the audience of which will be some of our 
tech team and managers) to explain how we can run your software to test it.
* Manually zip your entire software as per the structure shown in the **Expected Output** section (below) and email it back to us.

We have been purposely vague in some of the requirements to see if you can show initiative and figure it out.

### Expected Output ###

In the end, when we extract your zip file, it should have the following content at a minimum:

```
/dist
    /assets
        /css
            style.css <-- you should hand-code this
        /images
            cadit-uk-logo.png
        /js
            interactivity.js <-- you should hand-code this
    index.html <-- your XSLT script should create this
/src
    input.xlsx
    transform.xsl  <-- you should hand-code this
    xml.xml <-- your software should create this
Documentation.docx <-- you will need to manually create this
README.md <-- don't modify this file
```

While keeping the above structure intact, please feel free to add any other files and folders as required.

See the animation at the bottom of this readme for an example of what the **HTML file** should do when accessed in the browser..

### Earn Bonus Points ###

Pay attention to detail.
Mobile responsiveness is a plus.
Comments in your code are good to tell us what you are doing with that piece of code.

Although not a strict requirement, you'll earn bonus points if you can use some of the tech/methodologies that we 
regularly use:

* Grunt
* SASS
* NodeJS (Webpack)
* jQuery
* Apache ANT
* CSS Flexbox

You'll learn these on the job if you come on board.

### Impress Us! ###

If this is a trivial task for you, **GREAT!** Feel free to add some flair to really grab our attention!

Although not a strict requirement, if you know GIT, why not fork this repository?

### Notes ###

We understand that XSLT may be new to you but we would like to see how you cope with having to 
learn something new.

### Questions/Clarification? ###

* Please feel free to contact [Christiaan van Rensburg](mailto:christiaanvanrensburg@cadituk.com)

![alt text][logo]

[logo]: result.gif "Result Demo"