https://www.codewithharry.com/videos/web-development-in-hindi-34/


CSS Tutorial: Box Shadow and Text Shadow | Web Development Tutorials #34
So far in these tutorials, we have discussed many projects and designing of the website through HTML and CSS. Now, we are going to learn about Box Shadow and Text Shadow. As usual, make a new file as tut34.html and then add the basic boilerplate. Give the title as Box Shadow and Text Shadow in the <title> tag.

The box-shadow CSS property adds shadow effects around an element’s frame. We can set multiple effects separated by commas. It is described by X and Y offsets relative to the element, blur and spread radius, and colour. The text-shadow CSS property adds a shadow to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. It is also described by some combination of X and Y offsets from the element, blur radius, and colour.

We will start by writing our HTML code. Here we will make three divs with the class as a card. So the code will be as follows- 

<body>
    <div class="container">
        <div class="card" id="card-1">
           <h2>This is C++ Course</h2>
           <p>I have started C++ course which does not mean that we will stop this course. We will continue this course to completion. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium, doloremque enim repellat impedit autem nostrum facilis odio omnis optio voluptates beatae mollitia temporibus voluptas consequuntur harum animi totam molestiae labore architecto ratione qui!</p>
        </div>
        <div class="card" id="card-2">
            <h2>This is HTML Course</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat doloribus molestiae velit ipsum, aliquam officia ratione excepturi in officiis, incidunt quo est pariatur tempore ex, distinctio nostrum! Sint non doloribus rem obcaecati sunt.</p>
        </div>
        <div class="card" id="card-3">
           <h2>Card3</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur molestiae, placeat quas perferendis quibusdam atque omnis distinctio obcaecati dolor, tempora unde deserunt iure nam. Iste labore eveniet esse deserunt?</p>
        </div>
    </div>
</body>
We will then add the margin, padding and background image to the class- .card as follows-

.card{
    padding: 23px 12px;
    margin: 23px 12px;
    background-color: burlywood;
}
Our page will look as follows-




Now let us understand how to apply the box-shadow effect in the CSS. The basic syntax is as-

box-shadow: 10px 13px green;
Now the boxes inside the webpage will appear as-



If we write the above values in the negative, the shadow will move towards up. In the same way, we can apply the blur-radius property to the boxes. This property is used to make the border blur. The other property is spread-radius. It is used to spread the color around the box. To make all these changes inside the box, we can use the inset property as follows-

box-shadow: inset 3px 5px green

  box-shadow: inset 3px 5px green;
Now let us see how to use text-shadow. For this, we will make the changes in the heading tag as follows-

.card h2{
      text-shadow: 3px 4px red;
}
By writing this, you will see the changes as follows-



We can use the negative values here also to see the changes towards the upside. All the properties like blur-radius and spread-radius can also be used here.

So, I believe you have understood the concepts of box and text shadows. You can try different effects and analyze the changes accordingly. Till then, stay connected with the tutorial.


