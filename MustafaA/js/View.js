export class View {
  /**
  
  Creates a new instance of the Page class, which represents the various sections of the website.
  @constructor
  @property {JQuery} $aboutSection - The jQuery object representing the "About" section of the website.
  @property {JQuery} $coopTableSelection - The jQuery object representing the "Coop Table Selection" section of the website.
  @property {JQuery} $facultySection - The jQuery object representing the "Faculty" section of the website.
  @property {JQuery} $undergraduateSection - The jQuery object representing the "Undergraduate Programs" section of the website.
  @property {JQuery} $graduateSection - The jQuery object representing the "Graduate Programs" section of the website.
  */
  constructor() {
    this.$aboutSection = $('#section-about');
    this.$coopTableSelection = $('#section-table-coop');
    this.$facultySection = $('#section-faculty');
    this.$undergraduateSection = $('#section-undergraduate')
    this.$graduateSection = $('#section-graduate')
  }
  /**
  
  Renders a spinner image on the news section to indicate that content is being loaded.
  */
  renderSpinner() {
    this.$newsSection.html('<img src="media/gears.gif" id="spinner"/>');

  }
  /**
  
  Renders a table with co-op information based on the provided data.
  The table is appended to the element with id 'coopTable'.
  The table includes columns for employer, degree, city, and term.
  @param {object} data - The data object containing co-op information.
  @return {void}
  */
  renderCoOpTable(data) {
    let $table = $('#coopTable');
    $table.append('<thead><tr><th>Employer</th><th>Degree</th><th>City</th><th>Term</th></tr></thead>');
    let $tbody = $('<tbody></tbody>');


    $.each(data.coopTable.coopInformation, function (index, item) {
      let $tr = $('<tr></tr>');
      $tr.append('<td>' + item.employer + '</td>');
      $tr.append('<td>' + item.degree + '</td>');
      $tr.append('<td>' + item.city + '</td>');
      $tr.append('<td>' + item.term + '</td>');
      $tbody.append($tr);
    });

    $table.append($tbody);
    $table.DataTable();
  }
  /**

Renders the employment table with data.

@param {Object} data - The data containing employment information.
*/
  renderEmploymentTable(data) {
    let $table = $('#employmentTable');
    $table.append('<thead><tr><th>Employer</th><th>Degree</th><th>City</th><th>Title</th><th>Start Date</th></tr></thead>');
    let $tbody = $('<tbody></tbody>');

    // Loop through data and add rows to table
    $.each(data.employmentTable.professionalEmploymentInformation, function (index, item) {
      let $tr = $('<tr></tr>');
      $tr.append('<td>' + item.employer + '</td>');
      $tr.append('<td>' + item.degree + '</td>');
      $tr.append('<td>' + item.city + '</td>');
      $tr.append('<td>' + item.title + '</td>');
      $tr.append('<td>' + item.startDate + '</td>');
      $tbody.append($tr);
    });

    $table.append($tbody);
    $table.DataTable();
  }


  /**
  
  Renders the About section with the provided data object.
  @param {Object} data - The data object containing the title and description of the About section.
  */
  renderAboutSection(data) {
    this.$aboutSection.html('');
    let $aboutDiv = $('<div class="about"></div>').css({
      'background-color': 'black',
      'color': 'white',
      'border-top': '3px solid orange',
      'border-bottom': '3px solid orange',
      'padding': '100px',
      'text-align': 'center',
      'font-size': '1.5rem'
    });

    $aboutDiv.append(`<h1>${data.title}</h1><br><hr><br><br><p>${data.description}</p><br><br><hr><br><br>`);
    this.$aboutSection.append($aboutDiv);
  }



  /**
  
  Renders the faculty section of the website with the given data.
  The faculty section displays information about each faculty member in a flexbox layout with images.
  Hovering over an image displays additional information about the faculty member.
  If there is an odd number of faculty members, the last member's image is centered.
  If there is an even number of faculty members, the last two members' images are centered.
  @param {Object} data - The data used to populate the faculty section.
  @param {Array} data.faculty - An array of objects containing information about each faculty member.
  @param {string} facultyMember.name - The name of the faculty member.
  @param {string} facultyMember.username - The username of the faculty member.
  @param {string} facultyMember.title - The title of the faculty member.
  @param {string} facultyMember.interestArea - The interest area of the faculty member.
  @param {string} facultyMember.office - The office of the faculty member.
  @param {string} facultyMember.website - The website of the faculty member.
  @param {string} facultyMember.phone - The phone number of the faculty member.
  @param {string} facultyMember.email - The email address of the faculty member.
  @param {string} facultyMember.twitter - The Twitter handle of the faculty member.
  @param {string} facultyMember.facebook - The Facebook URL of the faculty member.
  @param {string} facultyMember.tagline - The tagline of the faculty member.
  @param {string} facultyMember.imagePath - The file path of the image for the faculty member.
  @returns {void}
  */
  renderFacultySection(data) {
    this.$facultySection.html('');
    let $facultyDIV = $(`<div id="ulFaculty" ></div>`).css({
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'list-style-type': 'none',
      'margin': '0',
      'padding': '0',
      'text-align': 'center'
    });

    $.each(data.faculty, function (index, facultyMember) {
      const $facultyMemberItem = $(`
        <div class="faculty-member-container">
          <div class="faculty-member-img-container">
            <img src="${facultyMember.imagePath}" alt="error" style="max-width: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.4); display: block; margin: 0 auto;">
            <div class="faculty-member-info-container">
              <h3>${facultyMember.name}</h3>
              <p>${facultyMember.username}</p>
              <p>${facultyMember.title}</p>
              <p>${facultyMember.interestArea}</p>
              <p>${facultyMember.office}</p>
              <p>${facultyMember.website}</p>
              <p>${facultyMember.phone}</p>
              <p>${facultyMember.email}</p>
              <p>${facultyMember.twitter}</p>
              <p>${facultyMember.facebook}</p>
              <p>${facultyMember.tagline}</p>
            </div>
          </div>
        </div>
      `);
      const $facultyMemberImgContainer = $facultyMemberItem.find('.faculty-member-img-container');
      const $facultyMemberInfoContainer = $facultyMemberItem.find('.faculty-member-info-container');
    
      $facultyMemberImgContainer.hover(function () {
        $facultyMemberInfoContainer.stop().fadeIn();
      }, function () {
        $facultyMemberInfoContainer.stop().fadeOut();
      });
    
      $facultyDIV.append($facultyMemberItem);
    });
    
    this.$facultySection.append($facultyDIV);
  }    

  /**
  
  Renders the Undergraduate section of the webpage with the given data.
  @param {Object} data - The data containing information about the Undergraduate programs.
  */
  renderUndergraduate(data) {
    this.$undergraduateSection.html('');
    let $undergradDIV = $('<div class="programs"></div>')
    $.each(data.undergraduate, function (index, degree) {
      let $undergradItem = $(`
      <div class="programs-item">
        <h3>${degree.degreeName}</h3>
        <h4>${degree.title}</h4>
        <p>${degree.description}</p>
        <p>Concentrations: ${degree.concentrations}</p>
      </div>
    `);
      $undergradDIV.append($undergradItem);
    });
    this.$undergraduateSection.append($undergradDIV);
  }
  /**

Renders the graduate degree data in the view by dynamically creating and appending HTML elements to the graduate section.
The function clears the existing content of the graduate section before rendering new data.
@param {Object} data - The data to be rendered in the view.
*/
  renderGraduate(data) {
    this.$graduateSection.html('');
    
    let $graduateDIV = $('<div class="programs"></div>')
    $.each(data.graduate, function (_index, gradDegree) {
      if(gradDegree.title != undefined){
        let $graduateItem = $(`
        <div class="programs-item">
          <h3>${gradDegree.degreeName}</h3>
          <h4>${gradDegree.title}</h4>
          <p>${gradDegree.description}</p>
          <p>Concentrations: ${gradDegree.concentrations}</p>
        </div>
      `);
      $graduateDIV.append($graduateItem);
      }else{
        let $graduateItem = $(`
        <div class="programs-item">
          <h3>${gradDegree.degreeName}</h3>

          <p>Available Certificates: ${gradDegree.availableCertificates}</p>
        </div>
      `);
      $graduateDIV.append($graduateItem);
      }
    });
    
   
    this.$graduateSection.append($graduateDIV);
    console.log('radi');
  }





}
