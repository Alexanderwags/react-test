module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },

    "extends": ["react-app", "plugin:import/errors", "plugin:import/warnings"],
    "settings": {
        "import/resolver": {
            "node": {
                "moduleDirectory": ["node_modules", "src/"]
            }
        }
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};