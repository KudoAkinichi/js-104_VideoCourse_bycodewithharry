https://www.codewithharry.com/videos/web-development-in-hindi-17/


CSS Tutorial: Fonts In CSS | Web Development Tutorials #17
CSS Tutorial: Fonts in CSS
In this tutorial, we are going to learn about different Fonts in CSS. They act as a backbone of the whole CSS. The CSS font properties define the font family, boldness, size, and the style of a text. As always, let us start the tutorial by making a new file named tut17.html and add an instant boilerplate. After this, give the title as CSS Fonts under the <title> tags in the <head> section.

<body>
    <h4>CSS Fonts</h4>
   <p>Lets play with <span>fonts</span>. It is very exciting</p>
</body>
This is a very basic code as an example to start playing around different fonts. In CSS, we have two types of fonts- web-safe fonts and web fonts. Web saved fonts are the fonts that come pre-installed with most of the operating systems, therefore, using these fonts you will never encounter any error. But on the other hand, some fonts are not shipped with the OS; so to use them, we need to import them from the web.

We can also use the technique of font stack. A font stack is a list of fonts that are listed in order of preference you would like them to appear in case some fonts are not loading. The example of this is shown below-

p {font-family:'Ubuntu', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;}
This list will be iterated until the specified font is not available in the system.

To see the whole list of web saved fonts, there is a very good website called CSS Font Stack. It provides the complete list of web saved fonts. Talking about web fonts, we can easily import them from Google. To import the code, there is no website better than Google Fonts. To use it, simply copy the style-sheet and add it to your code and update the font stack with the specific font you desire.

The next property is font size.
p { font-family: ‘Franklin Gothic Medium’, ‘Aerial Narrow’, Aerial, sans-serif;
      font-size: 33px;          
}
Font Size is used to set the size of a font. In the above example, we used our font size to be 33px. Pixel ‘px’ is the unit of the font size and it is 1/96th of an inch.

The next property is line-height. Line-height is the spacing between the fonts (current font and previous font).
p {font-family: ‘Franklin Gothic Medium’, ‘Aerial Narrow’, Aerial, sans-serif;
      font-size: 23px;          
      line-height: 1.8em;
 }
Next property is font-weight. The font weight property sets how thick or thin character in text should be displayed.
p{ font-family: ‘Franklin Gothic Medium’, ‘Aerial Narrow’, Aerial, sans-serif;
      font-size: 23px;          
      line-height: 1.8em;
      font-weight: bold;
}
There are various other font properties. Most of the important ones are covered in this tutorial. You can now test different other font properties as well. As a beginner, I would recommend not to learn all the CSS properties until you learn to make a simple website. You can take the help of references available anytime but for it, you should know the basics.