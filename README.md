<h1>Gardener Treebanking Self-publicaiton Platform</h1>



This guide should help you self-publish a collection of treebanks, and host them in a simple Jekyll-based blog via github pages. 

This guide is written so that anyone should be able to host a small site to display their treebanks. All we require is that you have a basic knowledge of how to use github, and control over your own treebanks.

To publish your own treebank collection, follow the below instructions. 


<ol>
 	<li>fork the GardenerTheme repository
<ol>
 	<li>Create a github account (if you don’t have one already) and familiarize yourself with how <a href="http://rogerdudler.github.io/git-guide/">github works</a></li>
 	<li>Fork the GardenerTheme, this repository will be the basis of your blog</li>
 	<li>Clone it to your machine</li>
</ol>
</li>
 	<li>Set up <a href="https://jekyllrb.com/docs/quickstart/">Jekyll</a> on your machine. 
<ol>
 	<li>Requires <a href="https://www.ruby-lang.org/">Ruby</a> and <a href="https://rubygems.org/">Rubygems</a></li>
 	<li>Follow the instruction in the Jekyll documentation to create your own blog</li>
	<li> when initiating a new blog with jekyll, you will need to use the command "jekyll new. --force"</li>

  <li>Some of the parts of the ThemeBranch are not complete files by themselves, but require you to edit the pregenerated files in the default blog.</li>
	<li>add "_site.asset-cache" to the .gitignore file</li>
	<li> attach the partial config.yml file that is part of the theme, to the default config file</li>
</ol>
</li>
 	<li>Load your treebanks into the xml directory
<ol>
 	<li>Structure the directory correctly, and name your files correctly (see below instructions)</li>
 	<li>Create the tb.html files for each treebank, you can do this in a very basic text editor, or in-browser on github (see below instructions)</li>
 	<li>Edit your main page via the index.html file</li>
</ol>
</li>
 	<li>Use Jekyll to build the site
<ol>
 	<li>You can serve your blog locally to test it out by following<a href="https://jekyllrb.com/docs/usage/"> these instructions</a></li>
 	<li>Once you are satisfied, you can push to github. </li>
</ol>
</li>
</ol>


<h1>Setting Up Your Treebank Publications</h1>

<p>The benefit of using this publication platform, is that you do not even need to understand basic html in order to create a website for your trees. In order to generate each treebank display page, you will need to create an html file for each treebank file. That file can be entirely empty and only needs to have a yaml header which contains the important data that the system needs in order to generate the treebank display. 
Here is a sample yaml header:</p> 

<p style="text-align: left;">---<br>
layout: tbpage<br>
title: "Plato Apology"<br>
work: "Apology"<br>
author: Plato<br>
editor: Tim Buckingham<br>
tblang: Greek<br>
locus: 20b-22b.2<br>
folder: 1911<br>
tbfile: grctb.1911.1.tb.xml<br>
---</p>

<p>
Layout: leave this value as tbpage, this determines which page template jekyll will use to build the site. For these treebank display pages, you will always want tbpage <br>
Title: this can be whatever you want to call the treebank, it will appear at the top of the page<br>
Work: the title of the specific text you are working with<br>
Author: the original author of the Text you are working with<br>
Editor: the person who annotated the treebank<br>
Tblang: this will determine the main language directory the system will look in for the treebank file. The values “Greek” and “Latin” are case sensitive. <br>
Locus: the sections of the original text that your treebank contains<br>
Folder: the name of the folder within the language directory that contains your treebank file <br>
Tbfile: the name of the treebank file you want to associate with this treebank page. The above is the default naming convention for treebank files when they are downloaded from Perseids. <br>
</p>
<p>
These html files are named after their original treebank file, although with a different file extension. The above yaml header is named “grctb.1911.1.tb.html” <br>
Any additional content that you want to add to the tbpage, you can add below the yaml header. Even unformated text will appear in the final version of the page above the treebank display. <br>
These html files can be written up in any simple text editor. <br>
</p>
<p>
The default directory structure divides the treebanks by language, and then into categories based on the name of the document. 
Currently we only support this kind of structure, and only three specific language categories, grctb for Ancient Greek treebanks, lattb for Latin treebanks, and misctb for all other language groups. 
</p>
