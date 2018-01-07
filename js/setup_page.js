$('#role-select').hide();
$('#dept-select').hide();
$('#src-select').hide();
$('#finish-pg').hide();
$('#next_btn1').hide();
$('#next_btn2').hide();

//Switch statement to move through the pages of the setup site
var counter = 0;
switch (counter) {
  //case 0: user clicks on start button to move to role selection
  case 0: $('#start-btn').click(function(){
  /*  $('#steps').progressbar({
      //notation as follows:
      // ~: step failed
      // @: current step
      steps: ['@Role Selection (Current)', 'Department Selection', 'Source Selection', 'Setup Completed',]
      });
  */
  
    $('#start-container').hide();
    $('#role-select').show();
    console.log("start button clicked");
    console.log(counter);
    counter++;
  });

  //case 1: user clicks on executive or manager or data user button to move to department selection; back and next buttons visible
  //user clicks on a role button & user role stored
  case 1: $('#role-select .button').click(function(){
    var role;
    if (this.id == "exec"){
      role = "exec";
      console.log(role);
    }
    else if(this.id =="mgr"){
      role = "mgr";
      console.log(role);
    }
    else if(this.id =="datauser"){
      role = "dataowner";
      console.log(role);
    }

    $('#role-select').hide();
    $('#dept-select').show();
    //user can search and click on one or more dept names
    new SlimSelect({
      select: '#multi-select-dept',
      placeholder: 'Select Department(s)',
      showSearch: true, // shows search field
      searchText: 'Sorry, no matches found',
      beforeOnChange: (info) => {
        console.log('searching')
      },
      onChange: (info) => {
        console.log('selected')
    }
    })
    $('#next_btn1').show();
    console.log("next button clicked again");
    console.log(counter);
  });

  //case 2: user clicks on next button to move to source selection; back and next buttons visible
  case 2: $('#next_btn1 #nxt-pg').click(function(){
    $('#dept-select').hide();
    $('#src-select').show();
    //user clicks on one or more sources and clicks "add"
    new SlimSelect({
        select: '#multi-select-src',
        placeholder: 'Select Source(s)',
        showSearch: true, // shows search field
        searchText: 'Sorry, no matches found',
        beforeOnChange: (info) => {
          console.log('searching')
        },
        onChange: (info) => {
          console.log('selected')
      }
    })
    $('#next_btn1').hide();
    $('#next_btn2').show();
    console.log("next button clicked again");
    counter = 3;
    console.log(counter);
  });

  //case 3: user clicks on next button to move to completion page; back and next buttons visible
  case 3: $('#next_btn2 #nxt-pg').click(function(){
    $('#src-select').hide();
    $('#finish-pg').show();
    $('#next_btn2').hide();
    console.log("next button clicked again");
    counter = 3;
    console.log(counter);
  });

  //case 4: user clicks on enter button to go to dashboard page
  case 4: $('#finish-pg #nxt-pg').click(function(){
    $('#finish-pg').hide();
    console.log("next button clicked again");
    counter = 3;
    console.log(counter);
  });
  break;
}
