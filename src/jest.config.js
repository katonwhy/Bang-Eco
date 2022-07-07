module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/src/components/Song/song.test.js',
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };