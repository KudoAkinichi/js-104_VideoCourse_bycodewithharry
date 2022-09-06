https://www.codewithharry.com/videos/web-development-in-hindi-31/


CSS Tutorial: More on CSS Selectors | Web Development Tutorials #31
In one of our previous videos, we have already covered the basics of CSS selectors. In this tutorial, we will discuss some advanced concepts about CSS selectors.

First of all, we have used the CSS given below to design some divs and paragraph tags.

<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS Selectors</title>
    <style>
        h1 {
            background-color: red;
            color: black;
            font-weight: bold;
            text-align: center;
        }
        div p {
            color: rgb(0, 0, 128);
            background-color: orange;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1> This is more on selectors</h1>
    <div class="container">
        <div class="row">
            <p> This is a paragraph</p>
        </div>
        <p> This is another paragraph</p>
    </div>
    <p> This is the third paragraph</p>
</body>
</html>
Output : 



Now, let's suppose you want to add styling to all the paragraphs inside the div. What will you do? You can use the following CSS :

div p{
            color: rgb(0, 0, 128);
            background-color:orange;
            font-weight: bold;
        }
 Here are the results :



In the above image, you can see that the CSS is applied to the two paragraphs, but it is not applied to the third paragraph. Why? Let me answer this simple question for you. The CSS is not applied to the third paragraph because we have applied CSS only on the <p> tags inside div, and the third paragraph is not inside a div element.

This was very simple. Now let's move on to the next situation. What will you do if you want to target the <p> tags, which are the direct child of the div? So, whenever we want to target a direct child element, we use the following syntax :

element> element; 
Example :

div>p
In the above example, the styling will be applied to all <p> elements which are the direct child of any div element. Let's understand this with the help of paragraph tags that we created at the starting of this tutorial. Here is the CSS used :

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS Selectors</title>
    <style>
        h1 {
            background-color: red;
            color: black;
            font-weight: bold;
            text-align: center;
        }
        div p {
            color: rgb(0, 0, 128);
            background-color: orange;
            font-weight: bold;
        }
        div>p{
            background-color: lightblue;
            color:white;
        }
    </style>
</head>
<body>
    <h1> This is more on selectors</h1>
    <div class="container">
        <div class="row">
            <ul>
                <li class="item">
                    <p>This is a paragraph inside li and this is not a direct child of div. It will not get affected.</p>
                </li>
            </ul>
            <p> This is the second paragraph and it will get affected because it is the direct child of div.</p>
        </div>
        <p> This is the third pargraph and it will get affected because it is also a direct child</p>
    </div>
    <p> This is the outer most paragraph and it will not get affected. </p>
</body>
</html>
Here are the results :



In the above image, you can see that the CSS is applied to the second and third paragraphs because they are the direct child of div. Paragraph inside <li> is the direct child of <li> and not of <div>. Also, in the case of the outermost paragraph, the parent element is the body and not div; therefore, no styling is applied to it. Now, we will talk about one more type of CSS selectors, i.e., div+p.

div+p :
There might be situations where you want to select the <p> tags that are immediately after the <div> elements. In such cases, we use the div+p selectors. Let's understand this with the help of example given below:

Html and CSS used:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS Selectors</title>
    <style>
        h1 {
            background-color: red;
            color: black;
            font-weight: bold;
            text-align: center;
        }
        /* div p {
            color: rgb(0, 0, 128);
            background-color: orange;
            font-weight: bold;
        } */
        /* div>p{
            background-color: lightblue;
            color:white;
        } */
      div+p{
          color: white;
          background-color:#D2302C;
      }
    </style>
</head>
<body>
    <h1> This is more on selectors</h1>
    <div class="container">
        <div class="row">
            <ul>
                <li class="item">
                    <p>This is a paragraph and it is not immediately after the div element so no CSS will be applied to it.</p>
                </li>
            </ul>
            <p> This is the second paragraph and it is not immediately after the div element so no CSS will be applied to it.</p>
        </div>
        <p> This is the third pargraph and it will get affected because it is immediately afetr the div tag.</p>
    </div>
    <p> This is the outer most paragraph and it will also get affected because it is immediately after the div tag. </p>
</body>
</html>
Output :



In the above image, you can see that the CSS is applied only to the third and outermost paragraphs because they are next to the <div> element.

This is all for this tutorial, and in the next tutorial, we will discuss the nth-child pseudo selectors. See you in the next tutorial!