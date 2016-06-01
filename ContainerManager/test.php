<?php
$abc = exec('python test.py create_container samplechallenge');
echo $abc;
header("Location: ".$abc);
exit(0);
?>
