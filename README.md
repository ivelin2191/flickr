# flickrPhoto

<article class="markdown-body entry-content" itemprop="text">
    <h2>Prerequisites</h2>
    <ol>
        <li>
            <p>Install Node.js</p>
            <ul>
                <li>on OSX use homebrew <code>brew install node</code></li>
                <li>on Windows use chocolatey <code>choco install nodejs</code></li>
            </ul>
        </li>
        <li>
            <p>Install Yeoman <code>npm install -g yo</code></p>
        </li>
        <li>
            <p>Install these NPM packages globally</p>
            <div class="highlight highlight-source-shell">
                <pre>npm install -g bower gulp nodemon</pre>
            </div>
            <blockquote>
                <p>Refer to these instructions on how to not require sudo</p>
            </blockquote>
        </li>
    </ol>
    <h2>QuickStart</h2>
    <ol>
        <li>
            <p>Install generator-hottowel</p>
            <div class="highlight highlight-source-shell">
                <pre>npm install -g generator-hottowel</pre>
            </div>
        </li>
    </ol>
    <h2>Running HotTowel</h2>
    <h3>Running in dev mode</h3>
    <ul>
        <li>
            <p>Run the project with <code>gulp serve-dev</code></p>
        </li>
        <li>
            <p>opens it in a browser and updates the browser with any files changes.</p>
        </li>
    </ul>
    <h3>Building the project</h3>
    <ul>
        <li>Build the optimized project using <code>gulp build</code></li>
        <li>This create the optimized code for the project and puts it in the build folder</li>
    </ul>
    <h3>Installing Packages</h3>
    <p>When you generate the project it should run these commands, but if you notice missing packages, run these again:</p>
    <ul>
        <li><code>npm install</code></li>
        <li><code>bower install</code></li>
    </ul>
</article>