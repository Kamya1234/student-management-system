import {Link} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
export default EditTransport;
function EditTransport(){
    return(
        <body>
            
<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

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
<h5 className="form-title"><span>Transport Information</span></h5>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>Route Name <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="New Cross"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>Vehicle Number <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="TN 43 AS 5263"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>Driver Name <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="Steve"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>License Number <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="REDH968532"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>Contact Number <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="+91 8974158962"/>
</div>
</div>
<div className="col-12 col-sm-4">
<div className="form-group local-forms">
<label>Driver Address <span className="login-danger">*</span></label>
<input type="text" className="form-control" value="152, South Pole, 2nd Street, 3rd Cross"/>
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