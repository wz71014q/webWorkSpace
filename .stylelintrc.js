module.exports = {
  processors: [],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [true,
      {
        ignoreAtRules: ['include', 'mixin', 'extend']
      }],
    'media-feature-name-no-unknown': null,
    'rule-empty-line-before': 'never-multi-line',
    'at-rule-empty-line-before': 'never',
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'order/properties-order': [],
    'plugin/rational-order': [true, {
        'border-in-box-model': true,
        'empty-line-between-groups': false
      }],
    'color-function-notation': 'legacy',
    'string-quotes': 'single',
    'alpha-value-notation': 'number',
    'selector-class-pattern': '.*',
    'keyframes-name-pattern': '.*',
    'selector-id-pattern': '.*'
  }
}
