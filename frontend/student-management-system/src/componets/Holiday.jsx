import {Link} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
export default Holiday;
function Holiday(){
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
<h3 className="page-title">Holiday</h3>
</div>
<div className="col-auto text-end float-end ms-auto download-grp">
<a href="#" className="btn btn-outline-primary me-2"><i className="fas fa-download"></i> Download</a>
<Link to="/add-holiday" className="btn btn-primary"><i className="fas fa-plus"></i></Link >
</div>
</div>
</div>

<div className="table-responsive">
<table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
<thead className="student-thread">
<tr>
<th>ID</th>
<th>Holiday Name</th>
<th>Type</th>
<th>Start Date</th>
<th>End Date</th>
</tr>
</thead>
<tbody>
<tr>
<td>PRE2209</td>
<td>
<h2>
<a>Sports Day</a>
</h2>
</td>
<td>College Holiday</td>
<td>17 Aug 2020</td>
<td>19 Aug 2020</td>
</tr>
<tr>
<td>PRE2213</td>
<td>
<h2>
<a>Memorial Day</a>
</h2>
</td>
<td>Public Holiday</td>
<td>05 Aug 2020</td>
<td>06 Aug 2020</td>
</tr>
<tr>
<td>PRE2143</td>
<td>
<h2>
<a>Annual Day</a>
</h2>
</td>
<td>College Holiday</td>
<td>04 Sept 2020</td>
<td>07 Sept 2020</td>
</tr>
<tr>
<td>PRE2431</td>
<td>
<h2>
<a>Exam Holiday</a>
</h2>
</td>
<td>Semester leave</td>
<td>17 Sept 2020</td>
<td>30 Sept 2020</td>
</tr>
<tr>
<td>PRE2209</td>
<td>
<h2>
<a>Sports Day</a>
</h2>
</td>
<td>College Holiday</td>
<td>17 Aug 2020</td>
<td>19 Aug 2020</td>
</tr>
<tr>
<td>PRE2213</td>
<td>
<h2>
<a>Memorial Day</a>
</h2>
</td>
<td>Public Holiday</td>
<td>05 Aug 2020</td>
<td>06 Aug 2020</td>
</tr>
<tr>
<td>PRE2143</td>
<td>
<h2>
<a>Annual Day</a>
</h2>
</td>
<td>College Holiday</td>
<td>04 Sept 2020</td>
<td>07 Sept 2020</td>
</tr>
<tr>
<td>PRE2431</td>
<td>
<h2>
<a>Exam Holiday</a>
</h2>
</td>
<td>Semester leave</td>
<td>17 Sept 2020</td>
<td>30 Sept 2020</td>
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