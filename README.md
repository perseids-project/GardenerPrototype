<h1>Gardener Treebanking Self-publicaiton platform</h1>


So you have a bunch of treebanks, either made yourself, or done with a bunch of students. But what do you do with all these trees? Where do you put them? And how do my students point to them to show off the work they have done? 


Ideally this guide should help you self-publish a collection of treebanks (hosted on github). 

This guide is written so that someone with very little knowledge should be able to host a small site to display their treebanks. All we require is that you have a basic knowledge of how to use github, and control over your own treebanks.

To publish your own treebank collection, follow the below instructions. 


<ol>
 	<li>Create a repository on github for your blog
<ol>
 	<li>Create a github account (if you don’t have one already) and familiarize yourself with how <a href="http://rogerdudler.github.io/git-guide/">github works</a></li>
 	<li>Create a repository for your<a href="http://jmcglone.com/guides/github-pages/"> github-pages</a> blog</li>
 	<li>Clone it to your machine</li>
</ol>
</li>
 	<li>Set up <a href="https://jekyllrb.com/docs/quickstart/">Jekyll</a> on your machine. 
<ol>
 	<li>Requires <a href="https://www.ruby-lang.org/">Ruby</a> and <a href="https://rubygems.org/">Rubygems</a></li>
 	<li>Follow the instruction in the Jekyll documentation to create your own blog</li>
 	<li>It is important to configure the repo as a Jekyll blog before you start adding files, as jekyll will write over everything in the directory. </li>
</ol>
</li>
 	<li>Fork the Gardener repo on github
<ol>
 	<li>Clone the forked repo to your machine</li>
 	<li>Change to the GardnerTheme Branch</li>
 	<li>Take the contents of the GardenerTheme and copy them into your Blog’s directory</li>
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


<h1>Setting Up your treebank publications</h1>

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
Layout: leave this value as tbpage, this determines which page template jekyll will use to build the site. For these treebank display pages, you will always want tbpage
Title: this can be whatever you want to call the treebank, it will appear at the top of the page
Work: the title of the specific text you are working with
Author: the original author of the Text you are working with
Editor: the person who annotated the treebank
Tblang: this will determine the main language directory the system will look in for the treebank file. The values “Greek” and “Latin” are case sensitive. 
Locus: the sections of the original text that your treebank contains
Folder: the name of the folder within the language directory that contains your treebank file
Tbfile: the name of the treebank file you want to associate with this treebank page. The above is the default naming convention for treebank files when they are downloaded from Perseids. 

These html files are named after their original treebank file, although with a different file extension. The above yaml header is named “grctb.1911.1.tb.html” 
Any additional content that you want to add to the tbpage, you can add below the yaml header. Even unformated text will appear in the final version of the page above the treebank display. 
These html files can be written up in any simple text editor. 

The default directory structure divides the treebanks by language, and then into categories based on the name of the document. 
Currently we only support this kind of structure, and only three specific language categories, grctb for Ancient Greek treebanks, lattb for Latin treebanks, and misctb for all other language groups. 
</p>