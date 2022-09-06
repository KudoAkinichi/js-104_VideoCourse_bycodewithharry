https://www.codewithharry.com/videos/web-development-in-hindi-32/


CSS Tutorial: Attribute & nth child pseudo Selectors | Web Development Tutorials #32
In the last tutorial, we have discussed different pseudo-selectors in CSS. Here, we are going to learn some more advanced pseudo-selectors that will benefit a lot in web development. We will start by making a new file as tut32.html and will add the basic template. Give the title as an attribute and nth-child pseudo-selectors in the <title> tag.

We will create a very basic form by writing the HTML code as below-

<body>
    <div class="container">
        <h1><a href="http://google.com" target="_blank">Go to google</a></h1>
        <h1><a href="http://facebook.com" target="_self">Go to Facebook</a></h1>
        <form action="" class="form-control">
            <input type="text" placeholder="Enter your name">
            <input type="email" placeholder="Enter your email">
            <input type="password" placeholder="Enter your password">
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li class="item" id="item-1">Item1</li>
            <li class="item" id="item-2">Item2</li>
            <li class="item" id="item-3">Item3</li>
            <li class="item" id="item-4">Item4</li>
            <li class="item" id="item-5">Item5</li>
            <li class="item" id="item-6">Item6</li>
            <li class="item" id="item-7">Item7</li>
            <li class="item" id="item-8">Item8</li>
            <li class="item" id="item-9">Item9</li>
            <li class="item" id="item-10">Item10</li>
        </ul>
    </div>
</body>
The form will look very simple as follows :



We will now begin our styling part. Initial, we wiil set the display of the input as block-

 input {
            display: block;
        }
We will then try to move the container to the center of the webpage by the following code.

.container {
            display: block;
            width: 233px;
            margin: auto;
        }
To select the input of type text only, we will write the following code-

input[type='text'] {
            padding: 23px;
            border: 2px solid red;
        }
By the above code, the changes will be made only in the input form having type text.



With the help of pseudo selectors, we can target different properties by their attributes. In the same way, if we want to target our email tab, then we can write the code as follows and can apply some property to it-

input[type='email'] {
            color: yellow;
            border: 4px solid black;
        }
We will notice the black border with several other properties applied to it. In the same way, we can target more properties or tags. 

Now let us see how to use nth child pseudo selectors. Suppose, if we write-

li:nth-child(3){
      color: cyan;
}
The above code will convert the text color to the cyan of the third only. What if we want to change the text color to red of every third element of the list. In that case, we can write-

li:nth-child(3n+3) {
            color: red;
        }
This will convert the text color to red of every third element in the fist.

It works on the basic formula where it will convert all the items depending on the values of n starting from 0. In the same way, we can select all the even items on the list and can apply some CSS to it.

li:nth-child(even) {
            background-color: yellow;
        }
You can try more yourself by practicing with different codes and analyze the changes accordingly. To keep learning more, stay with the tutorial.