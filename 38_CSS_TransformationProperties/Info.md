https://www.codewithharry.com/videos/web-development-in-hindi-38/


CSS Tutorial: Transform property in CSS | Web Development Tutorials #38
In this tutorial, we are going to learn about different types of transforms used in CSS. The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew., elements. This property is also used in creating animations.

We will start by making a new file as tut38.html and create an instant boilerplate through emmet abbreviation to get the basic HTML template. Give the title as CSS Transform in the <title> tag. Then we will write our HTML code to get started as follows-

<body>
    <div class="container">
        <div class="box">This is a box</div>
    </div>
</body>
Let us now design our box with some CSS as shown below-

.box{
            background: brown;
            border: 2px solid black;
            border-radius: 8px;
            height: 400px;
            width: 400px;
}
We will also customize our container with the following code as shown below-

.container{
            height: 80vh;
            background-color: burlywood;
            display: flex;
            justify-content: center;
            align-items: center;
        }
The box and the container will look as follows-



The box will come to the center. We can reset the margin and paddings already applied as follows-

*{
            margin: 0px;
            padding: 0px;
        }
We are doing this because you must know what all obstacles occur while creating a website and how to tackle them.

Now we can play with the box and apply different transform properties to it. However, we can add more properties to the box to make it look better.

.box{
            display: flex;
            align-items: center;
            justify-content: center;
}
We can add transform property directly to the box itself. For example, if we write 

transform: rotate(45deg);
After writing the above code in the box element, it will look like-




We have to apply the transition effect in the box so that it looks like a complete transition effect. For that, we have to add the below code in the box element.-

transition: all 0.5s ease-in-out;
Now, we can ad the hover effect to add the various transition effects-

If we want to rotate the box, we can write-
.box:hover{
            transform: rotate(360deg);
}
It will completely rotate the box to 360 degrees.

We can also skew the box through certain degrees. The skew property is used sometimes when we want to put the content on one side or we want to show the 3D effect. The code is as follows-
.box:hover{
            transform: skew(40deg);
}
We can also scale the box. The box will become large depending on the values we provide.
.box:hover{
              transform: scale(2);
}
In the above example, the box will grow 2 times the initial size.

We can also translate or move the box in the x or y axis respectively by providing some values. The code for them is as follows-
.box:hover{
            transform: translateX(123px);
            transform: translateY(123px);
}
We can also write them in the same line as follows-

transform: translate(123px, 123px);
So I hope that you must have understood the concept of transform property. You can now create your own awesome websites and practice more to get perfect.