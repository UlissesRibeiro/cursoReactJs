var bt = document.getElementById("btn");
        
function vpn(){
    var perfil = document.getElementById("perfilVPN").value;
        switch(perfil){
            case "arquitetura":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='arq.zip' download>Download</a>";
            break;
            case "coleta":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='coleta.zip' download>Download</a>";
            break;
            case "diario":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='diario.zip' download>Download</a>";
            break;
            case "infra":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='infra.zip' download>Download</a>";
            break;
            case "junta":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='junta.zip' download>Download</a>";
            break;
            case "licenciamento":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='licen.zip' download>Download</a>";
            break;
        }}