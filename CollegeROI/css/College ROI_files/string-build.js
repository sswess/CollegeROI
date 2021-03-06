
function collegeStringBuild (){
  if(college1Array.length>0){
      var collegeQueryString = "(";
      collegeQueryString +=(college1Array.join(" OR "));
      collegeQueryString += ")";
      console.log(collegeQueryString);
      return collegeQueryString;
    }
};

function stateStringBuilder(){
  if(state1Array.length>0){
      var stateQueryString = "(";
      stateQueryString += (state1Array.join(" OR "));
      stateQueryString += ")";
      console.log(stateQueryString); 
      return stateQueryString;
    } 
};

function majorStringBuild(){
  if(major2Array.length>0){
    var majorQueryString = "(";
    majorQueryString += (major2Array.join(" OR "));
    majorQueryString += ")";
    console.log(majorQueryString);
    return majorQueryString;
  }
};
function regionStringBuild(){
var regionString1Array = [];
var regionChecked = false;
$('input[id="regionBox"]').each(function(){
    if($(this).is(":checked")){
      regionChecked = true;
      regionString1Array.push($(this).val());
    } 
});
  if(regionChecked){
  var regionString = "("; 
  regionString += regionString1Array.join(" OR ");
  regionString += ")";
  console.log(regionString);
  return regionString;
}};

function resultComparisonStringBuild(){
  var resultComparisonStringArray = [];
var compareChecked = false;
$('input[id="compare"]').each(function(){
    if($(this).is(":checked")){
      compareChecked= true;
     resultComparisonStringArray.push("UNITID = "+$(this).val());
    }});
    if(compareChecked){
      var comparisonString = "(";
      comparisonString +=resultComparisonStringArray.join(" OR ");
      comparisonString += ")";
      console.log(comparisonString);
      return comparisonString;
    }
};

function isPublicStringBuild(){
var isPublicString1Array = [];
var isPublicChecked = false;
$('input[id="isPublic"]').each(function(){
    if($(this).is(":checked")){
      isPublicChecked= true;
     isPublicString1Array.push($(this).val());
    }
    
});
  if(isPublicChecked){
      var isPublicString = "(";
      isPublicString += isPublicString1Array.join(" OR ");
      isPublicString += ")";
      console.log(isPublicString);
      return isPublicString
 }
};

function popStringBuild(){
var pop1Array = [];
var popChecked = false;
$('input[id="popBox"]').each(function(){
    if($(this).is(":checked")){
      popChecked= true;
     pop1Array.push($(this).val());
    }
    
});
  if(popChecked){
      var popString = "(";
      popString += pop1Array.join(" OR ");
      popString += ")";
      console.log(popString);
      return popString;
 }
};

function priceStringBuild(){
  var priceString = "(NET_PRICE <" + max  + " AND NET_PRICE > " + min +")";
  console.log(priceString);
  return priceString;
};

function admStringBuild(){
  var admString = "(ADM_RATE <" + (max1/100.)  + " AND ADM_RATE > " + (min1/100.) +")";
  console.log(admString);
  return admString;
};


function form1QueryStringBuild(){
      
       var form1StringArray =[];
       if(typeof collegeStringBuild() !== 'undefined') form1StringArray.push(collegeStringBuild());
       if(typeof priceStringBuild() !== 'undefined') form1StringArray.push(priceStringBuild());
       if(typeof  stateStringBuilder() !== 'undefined') form1StringArray.push(stateStringBuilder());
       if(typeof popStringBuild() !== 'undefined') form1StringArray.push(popStringBuild());
       if(typeof isPublicStringBuild() !== 'undefined') form1StringArray.push(isPublicStringBuild());
       if(typeof admStringBuild() !== 'undefined') form1StringArray.push(admStringBuild());
       form1QueryString = "WHERE ";
       form1QueryString += form1StringArray.join(" AND ");
       console.log(form1QueryString);
       return form1QueryString;
       
};

function form2QueryStringBuild(){
  
  if(typeof collegeStringBuild() !== 'undefined') {
    var form2CollegeQuery = "Select * FROM Main_Table WHERE ";
    form2CollegeQuery+=collegeStringBuild();
    console.log(form2CollegeQuery);
  }
  if(typeof majorStringBuild() !== 'undefined') {
    var form2MajorQuery = "Select * FROM major_salary WHERE ";
    form2MajorQuery+=majorStringBuild();
    console.log(form2MajorQuery);
  }
  
};