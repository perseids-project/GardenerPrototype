

var c = new CETEI();
var base = "http://www.perseids.org/tools/arethusa/app/#/jmh?collid=<COLLID>&objid=<OBJID>&doc=<DOC>&chunk=<CHUNK>";
var params = window.location.hash.substring(1).split('-');
var raw = "https://raw.githubusercontent.com/perseids-project/harrington_trees/master/CITE_TREEBANK_XML/perseus/";

c.addBehaviors({"handlers":{
  // Overrides the default ptr behavior, displaying a short link
  "word": function() {
     return function() {
       var shadow = this.createShadowRoot();
       var span = document.createElement("span");
       span.innerHTML = this.getAttribute("form");
       shadow.appendChild(span);
     }
   },


  "sentence": function() {
    return function(elt) {
      if (!elt) {
        elt = this;
      }
      var link = document.createElement("a");
      var num = elt.getAttribute("id");
      link.href = base.replace("<COLLID>",params[0]).replace("<OBJID>",params[1]).replace("<DOC>",params[2]).replace("<CHUNK>",num);
      link.innerHTML = "view tree";
      elt.appendChild(link);
      }
    }
  },





  
 "fallbacks": {
    "word": function(elt) {
      var content = document.createElement("span");
      content.innerHTML = elt.getAttribute("form");
      elt.appendChild(content);
    },
    "sentence": function(elt) {
       var link = document.createElement("a");
       var num = elt.getAttribute("id");
       link.href = base.replace("<COLLID>",params[0]).replace("<OBJID>",params[1]).replace("<DOC>",params[2]).replace("<CHUNK>",num);
       link.innerHTML = "view tree";
       elt.appendChild(link);
    }
  }});
c.getHTML5(raw + params[0] + '/' + params[1] + '/' + params[2] + '.tb.xml', function(data) {
  document.getElementById("TEI").innerHTML = "";
  document.getElementById("TEI").appendChild(data);
  c.addStyle(document, data);
});
