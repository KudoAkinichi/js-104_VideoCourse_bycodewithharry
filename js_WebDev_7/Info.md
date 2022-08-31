https://www.codewithharry.com/videos/web-development-in-hindi-7/ (Tutorial 7)


HTML Tutorial: Lists and Tables | Web Development Tutorials #7
HTML Tutorial: Lists and Tables
In this tutorial, we will work on the concepts of Lists and Tables in HTML. So, let us start by making a new file as tut.html and add the boilerplate to get the necessary HTML template. Give the title as Tables and Lists in <title> tag. 

The lists are basically of two types-

Ordered lists (ol)
<ol>

          <li>This is the first item of my unordered list</li>

</ol>
Unordered lists (ul)
<ul>

          <li>This is the first item if my unordered list</li>

</ul>
The difference between an ordered and an unordered list is that the ordered list displays the list in this format -

1.

2.

3.

….

On the other hand, the unordered lists display the list in the following format-

.
.
.
….



Both the lists have more than one attribute which we can write using the type command. For example, if we write:

<ol type= “I”>
 Then we will get the lists as I, II, III, and so on. In the same format, we can also get the lists as A, B, C, and so on.

This applies on unordered lists also. If we write

<ul type= “square”>
Then we will get a bulleted square instead of a circle. There are various other references available from which you can see all the attributes. There is no need to learn all these things. You will get perfect by practising.




HTML also allows the nesting of lists. It simply means we can add a list into another list.

 <ul type="circle">
        <li>This is first item of my unordered list</li>
        <li>This is second item of my unordered list</li>

        <ul>
            <li>Another one</li>
            <li>Another two</li>
            <li>Another three</li>
 </ul>