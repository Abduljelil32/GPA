var x = 1;
function add_grade(){
x++;
var grade = 'grade_'+x;
var unit ='unit_'+x;
var course ='course_'+x;
$('#inputs').append("<div class='row' style='margin-bottom: 5px;'><div class='col-sm-4 col-md-4 col-xs-4'><input type='text' id='"+course+"' class='form-control' placeholder='Course Code'></div><div class='col-sm-4 col-md-4 col-xs-4'><select class='form-control' id='"+grade+"'><option value='0'>Select Grade</option><option value='4'>A</option><option value='3'>B</option><option value='2'>C</option><option value='1'>D</option><option value='0'>F</option></select></div><div class='col-sm-4 col-md-4 col-xs-4'><select class='form-control' id='"+unit+"'><option value='0'>Unit</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option></select></div></div>");
}

function rem_grade(){
if(x > 1){
$("#inputs .row:last-child").remove();
x--;
}
}

function submit(){
    var cgpi  = parseFloat($("#cgpi").val());
    var gpa   = parseFloat($("#gpa").val());
    var cgpa  = (cgpi+gpa)/2;
        cgpa  = cgpa.toFixed(2);

    if(isNaN(cgpa)){
    $("#cgpa").html("<div class='alert alert-danger'>incorrect data entered for previous gpa and current gpa</div>");
    }else{
    $("#cgpa").html("<button class='btn btn-default form-control' disabled >CGPA= <span id='cg_btn'>"+cgpa+"</span></button>");
    $("#cgp").html("<button class='btn btn-warning' onclick='save()'><span class='glyphicon glyphicon-download'></span>&nbsp;Save CGPA</button>");
}
}

function save(){
    let itemsArray = []
    itemsArray.push($("#cg_btn").text())
    localStorage.setItem('items',itemsArray);
}

function load(){
    $('#gpa').val(localStorage.getItem('items'));
}

function rem(){
    var c = "";
    $('#gpa').val(c);
    localStorage.removeItem('items');
}

function calc_gpa(){
    var sm   = 0;
    var tu   = 0;
    var gpa  = 0;
    for (var i = 1; i <= x; i++) {
        var cs = $('#course_'+i).val();
        var gr = $('#grade_'+i).val();
        var un = $('#unit_'+i).val();
        var grn = gr * un;
        tu +=parseFloat(un);
        sm +=parseFloat(grn);
        }
        gpa = sm/tu;
        gpa = gpa.toFixed(2);
    if(isNaN(gpa)){
    $("#ca").html("<div class='alert alert-danger'>incorrect data entered for course code or unit allocated to course</div>");
    }else{
    $("#ca").html("<button class='btn btn-default form-control' disabled >GPA= <span id='cg_btn'>"+gpa+"</span></button>");
    $("#cp").html("<b>Please note down this GPA if want to calculate CGPA</b>!");
    }
}
