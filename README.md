Gardner Treebanking Self-publicaiton platform


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