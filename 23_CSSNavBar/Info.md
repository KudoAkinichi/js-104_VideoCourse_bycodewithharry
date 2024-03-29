https://www.codewithharry.com/videos/web-development-in-hindi-23/


CSS Tutorial: Creating a Navigation Menu | Web Development Tutorials #23
We have discussed various things till now in the CSS from adjusting the borders to styling the links. Here, we are going to see what are Navigation Bars in a website and how to apply them.

We will start by making a new file called tut23.html and add the boilerplate to obtain the basic HTML code. Give the title as Navigation in the <title> tag under the head section.

A navigation bar is usually a list of links, so using the <ul> and <li> elements can help in obtaining it. The code for the following will be as follows-

 <header>
        <nav class="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact us</a></li>
                <div class="search">
                    <input type="text" name="search" id="search" placeholder="Search this website">
                </div>
            </ul>
        </nav>
    </header>
We will now target the navbar class and apply some CSS to make it look more attractive.

First we will change the color of the navigation bar and make its ends circular.

.navbar{
            background-color: black;
            border-radius: 30px;
          }
In the next step, we will make all the nav elements come in single horizontal line

  .navbar li{
            float:left;
            list-style: none; 
            margin: 13px 20px;
        }
The list-style property is used to remove all the bulleted points in the navigation items.

After writing the above code, the background gets removed as it has been overflown by the parent element. To avoid this, we have to write-

.navbar ul{
            overflow: auto;
        }
Now we will add padding to the all the elements present in the navbar-

.navbar li a{
            padding: 3px 3px;
            text-decoration: none;
            color: white;
        }
We can also add the search bar in the navigation menu. To do this, we have to write-

<div class="search">
                    <input type="text" name="search" id="search" placeholder="Search this website">
                </div>
 This will create a search bar in the navigation menu. We can style the search tag by-

 .search{
            float: right;
            color: white;
            padding: 12px 75px;
        }
We can style the menu available in the navigation bar as-

  .navbar input{
            border: 2px solid black;
            border-radius: 14px;
            padding: 3px 17px;
            width: 129px;
        }
Within the ‘navbar’, for styling the input tag we can include the border, border-radius, padding, and width as shown above. We can also adjust the padding and other properties using the inspect element on the web page as per your requirements.




We can also add the hover effect in all the li’s. It means whenever we place the pointer on those elements it should change its color.

.navbar li a:hover{
            color: red
        }
We have set the color to red and now when you hover over the ‘Home’, ‘About’, ‘Services’, ‘Contact-us’,  it will change its color to red. You can also add ‘padding-top’ to adjust the elements.

I hope you must have understood how to add the navigation bar into the website and make it look according to yourself. To learn more, stay with the tutorials and keep practicing the things taught till now.