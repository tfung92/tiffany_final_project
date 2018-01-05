//jquery progressbar plugin for showing the set up step progress; set progressbar to step 1
$('#steps').progressbar({
  //notation as follows:
  // ~: step failed
  // @: current step
  steps: ['@Role Selection (Current)', 'Department Selection', 'Source Selection', 'Finish Setup',]
});

//user clicks on a role button

//user role stored

//user clicks "next page": role selection container hidden and dept selection displayed; progressbar is set
//$("#role-select").hide();

//user clicks on one or more dept names and clicks "add"

//dept names are stored and displayed in display box

//user clicks "next page": dept selection container hidden and src selection displayed; progressbar is set
//$("#dept-select").hide();

//user clicks on one or more sources and clicks "add"

//source names are stored and displayed in display box

//user clicks "next page": src selection container hidden and success page displayed; progressbar is set
//$("#src-select").hide();
