https://www.codewithharry.com/videos/web-development-in-hindi-40/

CSS Grid: Introduction & Creating A Basic Grid | Web Development Tutorials #40
CSS Grid- Introduction and Creating a Basic Grid
Here, we are going to learn about CSS grids and how to make them. In the past tutorials, we had discussed many properties like layouts and flexboxes. The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning. 

We will start by making a new file as tut39.html and then add an instant boilerplate to get the basic HTML code. Then give the title as CSS Grid Tutorials under the <title> tag. CSS grids are the display properties that allow us to transform any box into the grid. The main difference between flexbox and grid is, in flexbox, we can either move the box in horizontal or vertical directions but in the grid system, we can make the two-dimensional grid systems as follows-




Let us write our HTML code to get started. We will create nine divs inside the container as follows-

<body>
    <div class="container">
        <div class="item">This is Item-1</div>
        <div class="item">This is Item-2</div>
        <div class="item">This is Item-3</div>
        <div class="item">This is Item-4</div>
        <div class="item">This is Item-5</div>
        <div class="item">This is Item-6</div>
        <div class="item">This is Item-7</div>
        <div class="item">This is Item-8</div>
        <div class="item">This is Item-9</div>
    </div>
</body>
Now we have to initialize the grid and make all its components act in two-dimensional layout. For this, we have to write-

.container{
        display: grid;
}
By writing the above code, we mean to say that all the things inside the container will now behave like a grid. The grid system should not be considered same as table because table is just a normal combination of rows and columns whereas grid is a full layout system.

Now we can define our items through CSS as follows-

.item{
          height: 100px;
          width: 100px;
          background-color: red;
          margin: 3px;
}
The output will look as follows-



If we add the below code in the container as follows-

grid-template-columns: 300px 100px 100px;

It will give the output as-



But if we want that the first box should get 300px, the second 100px and the third one should be set as auto. Then we can write-

grid-template-columns: 300px 100px auto;
We can also write it using fr units as shown below-

grid-template-columns: 1fr 4fr 1fr;
The above code means from the whole width, give 1 part to the first item, 4 parts to the second item, and again 1 part to the last item. The result will look as follows-



However, if there are many items to define, then we can use this code-

grid-template-columns: repeat(3, auto);
It will assign the properties depending upon the values provided.

In this tutorial, we have discussed how to make grids. From the next tutorials, we will learn the spanning of grids and how to merge them. Also, we will learn how to make them responsive using media queries. Till then stay with the tutorials.