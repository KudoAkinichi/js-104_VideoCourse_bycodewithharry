https://www.codewithharry.com/videos/web-development-in-hindi-24/


CSS Tutorial: CSS Display Property | Web Development Tutorials #24
In this tutorial, we are going to learn about CSS Display Property. The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

We will start by making a new file as tut24.html and adding a boilerplate as usual. Give the title as CSS Display Property in the <title> tag. We will then add an image or logo and the h3 heading, in the header section with the class as “top”.

Let us style the image and heading with some CSS-

  img {
            margin: auto;
            display: block;
            width: 34px;
        }

        h3 {
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0px;
        }
By inspecting both the elements in the Chrome browser, we see that the image is an inline element and the h3 heading is the block element. Our objective is to bring all the elements to the center of the webpage. We can achieve it by adjusting the width of the block element i.e. the heading. The respective code of the following is-

 header {
            border: 2px solid red;
            margin: auto;
    width: 1200px;
        }
The display of “img” is inline and therefore, to make it come to center, we have to set the property display as block as follows-

img {
            margin: auto;
            display: block;
            width: 34px;
        }




The next problem which arises is that when we stretch the full width of the page, the text in the heading moves towards left. So to move it towards the center, we can set the property of text-alignment as center.
Display inline means it will take the space according to the size of the element. Display block means we can set its width and by margin manually.

Now suppose we want to make an element inline as well as customize its width too, then in that case we can use inline-block. To understand it, first we will add three divs with some texts in it and then style it. To appear those as a box, we can take the help of container and box class. We can style the box element as

.box {
            border: 4px solid black;
            background-color: grey;
            margin: 4px 0px;
            padding: 23px;
            width: 33%;
            box-sizing: border-box;
            display: inline-block;
        }
The inline-block property here allows us to change the width of inline elements also. To ensure that all the three blocks come in a single line, we can use the property box-sizing. It ensure that the width we provide is not changed including padding and margin.





So I believe, you must have clearly understood the concept CSS Display Property. Stay with the tutorials to build more attractive websites in the future. Till then, keep practicing.