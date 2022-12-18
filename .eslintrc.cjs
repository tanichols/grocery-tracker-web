/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "semi": [2, "never"],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 3
            },
            "multiline": {
                "max": 1
            }
        }],
        "vue/singleline-html-element-content-newline": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-reserved-component-names": "off"
    }
}
