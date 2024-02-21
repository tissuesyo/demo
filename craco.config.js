const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@tmc/const': path.resolve(__dirname, 'src/const/index.ts'),
      '@tmc/components/table': path.resolve(__dirname, 'src/components/table/index.ts'),
      '@tmc/model/*': path.resolve(__dirname, 'src/model/*'),
      '@tmc/utils/formatUtil': path.resolve(__dirname, 'src/utils/formatUtil'),
    },
  },
};
