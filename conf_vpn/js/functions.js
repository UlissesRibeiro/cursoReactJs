var bt = document.getElementById("btn");
        
function vpn(){
    var perfil = document.getElementById("perfilVPN").value;
        switch(perfil){
            case "arquitetura":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn'  href='arqIos.zip' download style='background-color:gray;color:white;'><i class='bi bi-apple'></i> Download</a> <a class='btn' href='arqLnx.zip' download style='background-color:darkorange;color:white;'><i class='devicon-linux-plain'></i> Download</a> <a class='btn' href='arqWin.zip' download style='background-color:darkblue;color:white;'><i class='bi bi-windows'></i> Download</a>";
            break;
            case "coleta":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='colIos.zip' download style='background-color:gray;color:white;'><i class='bi bi-apple'></i> Download</a> <a class='btn' href='colLnx.zip' download style='background-color:darkorange;color:white;'><i class='devicon-linux-plain'></i> Download</a> <a class='btn' href='colWin.zip' download style='background-color:darkblue;color:white;'><i class='bi bi-windows'></i> Download</a>";
            break;
            case "diario":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='diaIos.zip' download style='background-color:gray;color:white;'><i class='bi bi-apple'></i> Download</a> <a class='btn' href='diaLnx.zip' download style='background-color:darkorange;color:white;'><i class='devicon-linux-plain'></i> Download</a> <a class='btn' href='diaWin.zip' download style='background-color:darkblue;color:white;'><i class='bi bi-windows'></i> Download</a>";
            break;
            case "infra":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='iabIos.zip' download style='background-color:gray;color:white;'><i class='bi bi-apple'></i> Download</a> <a class='btn' href='iabLnx.zip' download style='background-color:darkorange;color:white;'><i class='devicon-linux-plain'></i> Download</a> <a class='btn' href='iabWin.zip' download style='background-color:darkblue;color:white;'><i class='bi bi-windows'></i> Download</a>";
            break;
            case "junta":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='juntaIos.zip' download style='background-color:gray;color:white;'><i class='bi bi-apple'></i> Download</a> <a class='btn' href='juntaLnx.zip' download style='background-color:darkorange;color:white;'><i class='devicon-linux-plain'></i> Download</a> <a class='btn' href='juntaWin.zip' download style='background-color:darkblue;color:white;'><i class='bi bi-windows'></i> Download</a>";
            break;
            case "licenciamento":
            document.getElementById('dlPerfil').innerHTML = "<a class='btn' href='licenIos.zip' download style='background-color:gray;color:white;'><i class='bi bi-apple'></i> Download</a> <a class='btn' href='licenLnx.zip' download style='background-color:darkorange;color:white;'><i class='devicon-linux-plain'></i> Download</a> <a class='btn' href='licenWin.zip' download style='background-color:darkblue;color:white;'><i class='bi bi-windows'></i> Download</a>";
            break;
        }}