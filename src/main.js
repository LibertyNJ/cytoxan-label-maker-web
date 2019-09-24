'use-strict';

import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

const isDevMode = process.execPath.match(/[\\/]electron/);

let mainWindow;

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

app.on('activate', handleActivate);
app.on('ready', handleReady);
app.on('window-all-closed', handleWindowAllClosed);

function handleActivate() {
  if (isMainWindowClosed()) {
    createWindow();
  }
}

function isMainWindowClosed() {
  return mainWindow === null;
}

function handleReady() {
  createWindow();
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    minHeight: 675,
    minWidth: 900,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.once('ready-to-show', handleReadyToShow);
  if (isDevMode) {
    await installAndOpenDevTools();
  }
  mainWindow.on('closed', handleClosed);
}

function handleReadyToShow() {
  mainWindow.maximize();
  mainWindow.show();
}

async function installAndOpenDevTools() {
  await installExtension(REACT_DEVELOPER_TOOLS);
  mainWindow.webContents.openDevTools();
}

function handleClosed() {
  mainWindow = null;
}

function handleWindowAllClosed() {
  if (!isPlatformDarwin()) {
    app.quit();
  }
}

function isPlatformDarwin() {
  return process.platform === 'darwin';
}
