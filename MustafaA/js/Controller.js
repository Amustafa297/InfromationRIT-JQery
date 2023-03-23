import { Model } from './Model.js';

export class Controller {
    /**

Constructs a new controller object with the given model and view.
The controller retrieves data from the model using AJAX requests,
and updates the view with the retrieved data.
@param {Object} model - The model object to retrieve data from.
@param {Object} view - The view object to update with retrieved data.
@constructor
*/


    constructor(model, view) {
        this.model = model;
        this.view = view;

        // this.view.renderSpinner();

        //1. send the request - the jqXHR object is returned, 
        //that will hold the response on success (available within the done() callback)
        let response = this.model.getData('/employment/coopTable');
        let about = this.model.getData('/about');
        let faculty = this.model.getData('/people/faculty')
        let undergraduate = this.model.getData('/degrees/undergraduate');
        let graduate = this.model.getData('/degrees/graduate');
        let employment = this.model.getData('/employment/employmentTable');
        //2. specify what will be executed when the request is successful (done() callback)

        about.done((data) => {
            this.view.renderAboutSection(data);
        }).fail();

        faculty.done((data) => {
            this.view.renderFacultySection(data);
        }).fail();
        undergraduate.done((data) => {
            this.view.renderUndergraduate(data);
        }).fail();

        graduate.done((data) => {
            this.view.renderGraduate(data);
        }).fail();
        response.done((data) => {
            this.view.renderCoOpTable(data);
        }).fail();
        employment.done((data) => {
            this.view.renderEmploymentTable(data);
        }).fail();



    }
}