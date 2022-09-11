// Alert in in-browser JavaScript - Does not return anything
        // alert("This is a message"); 

        // Prompt in JS
        // let name = prompt("What is your name?", "Guest");
        // console.log(name);

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
        let age=prompt("What is your age?","age");
            if (age>=16){
                console.log("you are ready to enter the anime world!!")
            }
            else{
                console.log("Watch Shinchan or doraemon lmao")
                
            }