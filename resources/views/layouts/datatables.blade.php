
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Election Tracker | Dashboard</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.5 -->
  <link rel="stylesheet" href="{{ asset('_bootstrap/css/bootstrap.min.css') }}">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('_dist/css/AdminLTE.min.css') }}">
  <!-- AdminLTE Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="{{ asset('_dist/css/skins/_all-skins.min.css') }}">
  <!-- iCheck -->
  <link rel="stylesheet" href="{{ asset('_plugins/iCheck/flat/blue.css') }}">
  <!-- Morris chart -->
  <link rel="stylesheet" href="{{ asset('_plugins/morris/morris.css') }}">
  <!-- jvectormap -->
  <link rel="stylesheet" href="{{ asset('_plugins/jvectormap/jquery-jvectormap-1.2.2.css') }}">
  <!-- Date Picker -->
  <link rel="stylesheet" href="{{ asset('_plugins/datepicker/datepicker3.css') }}">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="{{ asset('_plugins/daterangepicker/daterangepicker-bs3.css') }}">
  <!-- bootstrap wysihtml5 - text editor -->
  <link rel="stylesheet" href="{{ asset('_plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css') }}">

  <link rel="shortcut icon" href="{{ asset('_images/favicon.ico') }}">

  <link rel="stylesheet" href="{{ asset('_custom/css/main.css') }}">


  

  <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->

    </head>
    <body class="hold-transition skin-blue sidebar-mini">
      <div class="wrapper" style="margin-bottom: 30px;">
       @include('layouts.navbar')
       @include('layouts.sidebar')

       @yield('content')


       <!-- jQuery -->
       <script src="//code.jquery.com/jquery.js"></script>
       <!-- DataTables -->
       <script src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>
       <!-- Bootstrap JavaScript -->

       <!-- App scripts -->
       @stack('scripts')

       <footer class="main-footer text-center navbar-fixed-bottom">

         <strong>Copyright &copy; 2017-2018 <a target="_blank" href="http://yugasys.com">Yugasys</a>.</strong> All rights reserved.
       </footer>

       <!-- jQuery UI 1.11.4 -->
       <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
       <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
       <script>
        $.widget.bridge('uibutton', $.ui.button);
      </script>
      <!-- Bootstrap 3.3.5 -->
      <script src="{{ asset('_bootstrap/js/bootstrap.min.js') }}"></script>
      
      <!-- Morris.js charts -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
      <script src="{{ asset('_plugins/morris/morris.min.js') }}"></script>
      <!-- Sparkline -->
      <script src="{{ asset('_plugins/sparkline/jquery.sparkline.min.js') }}"></script>


      <!-- jvectormap -->
      <script src="{{ asset('_plugins/jvectormap/jquery-jvectormap-1.2.2.min.js') }}"></script>
      <script src="{{ asset('_plugins/jvectormap/jquery-jvectormap-world-mill-en.js') }}"></script>
      <!-- jQuery Knob Chart -->
      <script src="{{ asset('_plugins/knob/jquery.knob.js') }}"></script>
      <!-- daterangepicker -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>
      <script src="{{ asset('_plugins/daterangepicker/daterangepicker.js') }}"></script>
      <!-- datepicker -->
      <script src="{{ asset('_plugins/datepicker/bootstrap-datepicker.js') }}"></script>

      <!-- bootstrap time picker -->
      <script src="{{ asset('_plugins/timepicker/bootstrap-timepicker.min.js') }}"></script>
      <!-- Bootstrap WYSIHTML5 -->
      <script src="{{ asset('_plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js') }}"></script>
      <!-- Slimscroll -->
      <script src="{{ asset('_plugins/slimScroll/jquery.slimscroll.min.js') }}"></script>
      <!-- FastClick -->
      <script src="{{ asset('_plugins/fastclick/fastclick.min.js') }}"></script>
      <!-- AdminLTE App -->
      <script src="{{ asset('_dist/js/app.min.js') }}"></script>
      <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
      <script src="{{ asset('_dist/js/pages/dashboard.js') }}"></script>
      <!-- AdminLTE for demo purposes -->
      <script src="{{ asset('_dist/js/demo.js') }}"></script>>




    </body>
    </html>