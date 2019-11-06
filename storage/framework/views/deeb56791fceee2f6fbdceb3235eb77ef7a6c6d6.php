<?php $__env->startSection('content'); ?>


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>Doctors /<small>List</small></h1>
	</section>

	<!-- Main content -->
	<section class="content">
		<div class="row">
			<section class="custom-wrapper">
				
				<div class="box box-success">
					<div class="box-header with-border">
						<h3 class="box-title">Doctors List</h3>
						<div style="float: right;">

							<button type="button" class="btn btn-info" onclick="location.href='doctors/create'">Add New</button>

						</div>
					</div><!-- /.box-header -->
					<!-- form start -->

					<div class="box-body">
						<div class="box-body table-responsive">
							<table id="example1" class="table table-bordered table-striped">
								<thead>
									<tr>
										<th>Id</th> 
										<th>Doctors</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						</div>
					</div><!-- /.box-body -->
				</div><!-- /.box -->
				






				
			</section><!-- /.content -->
		</div>
	</section>
	

</div><!-- /.content-wrapper -->

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>