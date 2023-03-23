/**
 * Model is responsible of loading the data form a remote site. The jQuery's ajax()
 * method is used to send requests. 
 * 
 * The ajax() method returns the jQuery XMLHttpRequest (jqXHR) object, which 
 * is a superset of the browser's native XMLHttpRequest object. It contains, 
 * for example, responseText & responseJSON properties, as well as 
 * callback options such as jqXHR.done() & jqXHR.fail(). The ajax() method is 
 * commonly used as:
 *                      $.ajax({}).done(()=>{}).fail(()=>{});
 * 
 * Here, we implement only the fail() callback because we want to implement the 
 * done() callback in the controller. Hence, the Model.getData() returns the 
 * jqXHR object for the controller to implement the done() callback. 
 *  
 *  @see {@link https://api.jquery.com/jquery.ajax/jQuery.ajax()} for further infomation
 */




export class Model {
    /**
    
    This function sends a GET request to retrieve data from the server using the specified endpoint.
    It utilizes jQuery's $.ajax() function to perform the request, passing in the endpoint as a parameter.
    Additionally, it specifies certain options such as cache, timeout, and dataType.
    If the request fails, it logs an error message to the console.
    @param {string} endpoint - The API endpoint to retrieve data from.
    @returns {Object} - Returns a jQuery XHR object representing the AJAX request.
    */
    getData(endpoint) {
        let jqXHR = $.ajax({
            method: "GET",
            url: "proxy.php",
            cache: false, // default: true
            data: { path: endpoint },
            timeout: 10000, // waiting time
            dataType: "json" // the type of data that you're expecting back from the server.
        }).fail((_jqXHR, _textStatus, _error) => {
            $("body").html(`<div class="ERROR errorBackground"> <h1>ERROR <span class="error404">404</span> PLEASE CONTACT THE ADMIN</h1></div>`);
        });

        return jqXHR;
    }
}