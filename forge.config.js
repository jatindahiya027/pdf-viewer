module.exports = {
  packagerConfig: {
    asar: true,
    icon: 'C:/Users/91741/Downloads/pdf-viewer/pdf-viewer/src/icon/pdf.ico'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      
      config: {
        setupIcon:'C:/Users/91741/Downloads/pdf-viewer/pdf-viewer/src/icon/pdf.ico'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
