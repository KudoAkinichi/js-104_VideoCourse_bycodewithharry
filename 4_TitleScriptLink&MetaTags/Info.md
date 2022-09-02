

HTML Tutorial: Title, Script, Link & Meta Tags | Web Development Tutorials #4

HTML Tutorial: Title, Script, Link, and Meta Tags

In the last tutorial, we have learned how the basic structure of a website looks like. In this HTML tutorial, we are going to learn about title, scripts, links, and Meta tags. We will make a new file as “tut4.html” and then use basic emmet abbreviation as told previously to get the boilerplate HTML template. The objective of this tutorial is to know completely about HTML heads tag and what these contain. 

The Meta Tags are used to define the Meta data in an HTML. They are mainly used in SEO (Search Engine Optimization) techniques which help any particular website to rank better in Google or different search engines. It simply boosts the ranking of a webpage to get more traffic on any website.

Image: https://api.codewithharry.com/media/videoSeriesFiles/courseFiles/web-development-in-hindi-4/base64.png

So let us understand various meta tags. 

--> <meta charset= “UTF-8”>
    - It simply means that the characters that are used will be of UTF-8. It declares the page’s character encoding. It should contain a standard IANA MIME name for character encodings. Moreover, authors are encouraged to use UTF-8. 

--> <meta name= “viewport” content= “width=device-width, initial-scale=1.0">
    - This tag is used to make your website responsive and adjust its width in such a way that it looks good in both PC or mobile. It helps in making the website mobile friendly also.
--> <meta http-equiv= “X-UA-Compatible” content= “ie=edge”>
    - It helps any particular website to open in the highest compatibility mode available. It is mostly for those who are still using Internet Explorer. Because there are still some people who have not upgraded their system and are still using the older versions.

https://api.codewithharry.com/media/videoSeriesFiles/courseFiles/web-development-in-hindi-4/base64_mp85zlw.png

To add descriptions and keywords on our website, we still use meta tags.
<meta name= “description” content = “This is a description”>
- To add a description, we have to write the above statement and write your own description in the content part.

<meta name= “keywords” content= “html tutorial, css tutorial”>
- Keywords are those special words through which a user reach any website. You can add the keywords in the content part of the tag.
 

If we want our website to be indexed in Google or other search engines and bots should follow all the links present on the website, then we have to write-
<meta name= “robots” content= “INDEX, FOLLOW”>

https://api.codewithharry.com/media/videoSeriesFiles/courseFiles/web-development-in-hindi-4/base64_tNEWnUV.png

To link our stylesheets named as “harry.css” in the HTML code, we have to write-

<link rel= “stylesheet” href= “harry.css”>
In the same way, as we have included CSS, we can also include a JavaScript file in <head> tag.

<script src = “harry.js”></script>
I believe you have understood what all things are present in the head tags of the HTML file. In the upcoming tutorials, we will understand the concept of body tag where we write the main content of the website. 