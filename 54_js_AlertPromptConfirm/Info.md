https://www.codewithharry.com/videos/web-development-in-hindi-54/


JavaScript Tutorial: Interaction - Alert, Prompt, Confirm | Web Development Tutorials #54
In this tutorial, we will learn how to make the webpage more interactive and decide how the user will interact with the page. These things will be done by Alert, Prompt, and Confirm. As always, we will start by making a new file as tut54.html and add the boilerplate to get the basic HTML template. Then give the title as Interaction using Alert, confirm, and prompt under the <title> tag.

Let us start by understanding what is an alert() function. The alert() method displays an alert box with a specified message and an OK button. It is often used to make sure information comes through to the user. The alert box takes the focus away from the current window and forces the browser and forces the browser to read the message. Do not overuse this method, as it prevents the user from accessing other parts of the page until the box is closed. 
If we write as follows-

// Alert in in-browser JavaScript - Does not return anything
alert("This is a message");
We will see the output as follows when we reload the page-



Alert does not return anything. To move further we have to click OK.

Now let us see what is a prompt() function. The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want to input a value before entering a page. When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null.

If we write as follows- 

// Prompt in JS
let name = prompt("What is your name?", "Guest");
console.log(name);
If we reload the page, we will get the screen as follows-



If we write “harry” in the dialog box and click OK, we will see “harry” is printed in the console tab.

Moving on, next we will see what is confirm() function. The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used if you want the user to verify or accept something. The confirm box takes the focus away from the current window and forces the browser to read the message.  The confirm() method returns true if the user clicked "OK", and false otherwise. This method is only used if we want to double-check any task performed by the user.
If we write as follows-

// Confirm in JS
        let deletePost = confirm("Do you really want to delete this post?");
        
        // console.log(deletePost);
        if(deletePost){
            // Code to delete the post
            console.log("Your post has been deleted successfully");
        }
        else{
            // Code to cancel deletion of the post
            console.log("Your post has not been deleted");
        }
If we reload the page, we will the dialog box appearing as follows-



If we click OK, we will get the first output, otherwise the second output.

I hope you must have got an idea about how to interact on the webpage. Stay with the tutorials, to learn more. Till then keep practicing.
        