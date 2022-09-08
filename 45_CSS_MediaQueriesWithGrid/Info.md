https://www.codewithharry.com/videos/web-development-in-hindi-45/


Using Media Queries with CSS Grid | Web Development Tutorials #45
Using Media Queries with CSS Grid
In this tutorial, we will learn how to make the use of media queries in the grid layouts to make a website responsive. Start by making a new file as tut45.html and add an instant boilerplate to get the basic HTML code. Give the title as CSS Grid + Media Queries under the <title> section.

We will use the concept of media queries which we have already discussed in the previous project. After applying the media queries, we will check whether those are applicable or not by adding different colors as follows-

@media only screen and (max-width:300px) {
        body {
            background-color: red;
        }
@media only screen and (min-width: 300px) and (max-width:500px) {
        body {
            background-color: blue;
        }
@media (min-width: 500px) and (max-width:800px) {
        body {
            background-color: yellow;
        }
@media (min-width: 800px) {
        body {
            background-color: green;
        }
    }
The result of the above code will be, the color of the screen will automatically change depending upon the screen size. It means the media queries are working.

Now we will add the HTML code to get started as follows-

<body>
    <div class="container ">
        <nav class="bdr">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span> 
        </nav>
        <section class="bdr">
            <h2>Learn CSS in hindi</h2>
        </section>
        <aside class="bdr">
            <h1>More about us</h1>
        </aside>
    </div>
    <footer class="bdr">Copyright CodeWithHarry 2020</footer>
</body>
Now we will give the grid property to the container and a grid-gap to it as follows-

.container {
        display: grid;
        grid-gap: 1rem;
}
Also, we will give border, padding, and background color to it as shown below-

.bdr {
        border: 2px solid black;
        padding: 10px 23px;
        background-color: wheat;
    }
The result will look as follows-



Now we will add the grid-template-area property to the container and define the property grid area to nav, section, aside, and footer as follows-

grid-template-areas:
            'navbar navbar navbar navbar'
            'section section section aside'
            'footer footer footer footer ';
nav {
        grid-area: navbar;
    }
    section {
        grid-area: section;
    }
    aside {
        grid-area: aside;
    }
    footer {
        grid-area: footer;
        text-align: center;
    }

The result will now look as follows-



Now to make it responsive, we have to modify the container when the website is between 500px to 800px as follows-

.container {
            grid-template-areas:
                'navbar navbar navbar navbar'
                'section section section section'
                'aside aside aside aside'
                'footer footer footer footer ';
        }
Now when the screen size goes between 300px to 500px, we have to again modify the container to make it responsive as follows-

.container {
            grid-template-areas:
                'navbar navbar navbar navbar'
                'section section section section'
                'aside aside aside aside'
                'footer footer footer footer ';
        }
If we want to remove the aside tag when the screen size is between 300-500 pixels, we can set the property display as none as follows-

aside{
            display: none;
        }
With media queries, you are capable of building any website of your choice. Therefore, you should practice more these media queries and build your own professional website to get command over.
