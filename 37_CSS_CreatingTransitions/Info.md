https://www.codewithharry.com/videos/web-development-in-hindi-37/


CSS Tutorial: Creating Transitions in CSS | Web Development Tutorials #37
In the last tutorial, we have learned about keyframes and animations to design the animation. Here we are going to learn what are transitions and how to create them. CSS transitions allow us to change property values smoothly, over a given duration. It provides a way to control animation speed when changing CSS properties.

Make a new file as tut37.html and add the boilerplate to get the basic HTML code. Give the title as CSS Transitions in the <title> tag. Let us now add some HTML code in the <body> tag to get started.

<body>
    <h3>This is CSS Transition Tutorial</h3>
    <div class="container">
        <div id="box">
            This is my box
        </div>
    </div>
</body>
Now we will add some CSS in the box to see some of the transitions effects- 

body{
        background-color: black;
    }
#box{
        display: flex;
        height: 200px;
        width: 200px;
        background-color: red;
        justify-content: center;
        align-items: center;
}
The align-items as center is used here to place the text inside the box in the center as shown below. 



Now we will make a hover effect which will change the properties when the mouse pointer will hover on the box.

    #box:hover{
        background-color: green;
}
Let us now discuss some of the transition properties-

Transition-property- It is used to decide which transition property we want to use. For example, if we want to transition background color, then we have to write-
transition-property: background-color;
Transition-duration- If we want to see the duration which is required to make the change, we can use this property. For example, if we set transition duration as 1seconds, then the transition will happen in 1 second only.
transition-duration: 1s;
Transition-timing-function- This property is used to decide the speed of transition from beginning to end. These are of three types as follows-
ease-in
After applying this, the animation will start slowly and becomes fast towards the end.

ease-out
After applying this, the animation will begin fastly and become slow towards the end.

ease-in-out
After applying this, the animation will start slowly, then become fast in the midway, and ends slowly.

transition-timing-function: ease-in-out;
Transition-delay- It is that particular time interval after which the transition effect will start. For example, if we set it as 2s, then the transition effect will start after 2 seconds only.
transition-delay: 2s;
Also, there is one short hand property that allows us to write all these transitions in a single line. It can be written as follows-

transition: background-color 1s ease-in-out 2s;
If we want all the properties should go under transition, then we can write-

transition: all 1s ease-in-out 2s;
Now, we can add some more properties in the hover effect as follows-

#box:hover{
        background-color: green;
        height: 400px;
        width: 400px;
        border-radius: 100px;
        font-size: 45px;
    }
Here, all the properties will get changed accordingly and you witness some good transitions. All those properties that can change their values like colors, can show different transition properties. You can try different such properties and view the effects of these transitions. 