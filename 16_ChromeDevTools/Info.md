https://www.codewithharry.com/videos/web-development-in-hindi-16/


CSS Tutorial: Using Chrome Developer Tools | Web Development Tutorials #16
Till now in this web development series tutorial, we have seen a lot of things. Here we are going to use the developer tools provide by chrome. As a beginner, I would highly recommend using a Chrome browser above all if there is not any specific reason.

Start by making a new file named tut16.html, and add the boilerplate. Give the title as Developer Tools in the <title> tag. Let us start by writing the simple code-

<style>

        p{

            color: purple;

            font-style: italic;

            background-color: rosybrown;

        }

        .bgPrimary{

            background-color: #82c2ff;

        }

    </style>

</head>

<body>

    <h4 class="bgPrimary">Developer tools tutorial</h4>

    <p>This is a tutorial for Chrome developer tools</p>

</body>
After running your code, if you will right-click anywhere in the browser then you will see an inspect element option. By clicking on it you will be able to see the original code. From here you can make some changes in the webpage and can observe it. However, it does not change the original code on your server. Developer Tools are used to make any changes into your code and see the instant effect on your web page. This change is not a permanent.

But if you like any change made in the developer tools, you can do the same in original file in VS code and refresh the page. That particular change will now reflect back permanently. Inspect Element allows us to make and view the changes in any of the websites present all over the world

I have explained that how these changes are only reflecting on your local server. When you will reload that page again, all the things will set back to their default set up. In this way, you can use the developer tools of chrome. 

User Agent Stylesheet

By default, chrome sets some property for some elements and store some default values in it. So the browser by default styles some element according to it and that styling is particularly known as user's agent style sheet. Basically it is showing the default value of browser that previously what changes were there and what changes you have made now on your page. There is also a console section where you can write JavaScript code. Sources section contains all the source codes that you have written. The most important thing in this tutorial was elements that we have already discussed. We can directly change our styles using CSS directly. 

Some tips while defining a color class:-

Do not directly use the name of the color as the class name instead use 

colorprimary 
colorsuccess
colorwarning
As writing these looks more professional and also helps in future to maintain our codes.

So, I believe you must have learned something about Developer Tools and how to use them. The more practicing and playing around Inspect Elements will help you in learning faster.