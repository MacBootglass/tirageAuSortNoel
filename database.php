<?php
  $cmd   = "";
  $table = "";

  if (isset($_GET["cmd"]))
    $cmd = $_GET["cmd"];

  if (strcmp( $cmd , "get" ) == 0) {
    if (isset($_GET["table"]))
      $table = $_GET["table"];

    if (strcmp( $table , "" ) != 0) {
      $db = mysql_connect('localhost', 'root', '');
      mysql_select_db('noel',$db);
      if (strcmp( $table , "Utilisateurs") == 0)
        echo makeJSON($table, 'nom');
      if (strcmp( $table , "Contraintes") == 0)
        echo makeJSON($table, 'destinataire');
      mysql_close();
    }
  }

  function makeJSON($tab, $col2) {
    $sql = 'SELECT * FROM '.$tab;
    $req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error());
    $aff = '{"'.$tab.'":[';
    while($data = mysql_fetch_assoc($req)) {
      $aff .= '{ "id":'.$data['id'].', "'.$col2.'":"'.$data[$col2].'"},';
    }
    $aff = substr($aff, 0, -1);
    return $aff."]}";
  }
?>
