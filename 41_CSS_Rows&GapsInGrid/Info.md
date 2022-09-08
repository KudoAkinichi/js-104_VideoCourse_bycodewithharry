https://www.codewithharry.com/videos/web-development-in-hindi-41/


CSS Grid: Creating Rows & Gaps in Grid | Web Development Tutorials #41
CSS Grid- Creating Rows and Gaps in Grid
In the last tutorial, we have discussed the basics of grids and how they can be used in CSS. Here we will see how to create rows and gaps in grids. For that, make a new file named tut41.html and add the boilerplate to get the basic HTML code. Then give the title as CSS Grid under the <title> tag.

Lastly, we have discussed everything about grid columns and how to structure them but we have not seen anything about grid rows. Therefore, here we will learn to add different rows and set its length. Now let us write the HTML code. We will make a class with grid and add 10 divs inside it as follows-

<body>
    <div class="grid">
        <div class="box">This is box-1</div>
        <div class="box">This is box-2</div>
        <div class="box">This is box-3</div>
        <div class="box">This is box-4</div>
        <div class="box">This is box-5</div>
        <div class="box">This is box-6</div>
        <div class="box">This is box-7</div>
        <div class="box">This is box-8</div>
        <div class="box">This is box-9</div>
        <div class="box">This is box-10</div>
    </div>
</body>
Now let us add background color and border to the box as follows-

.box{
        background-color: red;
        border: 2px solid black;
    }
The output will look as follows-



The next step is to display the grids and decide the number of rows in it and then customize it as follows-

.grid{
        display: grid;
        grid-template-rows: 1fr 1fr 4fr;
        grid-auto-rows: 2fr;
        grid-template-columns: 1fr 4fr 2fr;
        grid-gap: 1rem;
    }
The grid-template-rows property is used to divide the first, second, and third rows in given fractions. The other rows will be set as two times the normal size. It is done with the help of grid-auto-rows. The grid-gap is used to decide the gap between the two grids. Lastly, the grid-template-columns is used to decide the number of columns used in the grid.

The result will now look as follows-




However, till now if we notice, these grid systems are not responsive which may leave a bad user experience. Therefore, we can make the use of repeat function which will fix the number of columns in the grid as follows-

.grid{
        display: grid;
        grid-template-rows: 1fr 1fr 4fr;
        grid-auto-rows: 2fr;
        grid-template-columns: repeat(4, 2fr);
        grid-gap: 1rem;
    }
This is how you can create grids of your own choice. With the help of the grid system, you can make your own grids, menus, or navigation bars without having any problem. From the next tutorial, we will learn the spanning of grids where we can assign different boxes to a particular grid. Till then you can practice this to have good command over the grid system