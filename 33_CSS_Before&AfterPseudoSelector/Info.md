https://www.codewithharry.com/videos/web-development-in-hindi-33/


CSS Tutorial: Before and After Pseudo Selectors | Web Development Tutorials #33
In the last tutorial, we have learned how to use different pseudo-selectors in our CSS. Here, we will see a special type of selectors which are known as before and after pseudo selectors. Start by making a new file called tut33.html and the instant boilerplate. Then you can the title as before and after pseudo-selectors under the <title> tag.

Start by writing the basic HTML code as-

<body>
    <header>
        <nav class="navbar">
            <ul class="navigation">
                <li class="item">Home</li>
                <li class="item">About</li>
                <li class="item">Services</li>
                <li class="item">Contact Us</li>
            </ul>
        </nav>
    </header>
        <section>
            <h1> Welcome to Coding World</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident error ratione doloribus sed dolorum,
                ipsum cumque reprehenderit dignissimos architecto veniam optio sint aliquam consectetur corrupti vero
                similique velit. Possimus eum consequatur delectus quia magni.</p>
        </section>
       </body>
By running the above code, we will get a very simple outlet of a website as shown below-



We will then add some styling in the body tag of the website-

    body {
            margin: 0;
            padding: 0;
            background-color: black;
            color: white;
        }
To make the contents appear in a single line, we can try by setting the display property as flex.

.navigation {
           font-family: 'Bree Serif', serif;
            font-size: 20px;
            display: flex;
        }
We can then style our list items and add some padding to it-

 li {
            list-style: none;
            padding: 20px 23px;
        }
Now let us discuss what are before and after pseudo selectors. The :: before pseudo-element can be used to insert some content before the content of an element. The ::after pseudo-element can be used to insert some content after the content of an element.

We can style the section tag in our HTML with the help of flexbox property and also make some other changes as follows-

section {
            height: 344px;
            font-family: 'Bree Serif', serif;
            margin: 3px 230px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
Then increase the font size of the heading by 4 rems and take the content of the paragraph in the center as follows-

 h1 {
            font-size: 4rem;
        }

        p {
            text-align: center;
        }
So our page will look as follows-



We can also select the fonts of our choice from Google Fonts. Now place the background image on the website. You can select different background images from Unsplash. You will be able to generate random background images from here. You can place the URL of the image in the <body> tag while styling. But we will notice that the image generated on our website does cover the whole page and make it difficult in reading the text. 


To adjust this problem, we can add content before the header. In that content, we can add a background image, makes its position as absolute, and set its width and height as follows-

  header::before{
            background: url('https://source.unsplash.com/collection/190727/1600x900') no-repeat center center/cover;
            content: "";
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.3;
        }
z-index property used here is for making the contents appear above the background image. We can make the image light by changing its opacity. So our final website will look as follows-



In this tutorial, we have learned how with the help of before and after pseudo selectors, we can change the opacity of the background image. For learning more about different techniques, stay tunes with the tutorials.