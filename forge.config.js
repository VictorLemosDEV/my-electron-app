module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'VictorLemosDEV',
          name: 'my-electron-app'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}