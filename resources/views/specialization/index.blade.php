@extends('layouts.master')
@section('content')


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>Specialization /<small>List</small></h1>
	</section>

	<!-- Main content -->
	<section class="content">
		<div class="row">
			<section class="custom-wrapper">
				
				<div class="box box-success">
					<div class="box-header with-border">
						<h3 class="box-title">Specialization List</h3>
						<div style="float: right;">

							<button type="button" class="btn btn-info" onclick="location.href='specialization/create'">Add New</button>

						</div>
					</div><!-- /.box-header -->
					<!-- form start -->

					<div class="box-body">
						<div class="box-body table-responsive">
							<table id="example1" class="table table-bordered table-striped">
								<thead>
									<tr>
										<th>Id</th> 
										<th>Specialization</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									@foreach ($slist as $element)
									<tr>
										<th>{{ $element->id }}</th> 
										<th>{{ $element->specialization_name }}</th>
										<th><button type="button" class="btn btn-info" onclick="location.href='specialization/{{ $element->id }}/edit'">Edit</button></th>
									</tr>
									@endforeach

								</tbody>
							</table>
						</div>
					</div><!-- /.box-body -->
				</div><!-- /.box -->
				






				
			</section><!-- /.content -->
		</div>
	</section>
	

</div><!-- /.content-wrapper -->

@endsection