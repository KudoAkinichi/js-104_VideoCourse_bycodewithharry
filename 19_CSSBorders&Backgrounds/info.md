https://www.codewithharry.com/videos/web-development-in-hindi-19/


CSS Tutorial: Borders and Backgrounds | Web Development Tutorials #19
Previously, we have seen about colors in CSS. In this tutorial, we are going to understand some other CSS properties like height, width, borders, and backgrounds.

Create a new file named tut19.html and add an instant boilerplate as usual. Give the title as Height, width, borders and backgrounds in the <title> tag under the head section.

Our basic HTML code goes like this -

<body>
    <h3>This is heading</h3>
    <p id="firstPara">This is a paragraph</p>

    <h3>This is second heading</h3>
    <p id="secondPara">This is my second paragraph</p>

    <h3>This is third heading</h3>
    <p id="thirdPara">This is my third paragraph</p>
</body>
Let us start by making some changes in the first paragraph. If we write the code as -

 #firstPara{
            background-color: red;
            height: 100px;
            width:455px;
            border: 4px solid green;
            /* border-width: 4px;
            border-color: green;
            border-style: solid;  */
            border-radius: 11px;
        }
We will see that the background of the text, will change to red with a height of 100px. Talking about its width, it will also be increased by 455px. Talking about border, we can decide its width, type, color. In the above example we will see a 4px-solid and green color border around the text. Border-radius is used to make the ends of the border curvy. All the changes, you made till now, will look like this -



Now if the condition arises that you want to give a border only at one end, then what will you do. Let us understand with an example -

#secondPara{
            background-color: rgb(58, 243, 98);
            height: 100px;
            width:455px; 
            border-top: 2px solid rgb(231, 22, 231);
            border-right: 2px solid rgb(18, 10, 133);
            border-bottom: 2px solid rgba(9, 144, 27, 0.774);
            border-left: 2px solid rgb(156, 42, 13);
            border-top-left-radius: 4px;
            border-top-right-radius: 14px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 24px;
        }
If we want to change the properties of border on the top, it can be done with border-top. Likewise, we can also change the other dimensions with the help of border-right, border- bottom, and border-left as shown in the example. In the same way, we can modify different ends of border with different properties. For example, we can write ­border-top-left-radius as 4px, border-top-right-radius as 14px, border-bottom-left-radius as 8px, and border-bottom-right-radius as 24px. All the changes made above, will be shown as-



Now what if, if you want to add a background image behind the text that you have written. Let us understand this with the code -

 #thirdPara{
            height: 500px;
            width:455px; 
            background-image: url('https://codewithharry.com/static/common/img/photo.png');
            border: 2px solid red;
            background-repeat: no-repeat; /* repeat-x and repeat-y will make it repeat on x and y axis */
            /* background-position: 192px 34px; */
            background-position: center center;
            /* background-position: bottom right; */
            /* background-position: top center; */ 
          }
There are two methods for adding a background image. Firstly, you can add directly by adding an URL of the image from website. Secondly, if you are having the files on your local computer, you can directly copy the path of the image. Background position is used to align the image at different positions as per the instructions given. You can see the changes made below-



So, I believe you must understood the concepts of different other properties related to borders and colors. You can try out different other combinations of these properties to get better knowledge.