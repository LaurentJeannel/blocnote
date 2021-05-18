exports.action = function(data){
//console.log(data.blocnotedata,data.blocnotelecture,"rrrrrrrrrrrrrr");return
var req ={ query :  {reco : JarvisIANom+" "+JarvisIA.reco ,confidence : JarvisIA.ipappel } }
var request = require('request');path = require('path');
var fs = require('fs');









try{
	var tempstorage = path.resolve('%CD%', './plugins/blocnote/tempstorage.json').replace('\\%CD%', '');
	var contents	=fs.readFileSync(tempstorage,'utf8')
	//var contentsa=JSON.parse(fs.readFileSync(tempstorage,'utf8'))
}catch(err){var contents=[]}


















if((data.blocnotedata==undefined)&&(data.blocnotelecture==undefined)){

		     		console.log(" question ")

console.log(contents)
console.log(JarvisIA.reco)
//var phrasedepart=phraseBlocnote.replace(new RegExp("l'","gi")," ");console.log((phraseBlocnote+" on test dans le dico par sécurité"))









try{
var temp=JarvisIA.reco
console.log(temp," recu en reco")
var testphrase = require(path.resolve('%CD%', './plugins/yoda/testphrase').replace('\\%CD%', '')) ;
var resultatsreco=testphrase(temp)

//console.log(resultatsreco,"eeeeeeee")

var tableau=[]
var result = [];

resultatsreco.forEach((car, index) => car === ' nom ' ? result.push(resultatsreco[index-1]) : null)
console.log(result," result phrase recu")
}catch(err){console.log(err)}


var contents=JSON.parse(contents)









var conteur=0

//contents.length
for(var i=0;i<contents.length;i++){

console.log(contents[i],' les phrases du json')
var resultatscontents=testphrase(contents[i])
//console.log(resultatscontents,'tttttttttt')

//var resultatscontents=['voire en lol','voiture et cles']
var result1 = [];
resultatscontents.forEach((car, index) => car === ' nom ' ? result1.push(resultatscontents[index-1]) : null)
console.log(result1," result1 de la phrase json")


var result2 = [];
for(var j=0;j<result.length;j++){
result1.forEach((car, index) => car === result[j] ? result2.push("1") : null)
}console.log(result2,' result2 à t"on trouvé'," ",contents[i])
if(result2.length>0){JarvisIASpeech("tu m'as dit "+contents[i]);conteur++;return}
if( (result2.length<1)&&(j==result.length-1) ){JarvisIASpeech("tu ne m'a rien dit ");conteur++;return}
}
var tempo2=path.resolve('%CD%',"./script/traitement.js").replace('\\%CD%', '')
		     		var temp = require(tempo2);
console.log(req," !!!!!!!!!!!!!!!!!")
		     		//try{temp.init(req)}
					//catch(err){console.log(err)}

					//delete require.cache[require.resolve(tempo2)]
//tableau.push()
	
	


















					//try{temp.init(req)} catch(err){console.log(err)}
					//delete require.cache[require.resolve(tempo2)]
					return
}











if(data.blocnotelecture=="0"){
	JarvisIASpeech("j'efface")
	var	contents=[]
	var contents=JSON.stringify(contents)
	fs.writeFile(tempstorage,contents.toString(), (err, result) => {
   	  if(err) console.log('error', err);
   	});
	return
}


//console	.log(contents	,tempstorage	,"4444444444444")
//console	.log(JSON.stringify(contents)	,"44dddddd44444444444")
var contents = JSON.parse(contents);var longueur = contents	.length;var jsonStr = JSON.stringify(contents	);//v//ar cd=(objet[1]);
console	.log(contents)

if(data.blocnotelecture=="1"){
	console.log('lecture'+contents	)
	JarvisIASpeech(longueur+" mémos ; " +contents)
	return
}

try{
var reco=JarvisIA.reco
var reg = "/"+data.blocnotedata+"(.+)/i" ; var rgxp=eval(reg) ; var temp = reco.match(rgxp); console.log(temp);var phraseBlocnote =temp[1].trim()

console.log(phraseBlocnote+" valeur à sauvegarder"+tempstorage	)



JarvisIASpeech('je prends en note')
contents.push(phraseBlocnote)
console	.log(contents	)
var contents	 = JSON.stringify(contents	);
	fs.writeFile(tempstorage,contents.toString(), (err, result) =>{
    	 if(err) console.log('error', err);
    });
}catch	(err){console	.log(err)}
//return

//console.log(phraseBlocnote)
//console.log(data.blocnotedata)
//phraseBlocnote.replace(data.blocnotedata,"")
//console.log(phraseBlocnote)






return false

}