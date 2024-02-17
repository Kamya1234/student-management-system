import {Link} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
export default EditDepartment;
function EditDepartment(){
    return(
        <body>
            
<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"></link>

<div className="main-wrapper">

<Header/>
       <Sidebar/>
        





<div className="page-wrapper">
<div className="content container-fluid">


<div className="row">
<div className="col-sm-12">
<div className="card">
<div className="card-body">
<form>
<div className="row">
<div className="col-12">
<h5 className="form-title"><span>Department Details</span></h5>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>Department ID <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="PRE1534"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>Department Name <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="MCA"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>Head of Department <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="Lois A"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms calendar-icon">
<label>Department Start Date <span className="login-danger">*</span></label>
<input className="form-control datetimepicker" type="text" placeholder="DD-MM-YYYY"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>No of Students <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="200"/>
</div>
</div>
<div className="col-12">
<div className="student-submit">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<Footer/>
</div>

</div>


</body>


    )
}