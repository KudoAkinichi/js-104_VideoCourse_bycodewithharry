https://www.codewithharry.com/videos/web-development-in-hindi-43/


CSS Grid: Autofit & MinMax | Web Development Tutorials #43
CSS Grid- Autofit and MinMax
In the last tutorial, we have discussed how to create different layouts from the grids. Here we will learn some more features about these grids and learn how to apply them through CSS.

Make a new file as tut43.html and add an instant boilerplate to get the basic HTML code to begin. Then give the title as CSS Grids under the <title> tag. Through the HTML, we will add a container and 12 divs with the class box as follows-

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
        <div class="box">Item-9</div>
        <div class="box">Item-10</div>
        <div class="box">Item-11</div>
        <div class="box">Item-12</div>
    </div>
</body>
Now we can add some CSS in the container and boxes as follows-

.container{ 
            display: grid; 
            grid-gap: 1rem;
}
.box{
            border: 2px solid black;
}
After writing the above code, the output will look like-



Now to give them the layouts of our choice, we can modify them by giving a background color and padding as follows-

.box{
            border: 2px solid black;
            background-color: rgb(245, 187, 101);
            padding: 34px; 
        }
 

The output will look as follows-



If we modify the container as follows-

.container{ 
            display: grid; 
            grid-gap: 1rem;
            grid-template-columns: 112px 112px 112px;
            justify-content: center;
        }
By adding the grid-template-columns, and setting the justify-content as the center, the output will look as follows-



Also, if we set the grid-template-columns as 1fr as follows-

grid-template-columns: 1fr 1fr 1fr;
It will only set all the grids in 3 columns irrespective of the screen size. But if we want that all the grids should behave according to the screen size and adjust its size according to different devices, then we have to make them responsive. It means if the user is viewing our website on a mobile phone, he should see the number of rows less as compared while he is watching on a larger screen. So for that, we have to define our container as follows-

.container{ 
            display: grid; 
            grid-gap: 1rem;
            /* grid-template-columns: 112px 112px 112px;  */
            /* grid-template-columns: 1fr 1fr 1fr;  */
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            /* justify-content: center;  */
        }
The benefit of auto-fit is that it will repeat the number of times it is necessary. The minmax will decide the minimum width given to any rows.

So I hope you have understood how to decide the minimum and maximum width of a row and make it responsive. You should keep practicing all the codes learned till now to make build your knowledge. 