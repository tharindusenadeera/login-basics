module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts', './node_modules/react-native-vector-icons/Fonts'],
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null, // Disable iOS auto-linking for fonts to prevent duplication issues
      },
    },
  },
};
