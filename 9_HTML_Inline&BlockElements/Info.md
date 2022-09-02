https://www.codewithharry.com/videos/web-development-in-hindi-9/

HTML Tutorial: Inline & Block Elements | Web Development Tutorials #9
In the last tutorial, we have discussed forms and input tags. Here, we are going to understand what are inline and block elements. Let us start this tutorial by making a new file as tut9.html and adding the basic boilerplate of HTML. Then put the title as “Inline and Block Elements” in the <title> tag.

Inline elements are those elements which only occupy the space bounded by the tags defining the element, instead of breaking the flow of element. On the other hand, block-level elements take up the entire space of its parent element. Let us understand this with an example-

If we write any text in the paragraph tag like this-

<p>This is a paragraph</p>

<p>This is also a paragraph</p>
OR

<p>This is a paragraph</p> <p>This is also a paragraph</p>



In both the above examples, we will see the output in both different lines, not in the same line. We want both the texts in the same line but it is not so. Can you think why?

It is because the paragraph tag is a block element. The Block element means that it will take the full width of a single line and does not allow any other content to fit in it. But, if we write both the texts between the <span> tags like-

<span>This is a paragraph</span> <span>This is also a paragraph</span>
Then we see that both the texts will appear in the same line. It is because the <span> tag is an inline element. It allows all the elements in the same line.

To understand it more, we can take the help of CSS by applying the border. However, you need not worry about the border as it is a part of CSS. I’m using this just for the case of an example. 

<p style= “border: 2px solid, red;”>This is a paragraph</p> <p style= “border: 2ox solid blue;”>This is also a paragraph</p>

<span style= “border: 2px solid red;”>This is a span</span> <span style = “border: 2px solid red;”>This is also a span</span>



The above example shows how inline elements will take only its portion of text whereas the block element will take the whole width of the line. You will understand it more with the help of different colours through CSS. Anchor <a> tags also behaves like an inline element. 

We have two different options of making our text appear in a single line. The first one is either with the help of CSS through borders or with the help of inline elements. As we have reached the end of this tutorial, I want you to find out whether li, em, div is inline or block elements. 

So, I believe till now you must have understood the major difference between Inline and Block elements. Stay with the course to learn more things in this complete web development Bootcamp.