function validate() {
                
                var cont = document.getElementById("contact").value;
                var str = document.getElementById("name").value; 
                if(isNaN(cont)) {
                    alert("Inappropriate contact !");
                    return false;
                }
                if(str.length > 20) {
                    alert("Name : quite long!");
                    return false;
                }
                else {
                    return true;
                }
            }

function validateFeed() {
                var str = document.getElementById("name").value;
                if(str.length > 20) {
                    alert("Name : quite long!");
                    return false;
                }
                else {
                    return true;
                }
            }