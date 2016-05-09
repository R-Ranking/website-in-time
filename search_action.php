
<html>
<head>
  <title>PHP Test</title>
 </head>
 <body>

<?php 

$temp = htmlspecialchars($_POST['package']);

$url = "http://R-Ranking.com/packages/".$temp.".html";  
echo "<script type='text/javascript'>";  
echo "window.location.href='$url'";  
echo "</script>"; 

 ?> 

 </body>
</html>
