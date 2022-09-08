https://www.codewithharry.com/videos/web-development-in-hindi-44/


CSS Grid: Creating Layouts Using Grid Template Area | Web Development Tutorials #44
CSS Grid- Creating Layouts Using Grid Template Area
In the last tutorial of CSS grids, we have seen how to make various layouts using the grid system. Here we will understand how to create different layouts using the grid template area.

Start by making a new file as tut44.html and then add an instant boilerplate to get the basic HTML code to begin with. Then give the title as CSS Grid under the <title> tag. Now let us understand what are grid template areas. To get started, we will add classes container and items as follows-

<body>
    <div class="container">
        <div class="item">Item-1</div>
        <div class="item">Item-2</div>
        <div class="item">Item-3</div>
        <div class="item">Item-4</div>
        <div class="item">Item-5</div>
        <div class="item">Item-6</div>
        <div class="item">Item-7</div>
        <div class="item">Item-8</div>
        <div class="item">Item-9</div>
        <div class="item">Item-10</div>
        <div class="item">Item-11</div>
        <div class="item">Item-12</div>
        <div class="item">Item-13</div>
        <div class="item">Item-14</div>
    </div>
</body>
Now we have to customize our container and items class by adding some CSS to it as follows-

container{
        display: grid;
        grid-gap: 1rem;
}
.item{
        background-color: yellow;
        border: 3px solid black;
        padding: 12px 23px;
}
The result will look as follows-



 


To understand better the concept of grid template areas, we can create new divs under the container class with id navbar, section, and aside as follows-

<div class= “container”>
          <div id= “navbar” class= “item”></div>
          <div id= “section” class= “item”></div>
          <div id= “section” class= “item”></div>
</div>
Now we can add CSS to all these three id’s as follows-

#navbar{
        grid-area: navbar;
    }
    #section{
        grid-area: section;
    }
    #aside{
        grid-area: aside;
    }
Till now only half of the work is completed. To understand completely about the grid template areas, we simply have to apply some CSS in the container. We simply have to add a matrix in the grid with some rows or columns. A row should contain the same number of columns as follows-

.container{
        display: grid;
        grid-gap: 1rem;
        grid-template-areas: 
        'navbar navbar navbar navbar' 
        'section section section aside'
}
Now the result of the above code will look as follows-



To create very simple websites, grids are highly recommendable and they can benefit us in lot of other things as well. For example, if we want to create a footer on the website, it can be easily done through grids as follows-  

<footer class="item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quo libero cumque.</footer>
To add CSS, we can write-

footer{
        grid-area: footer;
    }
We also have to update the container with 4 footers as follows-

.container{
        display: grid;
        grid-gap: 1rem;
        grid-template-areas: 
        'navbar navbar navbar navbar' 
        'section section section aside'
        'footer footer footer footer ';
    }
CSS Grids is really a professional tool that minimizes our work. Therefore, you can command yourself over this by practicing and use it in making different layouts or sub layouts on the website.