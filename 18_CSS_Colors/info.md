https://www.codewithharry.com/videos/web-development-in-hindi-18/


CSS Tutorial: Colors In CSS | Web Development Tutorials #18
CSS Tutorial: Colors in CSS
In this tutorial, we are going to learn about colours in CSS. Start by making a new file as tut18.html and add an instant boilerplate through Emmet abbreviation. Give the title as Colors in CSS in <title> tag under the head section. The basic code for our example is-

<body>
    <h2>This is my first box</h2>
    <p id="firstPara">This is a paragraph from first box</p>

    <h2>This is my first box</h2>
    <p id="secondPara">This is a paragraph from second box</p>

    <h2>This is my first box</h2>
    <p id="thirdPara">This is a paragraph from third box</p>
</body>
The first method of defining the colour in the CSS is directly writing the particular colour name. Its example is
#firstPara{
            color:blueviolet; /* Color by name */
        }
Using the above code, we have changed the colour of our paragraph to blue-violet. 



2. The second way of defining colour is with the help of ‘RGB,’ as shown below. The RGB colour range varies from 0 to 255.



 

Here, we treat RGB as a function and pass the values in that function for red, green and blue. As we give different values in the function, it creates various combinations of different colours combined with red, green, and blue. 

3. The third way is by giving hex colours. However, it is very rarely used.

 #thirdPara{
            color: white;
            background-color: #ff4532; /* Color by hex value */
        }


In the above code, we can see the “#” character. It is used to give the hexadecimal value of any colour. You will find various references on the Internet to generate the hexadecimal values of different colours.

Let us now understand the working of hex colours. Hex colour is also a kind of RGB. For example, let’s take one hex value as ‘#60DCA4’, here 60 is red of RGB, DC is green of RGB, and A4 is the blue of RGB. The same value in RGB for this colour would be something (96, 220,164).

Colour picker is one of the most interesting things that you will find in VS code by using any of the colour types. You can select any of the colours from the colour picker, and the values will automatically get set by the colour picker for that particular colour type.

The background colour also works the same way as the text colour works, for example:

#secondPara{ 
     background-color: rgb(0,0,0);
  }
Wherever the colour property is used in CSS, you can apply any of the above three methods. Certain more properties use colour, like border property and background colour, which we will learn step by step as we move ahead in building professional websites. 