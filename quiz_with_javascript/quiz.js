
    var n = 0;
    var count = 0;
    var arr = ["ans1", "ans2", "ans3", "ans4", "ans5", "ans6", "ans7", "ans8", "ans9", "ans10"];

    function next_click(obj) {

        // checking if any values selected or not
        // var checked_answr = document.getElementsByName("value");

        // for (var i = 0; i < checked_answr.length; i++) {
        //     if (checked_answr[i].checked != true) {
        //         alert("please select an answer first!");
        //         break;
        //     }
        // }
        // end


        var result = document.querySelector('input[name="value"]:checked').value;

        for (i = n; i < 10; i++) {
            if (result == arr[i]) {
                count++;
            }
        }
        obj.parentNode.style.visibility = 'hidden';
        obj.parentNode.nextElementSibling.style.visibility = 'visible';
        n++;
    }

    function prev(obj) {
        
        n--;
        
        obj.parentNode.style.visibility = 'hidden';
        obj.parentNode.previousElementSibling.style.visibility = 'visible';
        var result = obj.parentNode.previousElementSibling.querySelector('input[name="value"]:checked').value;


        for (i = n; i < 10; i++) {
            if (result == arr[i]) {
                count--;
            }
        }

    }

    function result() {
        var result = document.querySelector('input[name="value"]:checked').value;
        for (i = n; i < 10; i++) {
            if (result == arr[i]) {
                count++;
            }
        }
        alert("SCORE=" + count);



        window.location.reload(true);
    
    }