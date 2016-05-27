function init() {
  var userList;
  var constraintList;
  var personnesTirees;
  loadTirage();
  loadModif();
  $("#tirerAuSort").click(function() {tirerAuSort();});
}

function loadTirage() {
  var contenu  = $("#tirage>table").children;
}

function loadModif() {
  var contenu = $("#modification>table").children();
  $.ajax({
          url: "bado.php?cmd=get&table=Utilisateurs",
          type: "GET",
          dataType: "json",
          success: function(res) {
                                    var str;
                                    userList = res.Utilisateurs;
                                    for (var i = 0; i < res.Utilisateurs.length; i++) {
                                      str  =  '<tr id="user' + res.Utilisateurs[i].id + '">';
                                      str +=    '<td class="tdNom">';
                                      str +=      '<span class="user' + res.Utilisateurs[i].id + 'Read">' + res.Utilisateurs[i].nom + '</span>';
                                      str +=      '<input class="user' + res.Utilisateurs[i].id + 'Write" value="' + res.Utilisateurs[i].nom + '" class="form-control"/>';
                                      str +=    '</td>';
                                      str +=    '<td>';
                                      str +=      '<table>';
                                      str +=        '<tr>';
                                      str +=          '<td class="col75">';
                                      str +=            '<select class="form-control user' + res.Utilisateurs[i].id + 'Write" id="user"'+ res.Utilisateurs[i].id +'Select"></select>';
                                      str +=          '</td>';
																			str +=					'<td>';
																			str +=						'<button id="btnAdd'+ res.Utilisateurs[i].id + '" class="user' + res.Utilisateurs[i].id + 'Write btn btn-success"> <span class="glyphicon glyphicon-plus"></span></button>';
																			str +=					'</td>';
                                      str +=        '</tr>';
                                      str +=      '</table>';
                                      str +=    '</td>';
                                      str +=    '<td>';
                                      str +=      '<button class="btn btnEdit user' + res.Utilisateurs[i].id + 'Read"         id="edit' + res.Utilisateurs[i].id + '"><span class="glyphicon glyphicon-pencil"></span></button>';
                                      str +=      '<button class="btn btnValidModif user' + res.Utilisateurs[i].id + 'Write"  id="valid' + res.Utilisateurs[i].id + '"><span class="glyphicon glyphicon-ok"></span></button>';
                                      str +=    '</td>';
                                      str +=  '</tr>';
                                      contenu.append(str);
                                    }
                                    $(".btnEdit").click( function() { editTable(this) } );
                                    $(".btnValidModif").click( function() { sendModif(this) } );
                                    $.ajax({
                                              url: "bado.php?cmd=get&table=Contraintes",
                                              type: "GET",
                                              dataType: "json",
                                              success: function(res) {
                                                                        var id, dest, str;
                                                                        constraintList  = res.Contraintes;
                                                                        for (var i = 0; i < res.Contraintes.length; i++) {
                                                                          id    =   res.Contraintes[i].id;
                                                                          dest  =   res.Contraintes[i].destinataire;
                                                                          str   =   '<tr>';
                                                                          str   +=    '<td>';
                                                                          str   +=      $("#user"+dest+">.tdNom>span").html();
                                                                          str   +=    '</td>';
																																					str		+=		'<td>';
																																					str		+=			'<button id="btnDelete'+ id + '" class="user' + id + 'Write btn btn-danger"> <span class="glyphicon glyphicon-remove"></span></button>';
																																					str		+=		'</td>';
                                                                          str   +=  '</tr>';
                                                                          $("#user"+id+">td>table").prepend(str);
                                                                        }
                                                                        hideModifOption();
                                                                      }
                                    });
                                  }
       });
}

function hideModifOption() {
  for (var i = 0; i < userList.length; i++)
    $(".user"+userList[i].id+"Write").css("display", "none");
}

function editTable(btn) {
	var id = btn.id.substring(4);
  $(".user"+id+"Read").css("display", "none");
  $(".user"+id+"Write").css("display", "inline");

	implementSelectOption(id);

}


function sendModif(btn) {
	var id = btn.id.substring(5);
  $(".user"+id+"Read").css("display", "inline");
  $(".user"+id+"Write").css("display", "none");
}


function tirerAuSort() {
  personnesTirees = new Array();
  var tableTirage = $("#tirage>table").children();
  var tirage, str;

  $("#tirage>table>tbody>.coupleCadeau").remove();

  for (var i = 0; i < userList.length; i++) {
    do {
      tirage = parseInt(Math.random()*userList.length);
    } while(!tirageCoherent(i, tirage ));
    personnesTirees[i] = userList[tirage].id;
    str  =  '<tr class="coupleCadeau">';
    str +=    '<td>';
    str +=      userList[i].nom;
    str +=    '</td>';
    str +=    '<td>';
    str +=      userList[tirage].nom;
    str +=    '</td>';
    str +=   '</tr>';
    tableTirage.append(str);
  }
}

function tirageCoherent(posTableUser, tirage) {
  var retour = true;
  var j      = 0;

  if (posTableUser == tirage)
    retour = false;

  while (retour && j < personnesTirees.length)
    if (userList[tirage].id == personnesTirees[j++])
      retour = false;

  while (retour && j < constraintList.length) {
    if (constraintList[j].id == userList[posTableUser].id && constraintList[j].destinataire == userList[tirage].id)
      retour = false;
    j++;
  }

  return retour;
}

function implementSelectOption(id) {
	var select = $("#user"+id+"Select");
	var addIsOk, j;

	for (var i = 0; i < userList.length; i++) {
		addIsOk = true;
		j = 0;

		while (addIsOk && j < constraintList.length) {
			if (constraintList[j].id == id)
				addIsOk = false;
			j++;
		}

		if (addIsOk)
			$(select).append('<option id="user'+ userList[i].id +'Option">'+userList[i].nom+'</option>');
	}
}

$(document).ready(init());
