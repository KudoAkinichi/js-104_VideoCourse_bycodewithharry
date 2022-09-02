https://www.codewithharry.com/videos/web-development-in-hindi-11/


HTML Tutorial: HTML Entities | Web Development Tutorials #11
HTML Tutorial- HTML Entities
This tutorial is about different Entities used in the HTML. An entity is a piece of text (“string”) that begins with an ‘&’ and ends with a ‘;’. These are frequently used to display reserved characters, and invisible characters. As usual, let us begin the tutorial by making a new HTML file as tut11.html and add an instant boilerplate to get the basic template of HTML. Give the title as HTML Entities in the <title> tag.

Try to understand with the below example. If we write the code as

<div class= “container”>
            <p>This is a Paragraph</p>
</div>
<div class= “container”>
          <p>This is another Paragraph</p>
</div>
If we add some spaces in between these texts then what will you expect?



You will normally say that all the extra spaces will reflect back on the webpage. But it is not so. Because HTML treats all the extra spaces as a single space only and automatically removes all of them. Therefore, if you want to use extra spaces or any special characters, then you have to use HTML entities. To get extra space we can use &nbsp (non-breaking space) after that particular text. For example-

<div class= “container”>
          <p>This is another &nbsp Paragraph</p>
</div>
By writing this way, we can create 1 extra space after the word another. By adding five &nbsp, we can get 5 extra spaces. However, I do not recommend using this method because it looks unprofessional. We will learn to create extra spaces in CSS with the help of margin, padding, or selectors that looks more professional. 




Entities are also used to write some special characters that you cannot write from keyboards and also those words that are reserved in HTML. For example, if we want <p> to appear in the result, then it is not possible without the help of entities. 

<div class= “container”>
          <p>This is another Paragraph<p></p>
</div>
By writing the above code, we will see that we cannot obtain the <p> in our result. Therefore, the solution for this is we can take the help of HTML entities. We have to write in this format-

<div class= “container”>
          <p>This is another Paragraph &lt;p&gt; </p>
</div>
There is a list of different reserved characters and hundreds of special characters that you cannot write without entities. There is no need to learn all those entities available. You are always free to take the help of various references available.

So, this is all for this tutorial and I hope you have got the basic knowledge about HTML entities. If you still have any queries, feel free to ask.