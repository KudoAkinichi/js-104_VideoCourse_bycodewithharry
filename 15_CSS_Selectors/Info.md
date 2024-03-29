https://www.codewithharry.com/videos/web-development-in-hindi-15/


CSS Tutorial: Selectors in CSS | Web Development Tutorials #15
In the last tutorial, we have discussed different methods to write CSS. Here, we are going forward to learn different selectors in CSS. CSS selectors are used to select any content you want to style. These are the part of CSS ruleset. CSS selectors select HTML elements according to its id, class, type, attribute, etc.

CSS Selectors are used to target HTML elements.
Selectors make it easy for us to easily target single/multiple HTML elements in the markup.
We will see four types of CSS Selectors:

CSS element Selector
CSS id Selector
CSS class Selector
The CSS grouping Selector
As discussed in one of the previous videos, the basic syntax of writing the CSS is-

p {color: blue;}

In the example above, ‘p’ is the selector. It will convert all the paragraph into blue.

So let us now start by making a new file as tut14.html and as usual, add an instant boilerplate Visual Studio Code. Give the title as CSS Selectors in the <title> tag. In this example, we will be using Internal CSS, not Inline CSS. However, you can also use External CSS. I will be explaining using internal CSS as I want everything to be within the page. Let us start with the simple example-

Element Selector
<h3>CSS Selectors</h3>
             <p id="firstPara">This is a simple paragraph to demonstrate css selectors</p>
             <p id="secondPara" class="redElement bgBlue">This is a another simple paragraph to demonstrate css selectors</p>
<div>
       <p>This is yet another simple paragraph inside div to demonstrate css selectors</p>
</div>
The above code will convert all the three paragraphs into red colour as shown below-




Class Selector
If we want to select a paragraph and assign multiple properties to it, then we can use Class Selector. Let us understand with an example-

<style>
           .redElement{
                   Color: red;
                       }
.bgBlue{

            Background-color: blue;
}
</style>
<body>
    <h3>CSS Selectors</h3>
    <p>This is a simple paragraph to demonstrate css selectors</p>
    <p id="secondPara" class="redElement bgBlue">This is a another simple paragraph to demonstrate css selectors</p>
    <div>
        <p>This is yet another simple paragraph inside div to demonstrate css selectors</p>
    </div>
</body>
This will convert only the second paragraph with class “redElement” and “bgBlue” as shown below-




ID Selector
If we want to select the only paragraph to show any change, then we will be using ID selector. Let us understand with an example-

<style>
            #firstPara{
                     color: green;
                        }
</style>
<body>
    <h3>CSS Selectors</h3>
    <p id="firstPara">This is a simple paragraph to demonstrate css selectors</p>
    <p>This is a another simple paragraph to demonstrate css selectors</p>
    <div>
        <p>This is yet another simple paragraph inside div to demonstrate css selectors</p>
    </div>
</body>
By writing the above code we will see the changes as follows-





Grouping Selector
Grouping Selector is used when we have to make changes in more than one element. Let us understand with an example. Suppose we have two elements footer and span and we want the same changes in both the elements. Then we can do the following-

<style>
            footer, span{
                 Background-color: pink;
                        }
</style>
<body>
    <h3>CSS Selectors</h3>
    <p>This is a simple paragraph to demonstrate css selectors</p>
    <p>This is a another simple paragraph to demonstrate css selectors</p>
    <div>
        <p>This is yet another simple paragraph inside div to demonstrate css selectors</p>
        <span>this is span</span>
    </div>
    <footer>This is footer</footer>
</body>
So, I believe, you must have understood the basic concepts of CSS Selectors. Till now, you must keep two points in your mind-

There are three ways of writing CSS- Inline, Internal, and External.
How to do the basic selections of CSS selectors.

THE END LOL