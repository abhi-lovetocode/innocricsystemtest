@extends('layouts.master')
@section('content')

<div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;&nbsp;Confirmation Message</h5>

			</div>
			<div class="modal-body" id="modelbody">

			</div>
			<div class="modal-footer">
				<a href="/registration/addCandidate">
					<button type="button" class="btn btn-primary">ok</button>
				</a>
			</div>
		</div>
	</div>
</div>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>Specialization /<small>Edit</small></h1>
	</section>

	<!-- Main content -->
	<section class="content">
		<div class="row">
			<section class="custom-wrapper">
				
				<div class="box box-success">
					<div class="box-header with-border">
						<h3 class="box-title">Update Specialization</h3>
					</div><!-- /.box-header -->
					<!-- form start -->

					<div class="box-body">
						<div class="box-body table-responsive">
							<form method="get" role="form" name="updateSpecializationForm" id="updateSpecializationForm" enctype="multipart/form-data" accept-charset="utf-8">
								{!! csrf_field() !!}
								<input type="hidden" id="pid" name="pid" value="{{ $record->id }}">
								<div class="form-group">
									<label for="specialization_name">Specialization Name</label>
									<input type="text" class="form-control " id="specialization_name" name="specialization_name" placeholder="Enter Specialization Name" value="{{ $record->specialization_name }}">
									<small><p class="custom-error" id="specialization_name_error"></p></small>
								</div>
								<div class="text-center">

									<button type="button" class="btn btn-info" onclick="updateSpecialization()">update</button>

								</div>
							</form>
						</div>
					</div><!-- /.box-body -->
				</div><!-- /.box -->
				
			</section><!-- /.content -->
		</div>
	</section>
	

</div><!-- /.content-wrapper -->
<script src="{{ asset('_plugins/jQuery/jQuery-2.1.4.min.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>
<script src="{{ asset('_custom/js/specialization.js') }}"></script>

@endsection