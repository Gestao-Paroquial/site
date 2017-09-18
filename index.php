<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>São Lucas Evangelista</title>

    <!-- Inicialize Carousel -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="js/index/carousel.js"></script>

    <!-- Custom -->
    <link href="css/custom.css" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet'
          type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
          rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="css/clean-blog.min.css" rel="stylesheet">

</head>

<body>

<div class="container">
    <div class="row">
        <div style="background-color: black;">
            <?php include_once("nav_bar.php") ?>
        </div>
    </div>
</div>

<!-- Page Header -->
<!-- <header class="masthead" style="background-image: url('img/5ee9ea85d03c08338969db6aa5953448.jpg')"> -->
<!--<header id="header-background" class="masthead"-->
<!--        style="background-image: url('http://www.acidigital.com//imagespp/size680/Sao_Lucas.jpg');">-->
<!--    <div class="container">-->
<!--        <div class="row">-->
<!--            <div class="col-lg-8 col-md-10 mx-auto">-->
<!--                <div class="site-heading">-->
<!--                    <p></p>-->
<!--                    <!--<h1>Paróquia São Lucas Evangelista</h1>-->
<!--                    <!-- <span class="subheading">Lorem ipsum dolor sit amet</span> -->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</header>-->

<!-- Carousel -->
<div class="container" id="corousel">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel2" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" id="main-carousel">

            <!--            <div class="item active">-->
            <!--                <img src="http://www.blau.com/themes/blau/assets/img/vitrines/home.en.jpg" alt="Los Angeles"-->
            <!--                     style="width:100%;">-->
            <!--            </div>-->
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>


<!-- Main Content -->
<div class="container">
    <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-preview">
                <a href="post.php">
                    <h2 class="post-title">
                        Man must explore, and this is exploration at its greatest
                    </h2>
                    <h3 class="post-subtitle">
                        Problems look mighty small from 150 miles up
                    </h3>
                </a>
                <p class="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on September 24, 2017</p>
            </div>
            <hr>
            <div class="post-preview">
                <a href="post.php">
                    <h2 class="post-title">
                        I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                    </h2>
                </a>
                <p class="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on September 18, 2017</p>
            </div>
            <hr>
            <div class="post-preview">
                <a href="post.php">
                    <h2 class="post-title">
                        Science has not yet mastered prophecy
                    </h2>
                    <h3 class="post-subtitle">
                        We predict too much for the next year and yet far too little for the next ten.
                    </h3>
                </a>
                <p class="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on August 24, 2017</p>
            </div>
            <hr>
            <div class="post-preview">
                <a href="post.php">
                    <h2 class="post-title">
                        Failure is not an option
                    </h2>
                    <h3 class="post-subtitle">
                        Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                    </h3>
                </a>
                <p class="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on July 8, 2017</p>
            </div>
            <hr>
            <!-- Pager -->
            <div class="clearfix">
                <a class="btn btn-secondary float-right" href="#">Older Posts &rarr;</a>
            </div>
        </div>
    </div>
</div>

<hr>

<!-- Footer -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <ul class="list-inline text-center">
                    <li class="list-inline-item">
                        <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                        </a>
                    </li>
                </ul>
                <p class="copyright text-muted">Copyright &copy; Your Website 2017</p>
            </div>
        </div>
    </div>
</footer>

<!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/popper/popper.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!-- Custom scripts for this template -->
<script src="js/clean-blog.min.js"></script>

</body>

</html>
