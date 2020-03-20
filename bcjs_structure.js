/**
 * @author Luis Agustin Gomez Cialceta -webpage-Blastcoding.com
 * @
 */

//example "div>div,div(class:a e,id:an id)[atext]>p"
bcjs_structure = function(structure){
  
  /**
   * @function asocciateElements
   * @description
   * @param {objects array} tags 
   */
  function associateElements(tags){
    if (tags.length>1){
      i = 0;
      do{
        tags[i].appendChild(tags[i+1]);
        i++;
      }while(i<tags.length-1);
    }
  }


  /**
   * @function addAttributes
   * @description pass a text "element" and an element "tag"
   * @param {string} str like div(class:a)
   * @param {object element html} tag 
   */
  function addAttributes(str,tag){
    var atributos = str.substring(str.lastIndexOf("(") + 1, str.lastIndexOf(")"));
    data = [];
    if(atributos.includes(",")){
      atrList = atributos.split(",");
      
      for(i in atrList){
        atr = atrList[i].split(":");
        data[i] = [atr[0],atr[1]];
        alert(data[i]);
      }
      
    }else{
      atr = atributos.split(":");
      data[0] =[atr[0],atr[1]];
      alert(data[0]);
    }
    for(d in data){
      tag.setAttribute(data[d][0],data[d][1]);
    }
  }

  /**
   * @function addText
   * @description Add a text to an html object determined by []
   * @param {string} str 
   * @param {Object HTML} tag 
   */
  function addText(str,tag){
    if(str.includes("[")){
      var text = str.substring(str.lastIndexOf("[") + 1, str.lastIndexOf("]"));
      tag.textContent = text;
    }
  }



  var tags = [];
  structure = structure.split(">");
  //create structure with atributes
  for(i in structure){

      if(structure[i].includes("(")){

        aux = structure[i].split("(");
        tags[i] = document.createElement(aux[0]);

        addAttributes(structure[i],tags[i]);
      }else if(structure[i].includes("[")){
        aux = structure[i].split("[");
        tags[i] = document.createElement(aux[0]);
      }else{
        tags[i] = document.createElement(structure[i]);
      }
      
      addText(structure[i],tags[i]);

  }
  /*asociate elements*/
  associateElements(tags);
  return tags[0];
}

