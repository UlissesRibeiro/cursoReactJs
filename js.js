alert('teste');

function perfil(){
var nome = document.getElementById('nome').value;
var infra=['ulisses'];
var licenciamento = ['helio'];

if(infra.indexOf(nome) > -1){
    //alert('é da infra');
    document.write('<a href='infra.ovpn' download><button>Download VPN</button></a>');
}else if(infra.indexOf(nome)<1){
    //alert('não é da infra');
}
if(licenciamento.indexOf(nome) > -1){
    //alert('é do licenciamento');
    document.write('<a href='licen.ovpn' download><button>Download VPN</button></a>');
}else if(licenciamento.indexOf(nome)<1){
    //alert('não é do licenciamento');
}
};
