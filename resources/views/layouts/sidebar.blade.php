<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">

    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu">
      <li class="header">MAIN NAVIGATION</li>
      <li class="treeview {{ Active::check('specialization/*') }}">
        <a href="#">
         <i class="fa fa fa-edit" ></i> <span>Specialization</span> <i class="fa fa-angle-left pull-right"></i>
       </a>
       <ul class="treeview-menu">
         <li class="{{ Active::check('specialization*') }}"><a href="/specialization"><i class="fa fa-circle-o"></i>List</a></li>
       </ul>
     </li>
     <li class="treeview {{ Active::check('doctors/*') }}">
      <a href="#">
       <i class="fa fa-eye" ></i><span>Doctors</span> <i class="fa fa-angle-left pull-right"></i>
     </a>
     <ul class="treeview-menu">
       <li class="{{ Active::check('doctors/addnew') }}"><a href="/doctors/addnew"><i class="fa fa-circle-o"></i>Add New</a></li> 
       <li class="{{ Active::check('doctors/list') }}"><a href="/doctors/list"><i class="fa fa-circle-o"></i>List</a></li>
     </ul>
   </li>



 </ul>
</section>
<!-- /.sidebar -->
</aside>