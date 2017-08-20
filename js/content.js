
Handlebars.registerHelper("makeLink", function(text, url, cls) {
  text = Handlebars.Utils.escapeExpression(text);
  url = Handlebars.Utils.escapeExpression(url);
  cls = Handlebars.Utils.escapeExpression(cls);
  var thelink = '<a class="' + cls + '" href="' + url + '">' +
    text + "</a>";

  return new Handlebars.SafeString(thelink);
});

const content = {main:'<p>  Welcome to my website! I am a researcher in \
  the department \
  of computational molecular biology at the Max Planck Institute for\
  Molecular Genetics in Berlin, where I have recently completed my PhD \
  under the supervision of Prof. Dr. Martin Vingron.\
  My research mainly concerned with studying the DNA sequence content \
  of regulatory regions as well as as next generation sequencing data analysis.\
</p>',

  /*Towards this end, I have developed algorithms to evaluate
  motif match statistics and motif enrichment in DNA sequences.

  During my time at the MPI I was  mainly concerned with developing \
  statistical methods and  applying machine learning to solve questions \
  regarding gene regulation.</p><p>  I am the author of the \
  <a href="https://bioconductor.org/packages/release/bioc/html/motifcounter.html">motifcounter</a>\
   R package.  This package provides functionality to identify and test\
   for enrichment of transcription factor binding sites in DNA sequences.\
  Furthermore, I am the creator of the \
  <a href="https://github.molgen.mpg.de/wkopp/BlueWhale">BlueWhale</a> \
  deep neural network model.  This model attempts to predict transcription \
  factor binding events across the human genome. We validated its performance \
  in the course\
  of the <a href="https://synapse.org/ENCODE">ENCODE-DREAM challenge</a>, \
  in which the model achieved promising results.</p>',*/
  software: '<h2>Motif match statistics</h2> \
  <p>As part of my PhD studies I have developed methods for determining \
  motif match statistics and motif enrichment in DNA sequences. \
  In particular, we have focused on motifs represented as position frequency matrices \
  which are frequently used to model transcription factor (TF) binding affinities. \
  The models are centered around the question as to \
  how often motif matches would occur by chance in random sequences \
  To this end, our models account for the <strong>self-overlapping structure</strong> \
  of the motif, e.g. as seen in palindromic and repeat-like motifs \
  as well as random sequences derived from <strong>higher-order background models</strong>.</p>\
  <p>An implementation as an R package can be found on <a \
    href="https://bioconductor.org/packages/motifcounter">Bioconductor</a> \
  <h2>ENCODE-DREAM challenge participation</h2> \
  I have led and contributed to the BlueWhale team\
  during the  <a href="https://synapse.org/ENCODE">ENCODE-DREAM challenge 2016</a>.\
  The aim of the challenge was to predict transcription factor binding events\
  for multiple cell-types and transcription factors across and within\
  cell-types.\
  To this end, we developed a deep learning model that utilizes the genomic DNA\
  sequence, DNase-seq and RNA-seq information in order to predict\
  TF binding.\
  Our model achieved promising results for some TF/cell-types (e.g. CTCF),\
  while it exhibited apparent weaknesses with others (e.g. JUND).\
  Overall, we obtained the <strong>four</strong> place for the within cell type prediction\
  round, <strong>fifth</strong> place for the conference round and\
  <strong>seventh</strong> place for the second final cross cell prediction round.\
  The model is available under <a href="https://github.molgen.mpg.de/wkopp/BlueWhale">BlueWhale</a> \
  <h2>Unsupervised DNA sequence feature extraction</h2>\
  I have co-supervised the Master thesis on <strong>convolutional restricted \
  Boltzmann machines</strong> to extract redundant DNA sequence features \
  of Roman Schulte-Sasse together with Prof. Dr. Annalisa Marsico. \
  This collaborative work with Roman led to a python package, \
  named <a href="http://crbm.readthedocs.io">cRBM</a>.\
  '}

const title = {main:"Wolfgang Kopp", software:"Software"}
const foto = {main: 1, software:undefined}

load_content = function(usefoto, title, content) {
  const template = document.getElementById("main-template").innerHTML;
  console.log(template);
  const compiled  = Handlebars.compile(template);
  const htmlwithdata = compiled({foto:usefoto, title:title, content:content});
  document.getElementById("content").innerHTML = htmlwithdata;
}

$("#main").click(function(){
  f = foto["main"]
  c = content["main"]
  t = title["main"]
  load_content(f, t, c)

  $(".navbar-nav li").removeClass("active")
  $(this).addClass("active")
})


$("#software").click(function(){
  f = foto["software"]
  c = content["software"]
  t = title["software"]

  load_content(f, t, c)

  $(".navbar-nav li").removeClass("active")
  $(this).addClass("active")
})


$("#main").click()
