import * as vscode from 'vscode';
import { ObjjDocumentSymbolProvider } from './providers/symbols';
import { ObjjCompletionItemProvider } from './providers/completions';

const OBJJ_FILTER: vscode.DocumentFilter = { language: 'objj', scheme: 'file' };

export function activate(context: vscode.ExtensionContext) {
    // Symbol Provider
    let documentSymbolProvider: vscode.Disposable =
        vscode.languages.registerDocumentSymbolProvider(OBJJ_FILTER, new ObjjDocumentSymbolProvider());
    context.subscriptions.push(documentSymbolProvider);


    // Code Completion Provider
    let completionProvider: vscode.Disposable =
        vscode.languages.registerCompletionItemProvider(OBJJ_FILTER, new ObjjCompletionItemProvider());
    context.subscriptions.push(completionProvider);
}