// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerTextEditorCommand('extension.exchangeChar', (textEditor, edit)=> {
		const { document, selection } = textEditor
		const { active: { line, character } } = selection
		if(character !== 0) {
			const range = new vscode.Range(line, character - 1, line, character + 1) // 交换的2个char的位置
			const yText = document.getText(range)
			const nText = yText[1] + yText[0]
			edit.replace(range, nText)
		}
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
	// console.log('extension deactivate')
}

module.exports = {
	activate,
	deactivate
}
