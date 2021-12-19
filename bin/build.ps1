tsc -p .
npx google-closure-compiler --js=lib/index.js --js_output_file=lib/index.min.js
Remove-Item -Path ./lib/index.js
Move-Item -Path ./lib/index.min.js -Destination ./lib/index.js
git add .
git commit
git push origin master