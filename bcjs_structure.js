/**
 * @author Luis Agustin Gomez Cialceta -webpage-Blastcoding.com
 * @
 */

//example "div>div,div(class:a e,id:an id)[atext]>p"
bcjs_strucutre = function(){
  this.tags =[];
  this.structure = function(structure){
    this.tags =[];
    /**
     * @function asocciateElements
     * @description
     * @param {objects array} tags 
     */
    this.associateElements = function(tags){
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
    this.addAttributes= function(text,tag){
      closeParentesisIndex = text.lastIndexOf(")");
      text = text.substring(0, closeParentesisIndex);
      data = [];
      
      if(text.includes(",")){
        atrList = text.split(",");
        
        for(i in atrList){
          atr = atrList[i].split(":");
          data[i] = [atr[0],atr[1]];
        }
        
      }else{
        atr = text.split(":");
        data[0] =[atr[0],atr[1]];
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
    this.addText= function(text,tag){
      if(text.includes("[")){
        var text = text.substring(text.lastIndexOf("[") +1, text.lastIndexOf("]"));
        tag.textContent = text;
      }
    }

    this.getElement = function(structure,i){
      var s;
      
      if(i== "none"){
        s = structure;
        i = 0;
      }else{
        s = structure[i];
      }

      if(s.includes("(")){

        parentesisIndex = s.indexOf("(");
        newElement = s.substring(0,parentesisIndex);
        this.tags[i] = document.createElement(newElement);

        subtext = s.substring(parentesisIndex+1,s.length);
        this.addAttributes(subtext,this.tags[i]);

      }else if(s.includes("[")){
        aux = s.split("[");
        this.tags[i] = document.createElement(aux[0]);
        
      }else{
        this.tags[i] = document.createElement(s);
      }
      this.addText(s,this.tags[i]);
    }




    //var tags = [];
    if(structure.includes(">")){
      structure = structure.split(">");
      //create structure with atributes
      for(i in structure){

        this.getElement(structure,i);

          /*if(structure[i].includes("(")){

            aux = structure[i].split("(");
            tags[i] = document.createElement(aux[0]);

            this.addAttributes(structure[i],tags[i]);
          }else if(structure[i].includes("[")){
            aux = structure[i].split("[");
            tags[i] = document.createElement(aux[0]);
            
          }else{
            tags[i] = document.createElement(structure[i]);
          }
          this.addText(structure[i],tags[i]);*/
          this.associateElements(this.tags);
      }
    }else{
      this.getElement(structure,"none");
    }
    /*asociate elements*/
    
    return this.tags[0];
  }
};

bcjs = new bcjs_strucutre();