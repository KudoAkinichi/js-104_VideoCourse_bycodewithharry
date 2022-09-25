Backend Tutorial: Using raw HTML in Pug template engine | Web Development Tutorials #73
In this tutorial, we will learn how to use pug and how to write normal HTML using Pug. As we have seen in the previous tutorial to make an express app using pug, now we will simplify it further. Initially, the code goes as follows-

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
Now we will modify our endpoints as follows and then we will see how to use it through plain HTML.

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})
For writing the HTML code, we will open the pug file as an index.html and then start writing the HTML code as follows-

<body>
          <h1> This is heading</h1>
          <p>
          #{content}
          <!-- This is a plain html using pug →
          </p>
</body>
Now when we run the file and open the localhost server and then view the page source, we get the result as follows-




But the problem here arises is the output we are getting is in the form of a pug file, not in the HTML form. To do that, we have to use a pipe (|) icon as follows-

 <p> 
            | #{content} 
            | This is a plain html using pug 
        </p>
Now to include the CSS, we have to include the style tag with the following code-

style

        include ../static/style.css
Through this code, we have gone inside the static folder and then fetched the style.css file. Suppose we have to make a form and if anyone fills it, the data should be stored in a backend. The HTML code will be as follows-

<nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact Us</a></li>
        </ul>
    </nav>
<form action="/" method="post" id="contact">
            <input type="text" name="name" id="name" placeholder="Enter your name">
            <input type="text" name="age" id="age" placeholder="Enter your age">
            <input type="text" name="gender" id="gender" placeholder="Enter your gender">
            <textarea name="address" id="address" cols="30" rows="10" placeholder="Enter your address"></textarea>
            <textarea name="more" id="more" cols="30" rows="10" placeholder="More about you.."></textarea>
            <button class="btn">Submit</button>
        </form>
To add the CSS, we can write as follows-

*{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}

body::before{
    opacity: 0.5;
    content: "";
    width: 100%;
    height: 800px;
    z-index: -1;
    top: 0px;
    position: absolute;
    background: url('/static/bg.jpg') no-repeat center center;
}
nav{
    background-color: #302d2d;
    padding: 12px 
}

ul{
    display: flex;
    flex-direction: row;
}

li{
    list-style: none;
    padding: 3px 12px;
}

a{
    text-decoration: none;
    color: white;
    font-weight: bold;
}

h2{
    text-align: center;
    color: black;
}

.container{
margin: 35px 0px; 
}

input, textarea{
    display: block;
    padding: 3px;
    margin: 15px auto;
    width: 60%;
    outline: none;
    border: 2px solid black;
    border-radius: 5px;
}

.btn{
    margin: 4px auto;
    display: block;
    padding: 5px 12px;
    background: #302d2d;
    color: white;
    font-weight: bold;
    font-size: 15px;
    border: 2px solid black;
    border-radius: 9px;
    cursor: pointer;
    outline: none;
}

So the final website after loading will look as follows-



So, I hope you must have understood how to write a normal HTML file using Pug. In the upcoming tutorials, we will see how to store the information in the backend.