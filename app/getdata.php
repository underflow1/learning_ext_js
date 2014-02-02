<?php
$link = mysql_connect('localhost', 'mob2', '123qweQWE');
if (!$link) {
    die('Ошибка соединения: ' . mysql_error());
}
$db_selected = mysql_select_db('mobile2', $link);
if (!$db_selected) {
    die ('Не удалось выбрать базу foo: ' . mysql_error());
}
$sql = "SELECT * FROM phonenumbers";
$result= mysql_query($sql);
$arr = array();
while ($obj=mysql_fetch_object($result)){
    $arr[] = $obj;
}
echo json_encode(array(
    "success" => true,
    "data" => $arr
));
mysql_close($link);
?>