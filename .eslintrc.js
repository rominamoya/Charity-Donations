module.exports = {
  "parser": "babel-eslint",
   "extends": "airbnb",
   "env": {
      "jest": true,
     "browser": true,
   },
   rules: {
    'react/forbid-prop-types': [0],
    "import/no-named-as-default": [0],
    "import/no-named-as-default-member": [0],
    "react/no-array-index-key": [0]
  },
   "plugins": [
     "react"
  ]
};
