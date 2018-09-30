/* @flow */
import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';
import url from 'url';

let win: BrowserWindow;

class Main {
    loadUrl: string;

    constructor() {
        this.loadUrl = this.getLoadUrl('./dist');
        this.initialize();
    }

    getLoadUrl(rootPath: string): string {
        return url.format({
            pathname: path.join(path.resolve(rootPath), 'index.html'),
            protocol: 'file:',
            slashes: true
        });
    }

    ready(): void {
        win = new BrowserWindow({
            width: 400,
            height: 300,
            x: 0,
            y: 0,
            minWidth: 400,
            minHeight: 300,
            webPreferences: {
                nodeIntegration: false,
                webviewTag: false
            }
        });

        win.loadURL(this.loadUrl);

        // initWindowMenu();
    
        win.on('closed', () => {
            win = null;
        });
    
        // win.webContents.openDevTools();
    }

    initWindowMenu() {
        const template = [
            {
                label: 'ファイル',
                submenu: [
                    {
                        label: '閉じる',
                        role: 'quit'
                    }
                ]
            },
            {
                label: 'ビュー',
                submenu: [
                    {
                        label: 'リロード',
                        role: 'reload'
                    }
                ]
            }
        ];
    
        const menu: Menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }

    activate(): void {
        if (win === null) {
            this.ready();
        }
    }

    windowAllClosed(): void {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    }

    initialize(): void {
        app.on('ready', () => this.ready());
        app.on('activate', () => this.activate());
        app.on('window-all-closed', () => this.windowAllClosed());
    }
}

new Main();
