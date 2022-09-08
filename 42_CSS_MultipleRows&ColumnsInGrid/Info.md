https://www.codewithharry.com/videos/web-development-in-hindi-42/


CSS Grid: Spanning Multiple Rows and Columns in Grid | Web Development Tutorials #42
In the last tutorial, we have discussed how to make a grid using different rows and columns. Here, we will learn about spanning multiple rows and columns in the grid. Start by making a new file called tut42.html and add an instant boilerplate to get the basic HTML template. Then give the title as CSS Grid under the <title> tag.

For our HTML code, we will make 8 divs of items and give them the class box. So the HTML code is as follows-

<body>
    <div class="container">
        <div class="box">Item-1</div>
        <div class="box">Item-2</div>
        <div class="box">Item-3</div>
        <div class="box">Item-4</div>
        <div class="box">Item-5</div>
        <div class="box">Item-6</div>
        <div class="box">Item-7</div>
        <div class="box">Item-8</div>
    </div>
</body>
Now we will add modify the box class with CSS as follows-

.box{
        border: 2px solid black;
        background-color: rgb(228, 188, 228);
        padding: 23px;
}
Then we will add some CSS in the class container to make the grid as follows-

.container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 1rem;
}
 

The output will look as follows-



To make it look better, we can add a grid-gap in the grid. We can add two types of grid gaps in our grid; one for rows and other for columns as follows-

grid-column-gap: 7rem;
grid-row-gap: 1rem; 
Now the output will look as follows-



To understand better the concept of spanning, we can increase the number of items in the HTML. So after increasing the number of items we want that item of numbers 1,2,6 and 7 should we treated as one block.



 For doing this we can use the property called grid row start and end. If we write the code as follows-

.box:first-child{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
}
The result will be as follows-



With the help of this property, we can create extremely good layouts for our websites and it will be going to benefit us a lot in the future also for designing sidebars on the website.

However, for the above code, there is a shortcut method also. It does not allow you to write the long code as above. The code is as follows-

box:first-child{
        /* grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3; */
        grid-column: 1 / span 3;
        grid-row: 1 / span 3;
    }
It will generate the same result as above.

One of the most confusion which now arises is what amongst floats, flexbox or grids should we use? The simple answer is, you are free to use any three of them irrespective of your website should look good and responsive and you should be comfortable with the development. You must always try to give the best user experience because it’s the most important part of SEO.