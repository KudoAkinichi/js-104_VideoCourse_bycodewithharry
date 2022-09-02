https://www.codewithharry.com/videos/web-development-in-hindi-20/


CSS Tutorial: CSS Box Model, Margin and Padding | Web Development Tutorials #20
In this tutorial, we are going to study the concept of the box model in CSS. The box model is a very important topic of CSS and if not understood properly, it can create a lot of confusion in the future. It is the basic framework of web development whether you are making a website using any other language such as Angular or React. The box model helps us to define the padding, border, and margin around an element. So from the above diagram we can see where all these things lie around the element. The element is in the center surrounded by padding, border and margin.

These parts can be explained as-

Content- The content of the box, where text and images appear.
Padding- It clears an area around the content. The padding is transparent.
Border- A border is one that covers the padding and content.
Margin- It clears an area outside the border. The margin is also transparent.


Let us understand more by writing CSS-

.container{
            background-color: rgb(231, 230, 241);
            border: 3px solid rgb(64, 6, 119);

            /* We can set margin/padding for  top, bottom, left and right like this */
            /* padding-top: 79px;
            padding-bottom: 79px;
            padding-left: 34px; 
            padding-right: 79px;*/

            /* margin-top: 3px;
            margin-bottom: 5px;
            margin-left: 34px;
            margin-right:5px ; */

            /* margin = top right bottom left;  */
            /* padding = top right bottom left;  */

            /* padding: 23px 56px 6px 78px;   */
            /* margin: 23px 56px 6px 78px;   */
        
            /* padding: y(top/bottom) x(left/right); */
            /* margin: y(top/bottom) x(left/right); */
            padding: 34px 19px;
            margin: 14px 19px;
            border-radius: 23px;
            width: 533px
        }
There is padding or margin shorthand for all directions. The first value is for top, 2nd value is for the bottom, 3rd value is for left and 4th value is for right.

padding: 23px 56px 6px 78px;  
margin: 23px 56px 6px 78px;   
There is another technique for using the shorthand technique if you want to give the same values for left/right and top/bottom. The first value is the same for both the top and bottom and the second value is the same for both left and right. The two values can be represented as x and y values.

padding: 23px 56px;
 

Border radius is used to apply an arc type shape in each corner of the border and its code is written as below:

padding: 23px 56px;
Let us now understand a property called ‘Box sizing’. On giving width to the element and after that applying padding in the container, the width also changes. It is because in the actual width of an element, margin is already been added into it. If you want this not to happen then you can use the property of ‘box-sizing’.

box-sizing: border-box;
Now if you change the padding then it will adjust the width according to the padding.

We can take the help of universal selector in the CSS to apply the property of box-sizing in all the elements available. It is denoted with a ‘*’.

* {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
So I believe the concept of CSS Box Model and Box Sizing is understood to you. To understand more deeply, you can try to change the values and see all the necessary changes.