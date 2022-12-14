https://www.codewithharry.com/videos/web-development-in-hindi-6/ (Source for tutorial_6)


HTML Tutorial: Img and Anchor tags | Web Development Tutorials #6
Till now, in this web development course, we have learned about basics so far. In this tutorial, we will learn “How to handle images and links in HTML".

Before we proceed let me tell you that, from this tutorial, we are going to increase our pace of learning because HTML is quite easy and to the point language and I don’t think you will face any problems if you will read and learn each and every tutorial wisely.

First, let’s set up the boilerplate. It is a basic HTML template with all the required fields. If you haven’t checked the previous tutorials, then it is suggested to go through them in the first place.

Now, let’s have a look at the anchor tag that basically helps us to handle links. 

In the body tag, if you type “a", anchor tag will appear. Just hit the enter key or if you want you can manually write the whole tag. Refer to the declaration below:

<a href=""> </a>
Here href is the attribute of anchor tag where you have to write the URL of the website or Link that you want to open. Next, you have to write the Keyword on which you want the user to click so that he will be redirected to the linked website. Refer to the example below:

<a href="https://google.com">Go to Google</a>
Now, the problem arises here is that as soon as we click on the keyword, the website will open on the same webpage but if in case you want to open the website in a new tab then you have to add a new attribute in the anchor tag I.e. “target". 

You might be confused between tag and attribute, then let me quickly tell you the difference between both. 

Tag is like a container that allows you to handle an element whereas attribute is the property that enhances that container makes it more convenient to use. 

To open a website in a new tab, you have to write something like this:

<a href="https://google.com" target = "_blank">Go to Google</a>
Through this anchor tag, you can also link internal webpages that are locally available in your directory. You just have to use the address of the internal webpages including the file name with its extension. 

For instance:

<a href="tut4.html" target = "_blank">Go to Google</a>
So, this was all in the anchor tag of HTML now let’s move to the next topic I.e. handling Images in HTML. 

In order to insert an image in a webpage, you have to use the img tag. 

An img tag generally have two basic attributes “src" and “alt".

<img src="" alt="">
Here “src" is the field where you have to insert the URL or address of the image and the “alt" attribute is a field that will display to users if their browser fails to load the image. 

In the “alt" tag, we generally input a keyword of the image that can define the image in case the user can’t see the image. 

For instance:

<img src="https://source.unsplash.com/random" alt= "Error loading image">
Here a random image will be loaded because this URL stores multiple images and any one of them gets reloaded every time we refresh the webpage. 

Apart from this, let's see another example where we can adjust the height and width of the image using the URL only. Well, this is not something that we can do in every URL. Here we can do it because the developers of the website have created this URL accordingly. 

For instance:

<img src="https://source.unsplash.com/1600x900/?nature,water" alt= "Error loading image">
If you want to manipulate the dimensions of the images, you can use the “height" and “width" attribute of img tag. Though it is not recommended to manipulate the dimension using these attributes, we will use CSS to alter the design accordingly. Refer to the illustration below:

<img src="https://source.unsplash.com/1600x900/?nature,water" alt= "Error loading image" width = "233" height="34">
Here the image will be loaded as per the new dimensions.

This was all in this tutorial, don’t forget to check the previous tutorials for better understanding of web development using HTML. 