import {Link} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default Hostel;
function Hostel(){
    return(
        <body>
            
<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>

<link rel="stylesheet" href="assets/plugins/feather/feather.css"/>

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css"/>

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"/>

<link rel="stylesheet" href="assets/plugins/datatables/datatables.min.css"/>

<link rel="stylesheet" href="assets/css/style.css"></link>

<div className="main-wrapper">


<Header/>
       <Sidebar/>




<div className="page-wrapper">
<div className="content container-fluid">



<div className="row">
<div className="col-sm-12">
<div className="card card-table">
<div className="card-body">

<div className="page-header">
<div className="row align-items-center">
<div className="col">
<h3 className="page-title">Hostel</h3>
</div>
<div className="col-auto text-end float-end ms-auto download-grp">
<a href="" className="btn btn-outline-primary me-2"><i className="fas fa-download"></i> Download</a>
<Link to="/add-room" className="btn btn-primary"><i className="fas fa-plus"></i></Link >
</div>
</div>
</div>

<div className="table-responsive">
<table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
<thead className="student-thread">
<tr>
<th>Block</th>
<th>Room No</th>
<th>Room Type</th>
<th>No of Beds</th>
<th>Cost per Bed</th>
<th>Availability</th>
<th className="text-end">Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>A Block</td>
<td>101</td>
<td>Medium</td>
<td>6</td>
<td>$10</td>
<td>
<span className="badge badge-danger">Full</span>
</td>
<td className="text-end">
<div className="actions ">
<a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
<i className="feather-eye"></i>
</a>
<Link to="/edit-room" className="btn btn-sm bg-danger-light">
<i className="feather-edit"></i>
</Link >
</div>
</td>
</tr>
<tr>
<td>A Block</td>
<td>101</td>
<td>Medium</td>
<td>6</td>
<td>$10</td>
<td>
<span className="badge badge-success">Available</span>
</td>
<td className="text-end">
<div className="actions ">
<a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
<i className="feather-eye"></i>
</a>
<Link to="/edit-room" className="btn btn-sm bg-danger-light">
<i className="feather-edit"></i>
</Link >
</div>
</td>
</tr>
<tr>
<td>A Block</td>
<td>102</td>
<td>Medium</td>
<td>6</td>
<td>$10</td>
<td>
<span className="badge badge-danger">Full</span>
</td>
<td className="text-end">
<div className="actions ">
<a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
<i className="feather-eye"></i>
</a>
<Link to="/edit-room" className="btn btn-sm bg-danger-light">
<i className="feather-edit"></i>
</Link >
</div>
</td>
</tr>
<tr>
<td>B Block</td>
<td>104</td>
<td>Big</td>
<td>8</td>
<td>$10</td>
<td>
<span className="badge badge-danger">Full</span>
</td>
<td className="text-end">
<div className="actions ">
<a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
<i className="feather-eye"></i>
</a>
<Link to="/edit-room" className="btn btn-sm bg-danger-light">
<i className="feather-edit"></i>
</Link >
</div>
</td>
</tr>
<tr>
<td>A Block</td>
<td>107</td>
<td>Medium</td>
<td>6</td>
<td>$10</td>
<td>
<span className="badge badge-success">Available</span>
</td>
<td className="text-end">
<div className="actions ">
<a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
<i className="feather-eye"></i>
</a>
<Link to="/edit-room" className="btn btn-sm bg-danger-light">
<i className="feather-edit"></i>
</Link >
</div>
</td>
</tr>
<tr>
<td>A Block</td>
<td>108</td>
<td>Medium</td>
<td>6</td>
<td>$10</td>
<td>
<span className="badge badge-success">Available</span>
</td>
<td className="text-end">
<div className="actions ">
<a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
<i className="feather-eye"></i>
</a>
<Link to="/edit-room" className="btn btn-sm bg-danger-light">
<i className="feather-edit"></i>
</Link >
</div>
</td>
</tr>
<tr>
<td>B Block</td>
<td>102</td>
<td>Medium</td>
<td>6</td>
<td>$10</td>
<td>
<span className="badge badge-warning">2 Available</span>
</td>
<td className="text-end">
<div className="actions ">
<a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
<i className="feather-eye"></i>
</a>
<Link to="/edit-room" className="btn btn-sm bg-danger-light">
<i className="feather-edit"></i>
</Link >
</div>
</td>
</tr>
<tr>
<td>B Block</td>
<td>107</td>
<td>Small</td>
<td>6</td>
<td>$10</td>
<td>
<span className="badge badge-success">Available</span>
</td>
<td className="text-end">
<div className="actions ">
<a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
<i className="feather-eye"></i>
</a>
<Link to="/edit-room" className="btn btn-sm bg-danger-light">
<i className="feather-edit"></i>
</Link >
</div>
</td>
</tr>
</tbody>
</table>
</div>
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