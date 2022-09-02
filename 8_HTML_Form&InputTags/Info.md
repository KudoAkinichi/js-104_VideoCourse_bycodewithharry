https://www.codewithharry.com/videos/web-development-in-hindi-8/ (tuto 8)


HTML Tutorial: Forms & Input Tags | Web Development Tutorials #8
This HTML tutorial involves the learning of forms and Input tags used in HTML. We are going to start by making a new HTML file as “tut8.html” and adding a boilerplate through Emmet abbreviation. Forms are a very important part of HTML. It represents the document section containing interactive controls for submitting information.

Whenever we add a <form> tag in the HTML, it is going to ask for some action for submitting that particular form in the backend for future reference. So, for now, we will write it as backend.php. All the data submitted in a form will be stored automatically in the backend “backend.php” after submitting it.

The template will look like-

<form action= “backend.php”>
Then comes the <input>tags which are present inside the form, where the user provides the input. These inputs can be of any type whether text, button, checkbox, date, time, etc. Input Tags are used to create interactive controls for web-based forms in order to accept data from the user. 

The <span> is an in-line element and <div> is a block element. Which means, if we use two separate div tags for different inputs, then all the inputs will come on different lines. We will learn about the span and div in detail in the upcoming tutorial. Till then we will use the <br> tags for breaking a line.

To get the input as text, the syntax is-
<input type= “text”>
To get the input type as an email in the form, the syntax is-
<div>
            Email: <input type="email" name="myEmail">
</div>
The name here is used so that the backend can recognize the tag that we are using.

To get the submit button in the form, the syntax is-
<div>
          <input type= “submit” value= “submit now”>
</div>
We can also add date and time in the form. To add these, the general syntax is-
<div>
         <input type= “date” name= ”myDate” id= “”>
</div>
It will give the complete date form in the format of “dd/mm/yyyy”.\

To add any numeric text in the HTML form, the syntax is-
<div>
             Number: <input type= “number” name “myNumber”>
</div>
While filling several online forms, you must have seen the radio buttons and checkboxes in the form. Radio buttons are such buttons that allows to select any one of the following options amongst all. For example, while selecting the gender, we can only select either male or female. Whereas the checkbox allows selecting the multiple options available. The example of both the formats are as follows-

For checkbox-
 <div>
            Are you eligible?: <input type="checkbox" name="myEligibility" checked>
 </div>
For Radio buttons-
<div>
            Gender: Male <input type="radio" name="myGender"> Female <input type="radio" name="myGender">
            Other <input type="radio" name="myGender">
 </div>
To reset all the information, entered in the form, we take the help of a reset button. To get the reset button, we have to write-
<div>
            Input type= “reset” value= “Reset Now”
</div>
After inserting all these input tags, our form will look like-


These are some of the examples of basic input tags used inside the form in the HTML. Apart from these, there are numerous more input tags available, but you need not to learn all these at once. You can always take help of references available. And one more advice, never try to grasp all things at once. Practice makes a man perfect.