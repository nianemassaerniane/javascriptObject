var person ={
firstName : "Mass",
lastName : "Niane",
userName : "popo",
email :" popo@popo.po",
phone : 0912131415,
adress : {
    street : "25 rue des développeurs",
    code :12000,
    contry : "canada"
},
fullName : function(){
    return this.firstName + " " + this.lastName
},
hello : function(){
    return "hello , welcom " + this.fullName();
}
}
var person2 ={...person,
    firstName : "sokhna",
    lastName : "dia",
    userName : "nadia",
    email : "sonadia@da.co",
    anneeNaiss :1993,

    age : function(){
        return "vous avez " + ( 2022  -  this.anneeNaiss ) +" ans"
    }
}
/**************** destruturing****************/
var sayHello = ({firstName }) =>{
    console.log(`hello ${firstName}`);
}