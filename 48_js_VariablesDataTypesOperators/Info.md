https://www.codewithharry.com/videos/web-development-in-hindi-48/


Variables, Data Types and Operators in JavaScript | Web Development Tutorials #48
 

From the last tutorials, we are discussing JavaScript in detail. Moving on, here we will see what are variables in JavaScript and how to create them. The JavaScript variables are the containers for storing data values. Make a new file as tut48.html and add an instant boilerplate to get the basic HTML code.

To understand it, initially, we have to add some HTML code to get started as follows-

<body>
    <div class="container">
        <h1>This is a heading</h1>

        <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque laudantium vero tenetur repellendus consequuntur incidunt consectetur deleniti, reprehenderit dolores reiciendis aperiam ducimus aliquid, fugiat ipsum, corporis praesentium quibusdam exercitationem ex unde quae libero odio tempora. Voluptatibus odio molestiae esse unde quibusdam fuga accusantium facere quae, eum error asperiores itaque hic tempora temporibus illo vitae provident ad debitis libero dolorum dignissimos corporis dolore. Quia maxime quidem velit?</p>
        </div>
    </div>
</body>
The result of the HTML code will look as follows-



As discussed earlier, variables are the data that stores value. Therefore, in the below example a and b are the variables that store integer and String values respectively.

var a = 78;
var b = "Harry";
To see the output, we have to write-

console.log(a);
console.log(b);
The result of both the variables will be displayed in the console tab of the browser. These types of variables are known as dynamic typing as you do not require to identify the data type.

If you are a web developer do not deep dive into the knowledge of core programming concepts because it can divert you from becoming a successful web developer. Therefore, it is recommended initially, do not get in the concepts of Data Structures or OOPS. Once you get the basic command over the JavaScript then you can move further.

Let us now understand the operators in JavaScript. There are two types of operators present in JavaScript- Binary Operators and Unary Operators. Unary Operators work only on 1 operand. For example, 3+4. On the other hand, Binary operators work only on 2 operands. For example, x= x+6. Here ‘=’ and ‘+’ are two operands.

Let us now understand different types of operators with the help of examples-

var num1 = 2;
var num2 = 9;

        // Arithmetic operators in action in JavaScript
        console.log("The value of num1 + num2 is "+ (num1 + num2));
        console.log("The value of num1 - num2 is "+ (num1 - num2));
        console.log("The value of num1 * num2 is "+ (num1 * num2));
        console.log("The value of num1 / num2 is "+ (num1 / num2));
        console.log("The value of num1 ** num2 is "+ (num1 ** num2));
        console.log("The value of num1++ is "+ (num1++));
        console.log("The value of ++num1 is "+ (++num1));
        console.log("The value of num1-- is "+ (num1--));
        console.log("The value of --num1 is "+ (--num1));
The output of all the above arithmetic expressions is shown here-



I hope you must understand the basic expressions of how to use variables in JavaScript. In the next upcoming tutorials, we will see these operations on String variables. Till then stay with the tutorials and keep practicing.